import json
import asyncio
from Builder_py.PromptController import PromptController
from Builder_py.LLMAdapter import LLMAdapter
from Builder_py.QueryExecutionAdapter import QueryExecutionAdapter
import sys
sys.path.append('../')
from api.serializers import UserInputSerializer
# from ..serializers import UserInputSerializer

async def test(data: UserInputSerializer):
    try:
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
        
        output_prompt = "\n"
        for prompt in prompts:
            output_prompt+="\n" + prompt + "\n"
            
        llm_client = LLMAdapter.get_llm_instance()
        llm_client.set_properties()
        kql_query = await llm_client.invoke_llm_command_async(prompts, "")

        query = f"Select {kql_query}".replace('\n', ' ')

        print(query)

        executor = QueryExecutionAdapter.get_query_executor()
        json_data = await executor.execute_query("sql", query)
    
        packed_data=[json_data, output_prompt, kql_query]
        print(json_data)
        # return json_data
        return packed_data
        # if not json_data:
        #     json_data = json.dumps({"data": [{"results": "no records in db"}]})
        #     print("No data found")
    
    except Exception as e:
        print(f"An error occurred in test: {e}")
        raise


# asyncio.run(test())

