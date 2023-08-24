from typing import List
from Builder_py.PromptBuilder import PromptBuilder

class SyntheticsGPTPromptBuilder(PromptBuilder):
    def buildPrompts(self, tableschema: List[str], userPrompt: str) -> List[str]:
        prompts = []
        print("**************************")
        prompts.append("Given an input, generate a syntactically correct SQL Query for MSSQL. In the query, qualify columns as <TableName>.<ColumnName> format.")
        prompts.append("### SQL Tables with their properties:\n")
        prompts.extend(tableschema)
        #for table in tableschema:
        #    prompts.append(table)
        prompts.append("\n### " + userPrompt + "\nSELECT ")
        return prompts

    def ShowPrompts(self) -> None:
        raise NotImplementedError()
