
import yaml

class PipelineBuilderAgent:
    def __init__(self, config_path="pipelines/pipeline_config.yml"):
        self.config_path = config_path

    def load_pipeline_config(self):
        """Loads the pipeline configuration from a YAML file."""
        with open(self.config_path, 'r') as f:
            return yaml.safe_load(f)

    def run(self, state: dict):
        print("---PIPELINE BUILDER AGENT---")
        pipeline_config = self.load_pipeline_config()
        print(f"Pipeline config loaded: {pipeline_config}")
        return {**state, "pipeline_config": pipeline_config}

if __name__ == '__main__':
    # This requires the pipeline_config.yml to exist in the specified path
    # agent = PipelineBuilderAgent()
    # config = agent.load_pipeline_config()
    # print(config)
    print("PipelineBuilderAgent initialized. Ready to run.")


