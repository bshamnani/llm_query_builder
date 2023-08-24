# from django.shortcuts import render
# from django.http import HttpResponse


# # Create your views here.

# def main(request):
#     return HttpResponse("Hello")

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
        print(request.data)
        serializer = UserInputSerializer(data=request.data)
        print(f"s = {serializer}")
        if serializer.is_valid():
            return Response(data=asyncio.run(test(serializer.data)), status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':
        return Response("Hello", status=status.HTTP_200_OK)