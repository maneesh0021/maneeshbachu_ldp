import os
import json
from datetime import datetime
from fpdf import FPDF
from typing import Any, Dict, List

class State(dict):
    pass


def pick_field(obj: Dict[str, Any], candidates: List[str], default=None):
    if not obj:
        return default
    for k in candidates:
        if k in obj:
            return obj[k]
    norm_map = {k.lower().replace(" ", "").replace("_", ""): k for k in obj.keys()}
    for cand in candidates:
        key_norm = cand.lower().replace(" ", "").replace("_", "")
        if key_norm in norm_map:
            return obj[norm_map[key_norm]]
    return default


def to_float(x, default=0.0):
    try:
        if x is None:
            return default
        if isinstance(x, (int, float)):
            return float(x)
        s = str(x).replace(",", "").replace("$", "").strip()
        return float(s) if s != "" else default
    except Exception:
        return default


async def report_generation_agent(state: State, case_name: str):
    """
    Generates a clean PDF risk report (only for CLEAR cases).
    """
    print("[RGA] Starting Report Generation Agent...")

   
    if state.get("routing_decision") == "BREACH":
        print("[RGA] Skipping PDF generation for BREACH case (HITL routing).")
        return state

    try:
        os.makedirs("reports", exist_ok=True)

        metrics = state.get("calculated_metrics", {}) or {}
        clean_data = state.get("clean_portfolio_data", {}) or {}
        portfolio = clean_data.get("portfolio", []) or []
        conf_level = clean_data.get("conf_level", 0.99)

        VaR_99 = to_float(metrics.get("VaR_99", 0.0))
        mcp_audit_id = metrics.get("mcp_audit_id", "N/A")

        
        try:
            with open("data/risk_config.json") as f:
                config = json.load(f)
        except Exception:
            config = {}

        threshold = to_float(config.get("VaR_threshold_usd", 0.0))
        window = int(config.get("historical_window", 10))

        routing_decision = state.get("routing_decision", "N/A")
        validation_log = state.get("validation_log", "N/A")

        qty_candidates = ["Quantity", "quantity", "Qty", "qty", "Amount", "amount"]
        price_candidates = [
            "Market Price (USD)", "MarketPrice", "Market_Price", "Price", "price", "market_price_usd",
        ]
        asset_id_candidates = ["Asset ID", "Asset_ID", "AssetId", "asset_id", "asset", "id", "ticker"]
        sector_candidates = ["Sector", "sector", "Industry", "industry"]
        desc_candidates = ["Description", "description", "Name", "name", "Asset Name", "asset_name"]


        enriched = []
        total_portfolio_value = 0.0
        for row in portfolio:
            qty = to_float(pick_field(row, qty_candidates, 0))
            price = to_float(pick_field(row, price_candidates, 0))
            asset_id = pick_field(row, asset_id_candidates, None)
            sector = pick_field(row, sector_candidates, None)
            desc = pick_field(row, desc_candidates, None)

            value = qty * price
            total_portfolio_value += value

            enriched.append({
                "asset_id": asset_id or desc or "UNKNOWN",
                "description": desc or "",
                "sector": sector or "Unknown",
                "quantity": qty,
                "price": price,
                "value": value,
            })


        if total_portfolio_value > 0:
            for e in enriched:
                e["weight_pct"] = (e["value"] / total_portfolio_value) * 100
        else:
            for e in enriched:
                e["weight_pct"] = 0.0

  
        sector_agg = {}
        for e in enriched:
            sec = e["sector"] or "Unknown"
            sector_agg.setdefault(sec, 0.0)
            sector_agg[sec] += e["value"]
        sectors_sorted = sorted(sector_agg.items(), key=lambda x: x[1], reverse=True)


        report_id = f"RGA-{datetime.now().strftime('%Y%m%d-%H%M%S')}"
        gen_date = datetime.now().strftime("%B %d, %Y")
        calc_method = f"Historical Simulation ({window}-Day Window)"

        if routing_decision == "CLEAR":
            orchestration = "Auto-Approved: RARA -> RGA -> END"
            compliance_desc = "CLEAR (Within Acceptable Limits)"
            val_status = "Approved by System"
            val_notes = "VaR within acceptable compliance threshold - No breach detected."
        else:
            orchestration = "Escalated: RARA -> HITL"
            compliance_desc = "BREACH (Threshold Exceeded)"
            val_status = "Manual Review Required"
            val_notes = "VaR exceeds compliance threshold - human validation required."

        pdf = FPDF()
        pdf.add_page()
        pdf.set_auto_page_break(auto=True, margin=15)

    
        pdf.set_font("Arial", "B", 14)
        pdf.cell(0, 10, txt="Daily Portfolio Risk Summary", ln=True, align="C")
        pdf.ln(4)

        pdf.set_font("Arial", size=11)
        pdf.cell(0, 7, txt=f"Report ID: {report_id}", ln=True)
        pdf.cell(0, 7, txt=f"Date Generated: {gen_date}", ln=True)
        pdf.ln(6)

        pdf.set_font("Arial", "B", 11)
        col1_w = 80
        col2_w = 90
        row_h = 7
        pdf.set_fill_color(220, 220, 220)
        pdf.cell(col1_w, row_h, txt="Section", border=1, fill=True)
        pdf.cell(col2_w, row_h, txt="Content", border=1, ln=True, fill=True)
        pdf.set_font("Arial", "", 11)

        pdf.cell(col1_w, row_h, txt="I. Key Risk Metrics", border=1)
        pdf.cell(col2_w, row_h, txt="", border=1, ln=True)
        pdf.cell(col1_w, row_h, txt="VaR (99%, 1-Day)", border=1)
        pdf.cell(col2_w, row_h, txt=f"${VaR_99:,.2f}", border=1, ln=True)
        pdf.cell(col1_w, row_h, txt="VaR Compliance Threshold", border=1)
        pdf.cell(col2_w, row_h, txt=f"${threshold:,.2f}", border=1, ln=True)
        pdf.cell(col1_w, row_h, txt="Compliance Status", border=1)
        pdf.cell(col2_w, row_h, txt=compliance_desc, border=1, ln=True)

        pdf.set_font("Arial", "B", 11)
        pdf.cell(col1_w, row_h, txt="II. Audit & Execution Trace", border=1)
        pdf.cell(col2_w, row_h, txt="", border=1, ln=True)
        pdf.set_font("Arial", "", 11)
        pdf.cell(col1_w, row_h, txt="Total Portfolio Value (V0)", border=1)
        pdf.cell(col2_w, row_h, txt=f"${total_portfolio_value:,.2f}", border=1, ln=True)
        pdf.cell(col1_w, row_h, txt="Calculation Method Used", border=1)
        pdf.cell(col2_w, row_h, txt=calc_method, border=1, ln=True)
        pdf.cell(col1_w, row_h, txt="MCP Tool Audit ID", border=1)
        pdf.cell(col2_w, row_h, txt=str(mcp_audit_id), border=1, ln=True)
        pdf.cell(col1_w, row_h, txt="Orchestration Route", border=1)
        pdf.cell(col2_w, row_h, txt=orchestration, border=1, ln=True)


        pdf.set_font("Arial", "B", 11)
        pdf.cell(col1_w, row_h, txt="III. Portfolio Breakdown", border=1)
        pdf.cell(col2_w, row_h, txt="", border=1, ln=True)
        pdf.set_font("Arial", "", 11)
        if sectors_sorted:
            top_sector, top_sector_val = sectors_sorted[0]
            pct = (top_sector_val / total_portfolio_value * 100) if total_portfolio_value > 0 else 0.0
            pdf.cell(col1_w, row_h, txt="Top Sector Exposure", border=1)
            pdf.cell(col2_w, row_h, txt=f"{top_sector} (${top_sector_val:,.2f})", border=1, ln=True)
        else:
            pdf.cell(col1_w, row_h, txt="Top Sector Exposure", border=1)
            pdf.cell(col2_w, row_h, txt="N/A", border=1, ln=True)


        pdf.set_font("Arial", "B", 11)
        pdf.cell(col1_w, row_h, txt="IV. Validation Summary", border=1)
        pdf.cell(col2_w, row_h, txt="", border=1, ln=True)
        pdf.set_font("Arial", "", 11)
        pdf.cell(col1_w, row_h, txt="Validation Status", border=1)
        pdf.cell(col2_w, row_h, txt=val_status, border=1, ln=True)
        pdf.cell(col1_w, row_h, txt="Validation Notes", border=1)
        pdf.multi_cell(col2_w, row_h, txt=val_notes, border=1)

  
        ts = datetime.now().strftime("%Y%m%d-%H%M%S")
        safe_case = str(case_name).replace(" ", "_")
        filename = f"reports/RGA-{safe_case}-{ts}.pdf"
        pdf.output(filename)
        print(f"[RGA] Report generated successfully → {filename}")


        state["report_filename"] = filename

    except Exception as e:
        print(f"[RGA][ERROR] Failed to generate report: {e}")
        raise

    return state
