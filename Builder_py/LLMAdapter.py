from Builder_py.LLMClient import LLMClient
from Builder_py.GPTClient import GPTClient

class LLMAdapter:
    @staticmethod
    def get_llm_instance() -> LLMClient:
        llm_client = GPTClient()
        return llm_client
