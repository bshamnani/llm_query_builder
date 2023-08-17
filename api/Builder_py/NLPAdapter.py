from api.Builder_py.NLPProvider import INLPProvider
from api.Builder_py.UserNLPClient import UserNLPClient

class NLPAdapter:
    @staticmethod
    def getNLPClient(persona: str) -> UserNLPClient:
        nlpClient = UserNLPClient()
        return nlpClient
