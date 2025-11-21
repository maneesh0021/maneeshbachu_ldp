# # main.py

# import asyncio
# import json
# from workflow.query_graph import build_query_graph


# async def main():
#     print("Jira Intelligent Agent (Docker MCP + LangGraph)")
#     print("Ask me anything about your Jira projects.")

#     app = build_query_graph()

#     while True:
#         user_input = input("\nEnter Jira Query (or 'exit'): ")

#         if user_input.lower() == "exit":
#             print("Goodbye!")
#             break

#         print("\nThinking...\n")

#         # invoke the graph: provide initial state with user_input
#         result = await app.ainvoke({"user_input": user_input})

#         print("----------------------------")
#         print("STRUCTURED QUERY (Agent-1)")
#         print("----------------------------")
#         structured = result.get("structured_query", {})
#         print(json.dumps(structured, indent=2))

#         print("\n----------------------------")
#         print("JIRA RESPONSE (Agent-2) - MARKDOWN")
#         print("----------------------------")
#         print(result.get("jira_data", result.get("data_retrieval_output", "No Jira markdown output found")))

#         print("\n----------------------------")
#         print("PROCESSED JSON (Agent-3)")
#         print("----------------------------")
#         processed = result.get("processed_json", {})
#         print(json.dumps(processed, indent=2))

#         print("\n")  # spacing between queries


# if __name__ == "__main__":
#     asyncio.run(main())

# main.py

import asyncio
import json
from workflow.query_graph import build_query_graph


async def main():
    print("Jira Intelligent Agent (Docker MCP + LangGraph)")
    print("Ask me anything about your Jira projects.")

    app = build_query_graph()

    while True:
        user_input = input("\nEnter Jira Query (or 'exit'): ")

        if user_input.lower() == "exit":
            print("Goodbye!")
            break

        print("\nThinking...\n")

        result = await app.ainvoke({"user_input": user_input})

        print("----------------------------")
        print("STRUCTURED QUERY (Agent-1)")
        print("----------------------------")
        print(json.dumps(result.get("structured_query", {}), indent=2))

        print("\n----------------------------")
        print("JIRA RESPONSE (Agent-2) - MARKDOWN")
        print("----------------------------")
        print(result.get("jira_data", result.get("data_retrieval_output", "No Jira markdown output found")))

        print("\n----------------------------")
        print("PROCESSED JSON (Agent-3)")
        print("----------------------------")
        print(json.dumps(result.get("processed_json", {}), indent=2))

        print("\n----------------------------")
        print("VISUALIZATION + INSIGHTS (Agent-4)")
        print("----------------------------")

        viz = result.get("visualization_output", {})

        print("\nSUMMARY:")
        print(viz.get("summary", "No summary."))

        print("\nASCII CHARTS:\n")
        print(viz.get("ascii_charts", "No ASCII charts."))

        print("\n")  # spacing


if __name__ == "__main__":
    asyncio.run(main())