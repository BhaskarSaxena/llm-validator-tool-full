import os
from langchain_community.document_loaders import WebBaseLoader
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter

class SearchAgent:
    def __init__(self):
        self.vectorstore = None
        self.text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        self.embeddings = HuggingFaceEmbeddings()

    def discover_and_extract(self, urls: list):
        """Discovers, extracts, and organizes information from given URLs."""
        docs = [WebBaseLoader(url).load() for url in urls]
        docs_transformed = [doc for sublist in docs for doc in sublist] # Flatten list of lists
        chunks = self.text_splitter.split_documents(docs_transformed)
        self.vectorstore = FAISS.from_documents(chunks, self.embeddings)
        print(f"Indexed {len(chunks)} chunks from {len(urls)} URLs.")
        return "Information discovered and indexed."

    def retrieve_info(self, query: str):
        """Retrieves relevant information based on a query."""
        if not self.vectorstore:
            return "No information indexed yet. Please run discover_and_extract first."
        docs = self.vectorstore.similarity_search(query)
        return "\n".join([doc.page_content for doc in docs])

    def run(self, state: dict):
        print("---SEARCH AGENT--- ")
        # In a real scenario, the input would drive what to search for.
        # For this example, we'll simulate a search for LLM validation tools.
        # User customization: Replace with actual URLs for API documentation or tools to be validated.
        urls_to_scrape = [
            "https://www.langchain.com/",
            "https://huggingface.co/docs/transformers/"
        ]
        self.discover_and_extract(urls_to_scrape)
        # Simulate retrieving some information based on the initial input
        search_query = state.get("input", "LLM validation best practices")
        search_results = self.retrieve_info(search_query)
        print(f"Search results: {search_results[:200]}...")
        return {**state, "search_results": search_results}

if __name__ == '__main__':
    agent = SearchAgent()
    # Example usage:
    # agent.discover_and_extract(["https://www.langchain.com/"])
    # print(agent.retrieve_info("LangChain agents"))
    print("SearchAgent initialized. Ready to run.")


