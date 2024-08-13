from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from . serializers import UserSerializer, NoteSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny 
from .models import Note
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


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
def save_data(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        # پردازش داده‌ها و ذخیره در دیتابیس یا سشن

        return JsonResponse({'message': 'Data received successfully', 'name': name, 'email': email})
    return JsonResponse({'error': 'Invalid request'}, status=400)

    

    