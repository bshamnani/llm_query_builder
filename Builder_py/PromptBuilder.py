from typing import List
from abc import ABC, abstractmethod
from Builder_py.IPromptBuilder import IPromptBuilder

class PromptBuilder(IPromptBuilder):
    @abstractmethod
    def buildPrompts(self, tableschema: List[str], userPrompt: str) -> List[str]:
        pass

    @abstractmethod
    def ShowPrompts(self) -> None:
        pass
