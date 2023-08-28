from Builder_py.LLMClient import LLMClient
from Builder_py.GPTClient import GPTClient

class LLMAdapter:
    @staticmethod
    def get_llm_instance() -> LLMClient:
        try:
            llm_client = GPTClient()
            return llm_client
        
        except Exception as e:
            print(f"An error occurred in get_llm_instance: {e}")
            raise