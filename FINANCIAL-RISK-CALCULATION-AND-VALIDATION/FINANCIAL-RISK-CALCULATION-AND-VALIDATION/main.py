import asyncio
import traceback
from agents.data_ingestion_agent import data_ingestion_agent
from agents.formulaic_calc_agent import formulaic_calc_agent
from agents.risk_assessment_agent import risk_assessment_agent
from agents.report_generation_agent import report_generation_agent

# list of portfolios to process (CLEAR and BREACH)
PORTFOLIO_FILES = [
    ("CLEAR", "data/portfolio_dump.csv"),
    ("BREACH", "data/portfolio_breach.csv")
]


async def run_pipeline_for(portfolio_label: str, portfolio_file: str):
    state = {}
    try:
        # Step 1: Data ingestion
        state = data_ingestion_agent(state, portfolio_file=portfolio_file)

        # Step 2: Compute VaR via MCP
        state = await formulaic_calc_agent(state)

        # Step 3: Assess risk and route
        state = risk_assessment_agent(state)

        # Step 4: Conditional report generation
        if state.get("should_generate_report", False):
            state = await report_generation_agent(state, portfolio_label)
        else:
            print(f"[MAIN] Skipping report for {portfolio_label} due to BREACH routing (HITL required).")

        return state.get("report_filename")

    except Exception as e:
        print(f"[MAIN][ERROR] Pipeline failed for {portfolio_label} ({portfolio_file}): {e}")
        traceback.print_exc()
        return None


async def main():
    generated = []
    for label, f in PORTFOLIO_FILES:
        print(f"\n[MAIN] Running pipeline for: {label} (file: {f})")
        filename = await run_pipeline_for(label, f)
        if filename:
            generated.append(filename)

    print("\n[MAIN] Run complete. Generated files:")
    for g in generated:
        print(f" - {g}")


if __name__ == "__main__":
    asyncio.run(main())
