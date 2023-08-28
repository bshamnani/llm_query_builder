from Builder_py.NLPProvider import INLPProvider
from Builder_py.UserNLPClient import UserNLPClient

class NLPAdapter:
    @staticmethod
    def getNLPClient(persona: str) -> UserNLPClient:
        try:
            nlpClient = UserNLPClient()
            return nlpClient
        except Exception as e:
            print(f"An error occurred in getNLPClient: {e}")
            raise
