import json

class VisualizationAgent:
    """
    Agent-4: Visualization & Insight Agent (NO matplotlib)
    Generates:
    - Natural-language summary
    - ASCII bar charts
    """

    def generate_visualization(self, processed_json: dict):
        if not processed_json:
            return {
                "summary": "No processed Jira data found.",
                "ascii_charts": "No charts generated."
            }

        summary_parts = []
        charts = []

        # 1. Sprint Velocity Chart
        if "sprint_velocity" in processed_json:
            velocity_data = processed_json["sprint_velocity"]
            summary_parts.append(self._velocity_summary(velocity_data))
            charts.append(self._ascii_velocity_chart(velocity_data))

        # 2. Issue Status Breakdown
        if "issue_status_counts" in processed_json:
            counts = processed_json["issue_status_counts"]
            summary_parts.append(self._status_summary(counts))
            charts.append(self._ascii_status_chart(counts))

        # 3. Workload (Assignee → issue count)
        if "assignee_workload" in processed_json:
            workload = processed_json["assignee_workload"]
            summary_parts.append(self._workload_summary(workload))
            charts.append(self._ascii_workload_chart(workload))

        return {
            "summary": "\n".join(summary_parts),
            "ascii_charts": "\n\n".join(charts)
        }

    # SUMMARIES
    def _velocity_summary(self, velocity_data):
        if not velocity_data:
            return ""

        start = velocity_data[0]["velocity"]
        end = velocity_data[-1]["velocity"]
        diff = end - start

        if diff > 0:
            trend = f"Velocity increased by {diff} points over the last sprints."
        elif diff < 0:
            trend = f"Velocity decreased by {abs(diff)} points recently."
        else:
            trend = "Velocity remained stable."

        return f"📈 Velocity Summary: {trend}"

    def _status_summary(self, counts):
        todo = counts.get("To Do", 0)
        progress = counts.get("In Progress", 0)
        done = counts.get("Done", 0)

        return (
            f"📌 Issue Status Summary:\n"
            f"- {done} completed\n"
            f"- {progress} in progress\n"
            f"- {todo} pending"
        )

    def _workload_summary(self, workload):
        if not workload:
            return ""

        max_user = max(workload, key=workload.get)
        max_val = workload[max_user]

        return f"👤 Workload Summary: {max_user} has the highest workload with {max_val} issues."


    # ASCII CHARTS

    def _ascii_velocity_chart(self, data):
        chart = ["\n=== Sprint Velocity Chart ==="]
        for item in data:
            bar = "█" * (item["velocity"] // 2)
            chart.append(f"{item['sprint']:10} | {bar} {item['velocity']}")
        return "\n".join(chart)

    def _ascii_status_chart(self, counts):
        chart = ["\n=== Issue Status Breakdown ==="]
        total = sum(counts.values()) or 1

        for label, value in counts.items():
            percent = int((value / total) * 50)
            bar = "█" * percent
            chart.append(f"{label:12} | {bar} {value}")
        return "\n".join(chart)

    def _ascii_workload_chart(self, workload):
        chart = ["\n=== Workload by Assignee ==="]
        max_val = max(workload.values()) if workload else 1

        for user, count in workload.items():
            bar_len = int((count / max_val) * 40)
            bar = "█" * bar_len
            chart.append(f"{user:12} | {bar} {count}")
        return "\n".join(chart)



visual_agent = VisualizationAgent()

async def viz_node(state):
    processed = state.get("processed_json", {})
    output = visual_agent.generate_visualization(processed)
    state["visualization_output"] = output
    return state