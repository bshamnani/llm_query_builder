from django.db import models

class UserInput(models.Model):
    user_query = models.CharField(max_length=1000)
    table_name = models.CharField(max_length=1000)

