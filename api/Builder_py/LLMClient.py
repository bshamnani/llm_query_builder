import openai
from api.Builder_py.ILLMClient import ILLMClient

class LLMClient(ILLMClient):
    def __init__(self):
        self.temperature = 0.0
        self.min_tokens = 100
        self.max_tokens = 500
        self.stop_sequences = []
        self.nucleus_sampling_factor = 0.0
        self.frequency_penalty = 0.0
        self.presence_penalty = 0.0
        self.oai_client = None
        self.uri = "https://syntheticsoai.openai.azure.com/"
        self.api_key = "d12cf2ed7e14418ab2fb6783b3414e1a"

    def set_properties(self):
        self.oai_client = None 

    def invoke_llm_command_async(self, prompts, model):
        pass