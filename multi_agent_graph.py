from typing import TypedDict, Annotated, List
from langchain_core.messages import BaseMessage
from langgraph.graph import StateGraph, END


class AgentState(TypedDict):
    """Represent the state of our graph."""
    input: str
    chat_history: List[BaseMessage]
    search_results: str
    pipeline_config: dict
    validation_results: dict
    monitoring_data: dict
    workflow_status: str


def create_graph(search_agent, pipeline_builder_agent, validation_agent, measure_monitor_agent, execution_agent):
    workflow = StateGraph(AgentState)

    workflow.add_node("search", search_agent.run)
    workflow.add_node("pipeline_builder", pipeline_builder_agent.run)
    workflow.add_node("validation", validation_agent.run)
    workflow.add_node("measure_monitor", measure_monitor_agent.run)
    workflow.add_node("execution", execution_agent.run)

    workflow.set_entry_point("search")

    workflow.add_edge("search", "pipeline_builder")
    workflow.add_edge("pipeline_builder", "validation")
    workflow.add_edge("validation", "measure_monitor")
    workflow.add_edge("measure_monitor", "execution")
    workflow.add_edge("execution", END)

    return workflow.compile()


