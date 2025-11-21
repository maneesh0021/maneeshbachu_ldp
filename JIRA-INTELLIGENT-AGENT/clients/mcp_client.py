import os
import asyncio
from langchain_mcp_adapters.client import MultiServerMCPClient


class MCPClient:
    def __init__(self):
        # Load absolute .env path
        env_path = os.path.abspath(".env")

        # MCP server definition
        self.client = MultiServerMCPClient({
            "jira": {
                "command": "docker",
                "args": [
                    "run", "-i", "--rm",
                    "--env-file", env_path,
                    "ghcr.io/sooperset/mcp-atlassian:latest"
                ],
                "transport": "stdio"
            }
        })

    async def _run_tool(self, tool_name, arguments):
        # Create a session for “jira”
        session = self.client.session("jira")

        async with session as s:
            result = await s.call_tool(tool_name, arguments)
            return result

    async def get_boards(self):
        return await self._run_tool("getAgileBoards", {})

    async def get_sprints(self, board_id):
        return await self._run_tool("getSprints", {"boardId": board_id})

    async def get_sprint_issues(self, board_id, sprint_id):
        return await self._run_tool(
            "getIssues",
            {"boardId": board_id, "sprintId": sprint_id}
        )
