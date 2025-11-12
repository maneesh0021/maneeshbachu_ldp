import pandas as pd
from typing import TypedDict, Optional

class State(TypedDict, total=False):
    clean_portfolio_data: dict

def data_ingestion_agent(state: State, portfolio_file: Optional[str] = "data/portfolio_dump.csv"):
    print("[DIA] Reading and normalizing portfolio and market data...")
    try:
        portfolio_df = pd.read_csv(portfolio_file)
    except FileNotFoundError:
        print(f"[DIA][ERROR] Portfolio file not found: {portfolio_file}")
        raise
    except Exception as e:
        print(f"[DIA][ERROR] Failed to read portfolio file: {e}")
        raise

    try:
        market_df = pd.read_csv("data/market_closes.csv")
    except FileNotFoundError:
        print("[DIA][ERROR] market_closes.csv not found in data/ folder.")
        raise
    except Exception as e:
        print(f"[DIA][ERROR] Failed to read market_closes.csv: {e}")
        raise

    portfolio_df.columns = [col.strip().replace(" ", "_") for col in portfolio_df.columns]
    market_df.columns = [col.strip().replace(" ", "_") for col in market_df.columns]

    # Convert to structures expected by the MCP tool
    portfolio = portfolio_df.to_dict(orient="records")
    # Historical returns: drop Day/Date if present, produce dict keyed by asset id if header names match assets
    hist_df = market_df.drop(columns=[c for c in ["Day", "Date"] if c in market_df.columns])
    hist_returns = {col: hist_df[col].tolist() for col in hist_df.columns}

    # default confidence level; can be overridden by config or pipeline
    clean_data = {
        "portfolio": portfolio,
        "hist_returns": hist_returns,
        "conf_level": 0.99
    }

    state["clean_portfolio_data"] = clean_data
    print(f"[DIA] Data ingestion complete. Portfolio rows: {len(portfolio)}. Added 'clean_portfolio_data' to state.")
    return state
