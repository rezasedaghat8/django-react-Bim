from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny 
from .models import Workers, User, Units, Contractors, Items, Warehouses, Machines, Origins, Projects, Roles, Tasks, PersonnelRole, Entered, EnteredWarehouse, ProjectContractor, ProjectPersonnel, WarehouseProject, Storekeepers, Subjects, Reports, TaskWorker, TaskMachine, TaskImages, Difficulities, Pursuits, Coordinations, Meetings, PurchaseRequests, Reports, MeetingPersonnel, Personnel
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.db.models import Max
from rest_framework.decorators import permission_classes, api_view
from rest_framework.response import Response
from django.views import View
from datetime import datetime
from rest_framework.views import APIView
from .serializers import PersonnelSerializer
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

# Add Pages : -------------------------------------------------------------------------------------------------------------------------

@csrf_exempt 
def addUser(request):
    if request.method == 'POST':
        
        data = json.loads(request.body)
        name = data.get('personnelName', None)
        password = data.get('password', None)
        
        if name and password:
            user = User.objects.create(name=name, password=password)
            print("successfully user saved!")
            print(user)
            
            return JsonResponse({'message': 'User saved successfully'})
        return JsonResponse({'error': 'Missing fields'}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=400)
    
    
@csrf_exempt 
def addPersonnel(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        national_id_max =  Personnel.objects.order_by('national_id').last()
        national_id = national_id_max.national_id + 1 
        first_name = data.get('firstName', None)
        last_name = data.get('lastName', None)
        number = data.get('number', None)
        join_date = datetime.now().date()
        wage = data.get('wage', None)
        bank_number = data.get('bankNumber', None)
        
        if first_name and number:
            personnel = Personnel.objects.create(national_id=national_id ,first_name=first_name, last_name=last_name, number=number, join_date=join_date,  wage=wage, bank_number=bank_number)
            print("successfully personnel saved!")
            print(personnel)
            
            return JsonResponse({'message': 'Personnel saved successfully'})
        return JsonResponse({'error': 'Missing fields'}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=400)    


@csrf_exempt  
def addContractor(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name', None)
        description = data.get('description', None)
        has_system= data.get('hasSystemOrNot', None)
        bank_number= data.get('bankNumber', None)
        quality= data.get('quality', None)
        
        contractor = Contractors.objects.create(name=name, description=description, bank_number=bank_number, quality=quality, has_system=has_system)
        print("successfully contractor saved!")
        print(contractor)
    
        return JsonResponse({'message': 'Data received successfully'})
    return JsonResponse({'error': 'Invalid request'}, status=400)


@csrf_exempt 
def addWarehouse(request):
    if request.method == 'POST':
        
        data = json.loads(request.body)
        name = data.get('warehouseName', None)
        location = data.get('location', None)
        
        if name and location:
            warehouse = Warehouses.objects.create(name=name, location=location)
            print("successfully Warehouse saved!")
            print(warehouse)
            
            return JsonResponse({'message': 'User saved successfully'})
        return JsonResponse({'error': 'Missing fields'}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=400)

# View Pages : -------------------------------------------------------------------------------------------------------------------------

@permission_classes([AllowAny])
class addAttended(APIView):
    def get(self, request, *args, **kwargs):
        personnels = Personnel.objects.all()
        serializer = PersonnelSerializer(personnels, many=True)  # Serialize the list of objects
        
        return JsonResponse({'personnels': serializer.data})

    @method_decorator(csrf_exempt)
    def post(self, request):
        if request.method == 'POST':
            data = json.loads(request.body)
            name = data.get('personnel', None)
            print(name)
            
            return JsonResponse({'message': 'Data received successfully'})
        return JsonResponse({'error': 'Invalid request'}, status=400)  

        
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
    
    
class itemList(View):
    def get(self, request, *args, **kwargs):
        # نمونه‌ای از داده‌ها
        items = [
            {'id': 1, 'title': 'Taha', 'content': 'This is Goat'},
            {'id': 2, 'title': 'Sahrayi', 'content': 'This is Bitch'}
        ]
        
        
        # برگرداندن داده‌ها به صورت JSON
        return JsonResponse({'items': items})    
  