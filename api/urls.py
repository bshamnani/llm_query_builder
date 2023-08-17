from django.urls import path
from api.views import main

app_name= "api"
urlpatterns = [
    path('', main),
]