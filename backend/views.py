from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status
from django.contrib.auth.models import User
from tasks.models import Task
from tasks.serializer import UserSerializer, TaskSerializer

@api_view(['POST'])
def create_user(request):
    username = request.data.get('username')
    
    if User.objects.filter(username=username).exists():
        user = get_object_or_404(User, username=username)
        serializer = UserSerializer(user)
        return Response({"user": serializer.data}, status=status.HTTP_200_OK)
    
    password = username + '123.'
    user = User.objects.create_user(username=username, password=password, email='')
    
    serializer = UserSerializer(user)
    
    return Response({'user': serializer.data}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def all_user_tasks(request):
    username = request.data.get('username')
    user = get_object_or_404(User, username=username)
    user_tasks = user.task_set.all()
    
    serializer = TaskSerializer(user_tasks, many=True)
    
    return Response({'tasks': serializer.data}, status=status.HTTP_200_OK)

@api_view(['POST'])
def create_task(request):
    username = request.data.get('username')
    title = request.data.get('title')
    description = request.data.get('description')
    label = request.data.get('label')
    
    user = get_object_or_404(User, username=username)
    task = Task.objects.create(title=title, description=description, label=label, user=user)
    task.save()
        
    serializer = TaskSerializer(task)
    
    return Response({'task': serializer.data}, status=status.HTTP_201_CREATED)

@api_view(['DELETE'])
def delete_task(request):
    username = request.data.get('username')
    title = request.data.get('title')
    description = request.data.get('description')
    label = request.data.get('label')
    
    user = get_object_or_404(User, username=username)
    task = Task.objects.get(title=title, description=description, label=label, user=user)
    task.delete()
    
    return Response({'Message': 'Delete task complete'}, status=status.HTTP_200_OK)

@api_view(['PUT'])
def update_task(request):
    username = request.data.get('username')
    title = request.data.get('title')
    description = request.data.get('description')
    label = request.data.get('label')
    user = get_object_or_404(User, username=username)
    task = Task.objects.get(title=title, description=description, label=label, user=user)
    
    new_title = request.data.get('new_title')
    new_description = request.data.get('new_description')
    new_label = request.data.get('new_label')
    
    task.title = new_title
    task.description = new_description
    task.label = new_label
    task.save()
    
    serializer = TaskSerializer(task)
    
    return Response({'Message': 'Update task complete', 'task': serializer.data}, status=status.HTTP_200_OK)