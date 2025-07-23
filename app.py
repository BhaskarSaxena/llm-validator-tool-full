from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from langgraph.graph import StateGraph, END
from typing import TypedDict, Annotated, List
from langchain_core.messages import BaseMessage

from agents.search_agent import SearchAgent
from agents.pipeline_builder_agent import PipelineBuilderAgent
from agents.validation_agent import ValidationAgent
from agents.measure_monitor_agent import MeasureMonitorAgent
from agents.execution_agent import ExecutionAgent

from multi_agent_graph import create_graph, AgentState

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "LLM Validator Tool is running!"}

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Initialize agents
search_agent = SearchAgent()
pipeline_builder_agent = PipelineBuilderAgent()
validation_agent = ValidationAgent()
measure_monitor_agent = MeasureMonitorAgent()
execution_agent = ExecutionAgent()

# Create the LangGraph graph
app_graph = create_graph(search_agent, pipeline_builder_agent, validation_agent, measure_monitor_agent, execution_agent)

@app.get("/run_validation")
async def run_validation(input_text: str = "Initial validation request."):
    initial_state = {
        "input": input_text,
        "chat_history": [],
        "search_results": "",
        "pipeline_config": {},
        "validation_results": {},
        "monitoring_data": "",
        "workflow_status": "pending"
    }
    
    # Run the graph
    final_state = None
    for s in app_graph.stream(initial_state):
        print(s)
        final_state = s

    return {"message": "Validation workflow completed", "final_state": final_state}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)


