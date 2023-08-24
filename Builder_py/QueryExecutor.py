from abc import ABC, abstractmethod
from Builder_py.IQueryExecutor import IQueryExecutor

class QueryExecutor(IQueryExecutor, ABC):
    @abstractmethod
    async def execute_query(self, query_type: str, query: str) -> str:
        pass
