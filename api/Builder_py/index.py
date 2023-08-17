import json
import asyncio
from api.Builder_py.PromptController import PromptController
from api.Builder_py.LLMAdapter import LLMAdapter
from api.Builder_py.QueryExecutionAdapter import QueryExecutionAdapter
from ..serializers import UserInputSerializer

async def test(data: UserInputSerializer):
    print("LLM Query Builder")
    print(data)
    
    query = data["user_query"]
    table = data["table_name"]

    user_prompt = f"{query} from {table}"

    prompt_controller = PromptController()
    prompt_controller.set_persona("user")
    prompt_controller.initialize_prompt_controller()
    prompts = prompt_controller.build_prompts(user_prompt)
    #prompts = "\n".join(prompts)
    print(prompts)
    llm_client = LLMAdapter.get_llm_instance()
    llm_client.set_properties()
    kql_query = await llm_client.invoke_llm_command_async(prompts, "")

    query = f"Select {kql_query}".replace('\n', ' ')

    print(query)

    executor = QueryExecutionAdapter.get_query_executor()
    json_data = await executor.execute_query("sql", query)

    print(json_data)
    return json_data
    # if not json_data:
    #     json_data = json.dumps({"data": [{"results": "no records in db"}]})
    #     print("No data found")


# asyncio.run(test())

