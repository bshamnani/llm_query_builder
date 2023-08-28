from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import UserInput
from .serializers import UserInputSerializer
import sys
sys.path.append('../')
# from .Builder_py.index import test
from Builder_py.index import test
import asyncio

@csrf_exempt
@api_view(['POST'])
def main(request):
    if request.method == 'POST':
        try:
            if not request.data:
                return Response("Request data is empty.", status=status.HTTP_400_BAD_REQUEST)
            print(request.data)
            serializer = UserInputSerializer(data=request.data)
            print(f"s = {serializer}")
            if serializer.is_valid():
                return Response(data=asyncio.run(test(serializer.data)), status=status.HTTP_201_CREATED)
            else:          
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as e:
            return Response(f"An error occurred: {str(e)}", status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    elif request.method == 'GET':
        return Response("Hello", status=status.HTTP_200_OK)