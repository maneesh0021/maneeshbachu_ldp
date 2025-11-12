import asyncio
import json
from typing import TypedDict
from langchain_mcp_adapters.client import MultiServerMCPClient
from langchain_mcp_adapters.tools import load_mcp_tools

class State(TypedDict, total=False):
    clean_portfolio_data: dict
    calculated_metrics: dict

async def formulaic_calc_agent(state: State):
    print("[FCA] Starting Value-at-Risk (VaR) calculation via MCP...")

    try:
        clean_data = state["clean_portfolio_data"]

        client = MultiServerMCPClient({
            "RiskCalc MCP Server": {
                "url": "http://localhost:8000/mcp",
                "transport": "streamable_http",
            }
        })

        async with client.session("RiskCalc MCP Server") as session:
            tools = await load_mcp_tools(session)
            var_tool = next((t for t in tools if t.name == "compute_historical_var"), None)

            if not var_tool:
                raise ValueError("[FCA] compute_historical_var tool not found on MCP server!")

            result = await var_tool.ainvoke(input=clean_data)

    
            if isinstance(result, str):
                result = json.loads(result)

        state["calculated_metrics"] = result
        print(f"[FCA] Computation complete. VaR_99 = {result['VaR_99']}")
    
    except Exception as e:
        print(f"[FCA][ERROR] Exception during MCP call: {e}")
        raise

    return state