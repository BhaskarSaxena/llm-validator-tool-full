
from prometheus_client import Gauge, generate_latest

class MeasureMonitorAgent:
    def __init__(self):
        # Prometheus metrics
        self.validation_success_gauge = Gauge(
            'llm_validation_success_total',
            'Total count of successful LLM validations'
        )
        self.validation_failure_gauge = Gauge(
            'llm_validation_failure_total',
            'Total count of failed LLM validations'
        )
        self.hallucination_rate_gauge = Gauge(
            'llm_hallucination_rate',
            'Rate of hallucinations detected in LLM outputs'
        )
        self.bias_detected_gauge = Gauge(
            'llm_bias_detected_total',
            'Total count of biases detected in LLM outputs'
        )

    def collect_metrics(self, validation_results: dict):
        """Collects and updates metrics based on validation results."""
        if validation_results.get("correctness_check") == "Yes":
            self.validation_success_gauge.inc()
        else:
            self.validation_failure_gauge.inc()

        if validation_results.get("hallucination_check") == "Yes":
            self.hallucination_rate_gauge.inc()

        # Simplified bias detection for metric purposes
        if "No obvious bias detected." not in validation_results.get("bias_analysis", ""):
            self.bias_detected_gauge.inc()

        print("Metrics collected and updated.")

    def generate_report(self):
        """Generates a basic monitoring report (e.g., Prometheus metrics)."""
        return generate_latest().decode("utf-8")

    def run(self, state: dict):
        print("---MEASURE & MONITOR AGENT---")
        validation_results = state.get("validation_results", {})
        self.collect_metrics(validation_results)
        monitoring_data = self.generate_report()
        print(f"Monitoring data (Prometheus format):\n{monitoring_data[:200]}...")
        return {**state, "monitoring_data": monitoring_data}

if __name__ == '__main__':
    agent = MeasureMonitorAgent()
    # Example usage:
    # agent.collect_metrics({"correctness_check": "Yes", "hallucination_check": "No", "bias_analysis": "No obvious bias detected."})
    # print(agent.generate_report())
    print("MeasureMonitorAgent initialized. Ready to run.")


