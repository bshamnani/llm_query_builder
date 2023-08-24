from typing import List
from abc import ABC, abstractmethod

class ILLMClient(ABC):
   @abstractmethod
   def invoke_llm_command_async(self, prompts: List[str], model: str) -> str:
        pass
