from abc import ABC, abstractmethod

class IQueryExecutor(ABC):
    @abstractmethod
    async def execute_query(self, query_type: str, query: str) -> str:
        pass
