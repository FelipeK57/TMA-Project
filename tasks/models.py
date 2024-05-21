from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=200)
    label = models.CharField(max_length=30)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.user.username + ' ' + self.title
    