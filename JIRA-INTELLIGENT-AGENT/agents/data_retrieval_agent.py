import os
import json
import re
from dotenv import load_dotenv
from langchain_mcp_adapters.client import MultiServerMCPClient
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.agents import create_agent

load_dotenv()

model = ChatGoogleGenerativeAI(model="gemini-2.5-flash")


def extract_markdown(raw):
    """
    Handles the weird format returned by MCP / LLM:
    {"type": "text", "text": "...markdown...", "extras": ...}

    Extract only the markdown table from the "text" field.
    """
    try:
      
        if isinstance(raw, dict) and "text" in raw:
            return raw["text"]

        
        if isinstance(raw, str) and raw.strip().startswith("{"):
            obj = json.loads(raw)
            if "text" in obj:
                return obj["text"]
    except:
        pass

    return raw


def normalize_output(output):
    """ Always return a clean string. """
    if isinstance(output, str):
        return output

    if isinstance(output, list):
        merged = []
        for item in output:
            if isinstance(item, str):
                merged.append(item)
            elif isinstance(item, dict):
                merged.append(json.dumps(item))
            else:
                merged.append(str(item))
        return "\n".join(merged)

    return str(output)


def clean_markdown(text: str) -> str:
    """ Remove thinking blocks, code fences, etc. """

    if not text:
        return ""

    text = re.sub(r"<thinking>.*?</thinking>", "", text, flags=re.DOTALL)
    text = re.sub(r"```.*?```", "", text, flags=re.DOTALL)
    text = re.sub(r"assistant_tool:.*", "", text)
    text = re.sub(r"tool:.*", "", text)

    return text.strip()


async def dra_node(state):
    print("--- Data Retrieval via MCP ---")

    structured_query = state["structured_query"]
    structured_str = json.dumps(structured_query, indent=2)

    user_query = f"""
Use MCP Jira tools to fetch Jira issues.

STRUCTURED QUERY:
{structured_str}

Return ONLY a valid **Markdown table**.
No JSON.
No metadata.
"""

    client = MultiServerMCPClient({
        "jira": {
            "command": "docker",
            "args": [
                "run", "-i", "--rm",
                "-e", f"JIRA_URL={os.getenv('JIRA_URL')}",
                "-e", f"JIRA_USERNAME={os.getenv('JIRA_EMAIL')}",
                "-e", f"JIRA_API_TOKEN={os.getenv('JIRA_API_TOKEN')}",
                "ghcr.io/sooperset/mcp-atlassian:latest"
            ],
            "transport": "stdio",
        }
    })

    try:
        tools = await client.get_tools()
        agent = create_agent(model=model, tools=tools)

        response = await agent.ainvoke(
            {"messages": [{"role": "user", "content": user_query}]}
        )

        raw_output = response["messages"][-1].content
        normalized = normalize_output(raw_output)

        markdown_text = extract_markdown(normalized)
        markdown_text = clean_markdown(markdown_text)

        return {"jira_data": markdown_text}

    except Exception as e:
        print(f"[Agent-2 ERROR]: {e}")
        return {"jira_data": f"Error: {e}"}

    finally:
        try:
            await client.close()
        except:
            pass