from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny 
from .models import *
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.db.models import Max
from rest_framework.decorators import permission_classes, api_view
from rest_framework.response import Response
from django.views import View
from datetime import datetime
from rest_framework.views import APIView
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator



@csrf_exempt 
def addUser(request): # Done
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
def addPersonnel(request): # Done
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
def addContractor(request): # Done
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
def addWarehouse(request): # Done
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


@csrf_exempt  
def addRole(request): # Done
    if request.method == 'POST':
        data = json.loads(request.body)
        title = data.get('title', None)
        description = data.get('description', None)
        minimum_wage = data.get('minimumWage', None)
        
        role = Roles.objects.create(title=title, description=description, minimum_wage=minimum_wage)
        print("successfully role saved!")
        print(role)
    
        return JsonResponse({'message': 'Data received successfully'})
    return JsonResponse({'error': 'Invalid request'}, status=400)


@csrf_exempt  
def addUnit(request): # Done
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name', None)
        description = data.get('description', None)
        
        unit = Units.objects.create(name=name, description=description)
        print("successfully unit saved!")
        print(unit)
    
        return JsonResponse({'message': 'Data received successfully'})
    return JsonResponse({'error': 'Invalid request'}, status=400)

@permission_classes([AllowAny])
class addAttended(APIView): # Done
    def get(self, request, *args, **kwargs):
        personnels = Personnel.objects.all()
        serializer = PersonnelSerializer(personnels, many=True)  # Serialize the list of objects
        
        return JsonResponse({'personnels': serializer.data})

    @method_decorator(csrf_exempt)
    def post(self, request):
        if request.method == 'POST':
            data = json.loads(request.body)
            id_list = data.get('personnel', None)
            date_now = datetime.now().date()
            for item in id_list:
                attendance = AttendanceList.objects.create(national_id=Personnel.objects.get(national_id=item), date=date_now)
            print(id_list)
            
            return JsonResponse({'message': 'Data received successfully'})
        return JsonResponse({'error': 'Invalid request'}, status=400)  


@permission_classes([AllowAny])
class attendanceList(APIView): 
    def get(self, request, *args, **kwargs):
        attendance_items = AttendanceList.objects.all()
        personnel_array = []
        for item in attendance_items:
            person = Personnel.objects.get(national_id=item.national_id_id)
            personnel_array.append(person)
        serializer = PersonnelSerializer(personnel_array, many=True)  # Serialize the list of objects
        date_now = datetime.now().date()
        
        return JsonResponse({'personnel_array': serializer.data})
        

@permission_classes([AllowAny])
class addPurchase(APIView): 
    def get(self, request, *args, **kwargs):
        items = Items.objects.all()
        serializer_item = ItemsSerializer(items, many=True)  # Serialize the list of objects
        units = Units.objects.all()
        serializer_unit = UnitsSerializer(units, many=True)
        
        return JsonResponse({'serializer_item': serializer_item.data, 'serializer_unit':serializer_unit.data})
        
    @method_decorator(csrf_exempt)
    def post(self, request):
        if request.method == 'POST':
            data = json.loads(request.body)
            item = data.get('item', None)
            quantity = data.get('quantity', None)
            name = data.get('name', None)
            description = data.get('description', None)
            unit = data.get('unit', None)
            
            print(item)
            print(unit)
            
            return JsonResponse({'message': 'Data received successfully'})
        return JsonResponse({'error': 'Invalid request'}, status=400)



@permission_classes([AllowAny])
class addEntered(APIView): 
    def get(self, request, *args, **kwargs):
        origins = Origins.objects.all()
        serializer_origin = OriginsSerializer(origins, many=True)  # Serialize the list of objects
        units = Units.objects.all()
        serializer_unit = UnitsSerializer(units, many=True)
        
        return JsonResponse({'serializer_origin': serializer_origin.data, 'serializer_unit':serializer_unit.data})
        
    @method_decorator(csrf_exempt)
    def post(self, request):
        if request.method == 'POST':
            data = json.loads(request.body)
            pricePerUnit = data.get('pricePerUnit', None)
            quantity = data.get('quantity', None)
            name = data.get('name', None)
            description = data.get('description', None)
            unit = data.get('unit', None)
            origin = data.get('origin', None)
            
            print(origin)
            print(unit)
            
            
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
  