from Builder_py.PromptBuilder import PromptBuilder
from Builder_py.SyntheticsGPTPromptBuilder import SyntheticsGPTPromptBuilder

class PromptAdapter:
    @staticmethod
    def get_prompt_builder() -> PromptBuilder:
        prompt_builder = SyntheticsGPTPromptBuilder()
        return prompt_builder
