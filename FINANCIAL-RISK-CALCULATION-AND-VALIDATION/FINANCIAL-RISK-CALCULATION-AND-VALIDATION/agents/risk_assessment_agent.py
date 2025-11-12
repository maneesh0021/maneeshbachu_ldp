import json
from typing import TypedDict

class State(TypedDict, total=False):
    calculated_metrics: dict
    routing_decision: str
    validation_log: str
    should_generate_report: bool


def risk_assessment_agent(state: State):
    print("[RARA] Assessing risk based on calculated VaR and config...")
    try:
        with open("data/risk_config.json") as f:
            config = json.load(f)
    except FileNotFoundError:
        print("[RARA][ERROR] risk_config.json not found. Using conservative defaults.")
        config = {"VaR_threshold_usd": 0.0, "confidence_level": 0.99, "historical_window": 10}
    except Exception as e:
        print(f"[RARA][ERROR] Failed to load risk_config.json: {e}")
        raise

    if "calculated_metrics" not in state:
        raise ValueError("[RARA][ERROR] calculated_metrics missing from state")

    var_threshold = config.get("VaR_threshold_usd", 0.0)
    var_value = state["calculated_metrics"].get("VaR_99", 0.0)

    try:
        if var_value > var_threshold:
            state["routing_decision"] = "BREACH"
            state["should_generate_report"] = False
            state["validation_log"] = f"Manual review required: VaR {var_value} > Threshold {var_threshold}"
            print("[RARA] BREACH detected – routing to HITL review.")
        else:
            state["routing_decision"] = "CLEAR"
            state["should_generate_report"] = True
            state["validation_log"] = "Auto Approved (No Breach)"
            print("[RARA] Risk within acceptable limits – routing to report generation.")
    except Exception as e:
        print(f"[RARA][ERROR] Exception during assessment: {e}")
        raise

    return state
