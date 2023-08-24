from typing import List
from abc import ABC, abstractmethod

from Builder_py.INLPProvider import INLPProvider

class NLPProvider(INLPProvider):
    def __init__(self, stopWords: List[str], wordBreaker: str):
        self.stopWords = stopWords
        self.wordBreaker = wordBreaker

    @abstractmethod
    def getEntities(self, userPrompt: str) -> List[str]:
        pass

    @abstractmethod
    def getIntents(self, userPrompt: str) -> List[str]:
        pass
