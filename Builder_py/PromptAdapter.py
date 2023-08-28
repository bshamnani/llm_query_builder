from Builder_py.PromptBuilder import PromptBuilder
from Builder_py.SyntheticsGPTPromptBuilder import SyntheticsGPTPromptBuilder

class PromptAdapter:
    @staticmethod
    def get_prompt_builder() -> PromptBuilder:
        try:
            prompt_builder = SyntheticsGPTPromptBuilder()
            return prompt_builder
        except Exception as e:
            print(f"An error occurred in get_prompt_builder: {e}")
            raise


        