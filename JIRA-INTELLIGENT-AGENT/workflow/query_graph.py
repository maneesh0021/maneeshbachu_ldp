from langgraph.graph import StateGraph, START, END
from typing import TypedDict, Dict, Any

from agents.query_agent import qia_node
from agents.data_retrieval_agent import dra_node
from agents.data_processing_agent import dpa_node
from agents.visualization_agent import viz_node


class QueryState(TypedDict, total=False):
    user_input: str
    structured_query: Dict[str, Any]
    jira_data: str
    jira_parsed: Any
    processed_json: Dict[str, Any]
    visualization_output: Dict[str, Any]


def build_query_graph():
    graph = StateGraph(QueryState)

    graph.add_node("QIA", qia_node)
    graph.add_node("DRA", dra_node)
    graph.add_node("DPA", dpa_node)
    graph.add_node("VIZ", viz_node)

    graph.add_edge(START, "QIA")
    graph.add_edge("QIA", "DRA")
    graph.add_edge("DRA", "DPA")
    graph.add_edge("DPA", "VIZ")
    graph.add_edge("VIZ", END)

    return graph.compile()