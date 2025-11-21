
import json
import re
from utils.gemini_config import get_model
from utils.prompts import QUERY_UNDERSTANDING_PROMPT


async def qia_node(state):
    """Agent 1: Convert natural language into a structured query."""
    
    user_text = state["user_input"]
    model = get_model()

    prompt = QUERY_UNDERSTANDING_PROMPT + f"\nUser Query: {user_text}"
    response = model.generate_content(prompt)

    raw = response.text.strip()

    if raw.startswith("```"):
        raw = raw.strip("`").replace("json", "").strip()

    match = re.search(r"{.*}", raw, re.DOTALL)
    structured = json.loads(match.group()) if match else {}

    state["structured_query"] = structured
    return state
