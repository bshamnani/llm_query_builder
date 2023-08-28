from Builder_py.MetadataManager import MetadataManager
from Builder_py.KQLMetadataManager import KQLMetadataManager

class DomainAdapter:
    @staticmethod
    def getMetadataManager() -> MetadataManager:
        try:
            metadataManager = KQLMetadataManager()
            return metadataManager
        except Exception as e:
            raise RuntimeError("Failed to get MetadataManager.") from e
