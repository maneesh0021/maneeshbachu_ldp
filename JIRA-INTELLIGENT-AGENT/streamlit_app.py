import streamlit as st
import asyncio
import json
from workflow.query_graph import build_query_graph

app = build_query_graph()

async def run_agent(user_query: str):
    state = {"user_input": user_query}
    result = await app.ainvoke(state)
    return result

st.set_page_config(page_title="Zemoso Jira Intelligent Agent", layout="wide")

st.title("🤖 Zemoso Jira Intelligent Agent")
st.write("Ask natural-language questions about Jira boards in Zemoso space.")


with st.sidebar:
    st.header("⚙️ Settings")
    debug_mode = st.checkbox("Show Debug Data", value=True)
    st.markdown("---")
    st.caption("Made with LangGraph + MCP + Streamlit")

user_query = st.text_input("Enter your Jira question:")

if st.button("Run Query"):
    if not user_query.strip():
        st.warning("Please enter a valid query.")
        st.stop()

    st.info("Processing query… This may take 5–15 seconds depending on Jira API.")

    result = asyncio.run(run_agent(user_query))

   
    structured = result.get("structured_query", {})
    jira_md = result.get("jira_data", "")
    processed = result.get("processed_json", {})
    viz = result.get("visualization_output", {})

    st.success("Query Completed!")

    st.subheader("🧠 Structured Query (Agent-1 Output)")
    st.json(structured)

    st.subheader("📄 Jira Data (Markdown Table from Agent-2)")
    if jira_md:
        st.code(jira_md, language="markdown")
    else:
        st.warning("No Jira data found.")

    if debug_mode:
        st.subheader("🔍 Processed JSON (Agent-3 Output)")
        st.json(processed)

    st.subheader("📊 Insights & Visualization (Agent-4 Output)")

    st.markdown("### 📝 Summary")
    st.write(viz.get("summary", "No summary available."))

    st.markdown("### 📈 ASCII Charts")
    st.code(viz.get("ascii_charts", "No charts available."), language="text")
