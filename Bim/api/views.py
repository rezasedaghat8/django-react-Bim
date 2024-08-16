from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from . serializers import UserSerializer, NoteSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny 
from .models import Note
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views import View

class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    

@csrf_exempt  # این خط برای غیرفعال کردن بررسی CSRF در این ویو است
def addUser(request):
    if request.method == 'POST':
        
        data = json.loads(request.body)
        name = data.get('personnelName', None)
        password = data.get('password', None)
        
        print(name)
        print(password)
        
    
        return JsonResponse({'message': 'Data received successfully', 'name': name, 'password': password})
    return JsonResponse({'error': 'Invalid request'}, status=400)
    
    # context = {
    #     'taha': taha,
    # }    
    # return render(request, "AddUser.jsx", context)
    
    
class viewMeeting(View):
    def get(self, request, *args, **kwargs):
        # نمونه‌ای از داده‌ها
        notes = [
            {'id': 1, 'title': 'Taha', 'content': 'This is Goat'},
            {'id': 2, 'title': 'Sahrayi', 'content': 'This is Bitch'}
        ]
        
        moze = [
            {'id': 1, 'title': 'Reza', 'content': 'This is Goat'},
            {'id': 2, 'title': 'Sedaghat', 'content': 'This is Bitch'}
        ]
        
        # برگرداندن داده‌ها به صورت JSON
        return JsonResponse({'notes': notes, 'moze': moze})    


@csrf_exempt  # این خط برای غیرفعال کردن بررسی CSRF در این ویو است
def addContractor(request):
    if request.method == 'POST':
        
        data = json.loads(request.body)
        name = data.get('name', None)
        description = data.get('description', None)
        hasSystemOrNot= data.get('hasSystemOrNot', None)
        bankNumber= data.get('bankNumber', None)
        quality= data.get('quality', None)
        
        print(name + description + bankNumber + quality)
    
        return JsonResponse({'message': 'Data received successfully'})
    return JsonResponse({'error': 'Invalid request'}, status=400)


class itemList(View):
    def get(self, request, *args, **kwargs):
        # نمونه‌ای از داده‌ها
        items = [
            {'id': 1, 'title': 'Taha', 'content': 'This is Goat'},
            {'id': 2, 'title': 'Sahrayi', 'content': 'This is Bitch'}
        ]
        
        
        # برگرداندن داده‌ها به صورت JSON
        return JsonResponse({'items': items})    
  