import json
from collections import Counter, defaultdict

class DataProcessingAgent:
    """
    Agent-3: Converts raw Jira markdown/table → clean structured JSON
    Also generates:
    - status counts
    - workload counts
    - simple velocity placeholder if sprint not present
    """

    def process(self, jira_markdown: str):
        if not jira_markdown or not jira_markdown.strip():
            return {}

        lines = jira_markdown.strip().split("\n")

        rows = []
        headers = []
        reading_table = False

        for line in lines:
            if line.startswith("|") and line.endswith("|"):
                parts = [col.strip() for col in line.split("|")[1:-1]]

                if not reading_table:
                    headers = parts
                    reading_table = True
                else:
                    if len(parts) == len(headers):
                        rows.append(dict(zip(headers, parts)))

        result = {"issues": rows}

        status_counts = Counter()

        for issue in rows:
            status = issue.get("Status", "Unknown")
            status_counts[status] += 1

        result["issue_status_counts"] = dict(status_counts)

        workload = Counter()

        for issue in rows:
            assignee = issue.get("Assignee", "Unassigned")
            workload[assignee] += 1

        result["assignee_workload"] = dict(workload)

        done_count = status_counts.get("Done", 0)

        result["sprint_velocity"] = [
            {"sprint": "Sprint-1", "velocity": done_count},
            {"sprint": "Sprint-2", "velocity": done_count},   
        ]

        return result


processor = DataProcessingAgent()

async def dpa_node(state):
    jira_md = state.get("jira_data", "")
    parsed = processor.process(jira_md)
    state["processed_json"] = parsed
    return state