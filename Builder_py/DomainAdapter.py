from Builder_py.MetadataManager import MetadataManager
from Builder_py.KQLMetadataManager import KQLMetadataManager
# from api.Builder_py.MetadataManager import MetadataManager
# from api.Builder_py.KQLMetadataManager import KQLMetadataManager

class DomainAdapter:
    @staticmethod
    def getMetadataManager() -> MetadataManager:
        metadataManager = KQLMetadataManager()
        return metadataManager
