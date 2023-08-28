from Builder_py.SQLExecutor import SQLExecutor

class QueryExecutionAdapter:
    @staticmethod
    def get_query_executor():
        try:
            executor = SQLExecutor()
            return executor
        except Exception as e:
            print(f"An error occurred in get_query_executor: {e}")
            raise
