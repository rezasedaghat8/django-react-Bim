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
class attendanceList(APIView): #Not done / ( table part )
    def get(self, request, *args, **kwargs):
        date_now = datetime.now().date()
        attendance_items = AttendanceList.objects.filter(date=date_now)
        personnel_array = []
        for item in attendance_items:
            person = Personnel.objects.get(national_id=item.national_id_id)
            personnel_array.append(person)
        serializer = PersonnelSerializer(personnel_array, many=True)  # Serialize the list of objects
        
        return JsonResponse({'personnel_array': serializer.data})
        

@permission_classes([AllowAny])
class addPurchase(APIView): #Done / ( item part )
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
            unit_id = data.get('unit', None)
            unit = Units.objects.get(id=unit_id)
            new_purchase = PurchaseRequests.objects.create(name=name, description=description, unit_id=unit, quantity=quantity)
            print(new_purchase)
            
            return JsonResponse({'message': 'Data received successfully'})
        return JsonResponse({'error': 'Invalid request'}, status=400)



@permission_classes([AllowAny])
class addEntered(APIView): #Done / ( report_id )
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
            unit_id = data.get('unit', None)
            unit = Units.objects.get(id=unit_id)
            origin_id = data.get('origin', None)
            origin = Origins.objects.get(id=origin_id)
            report = Reports.objects.get(id=1)
            new_entered = Entered.objects.create(name=name, description=description, unit_id=unit, quantity=quantity, price_per_unit=pricePerUnit, origin_id=origin, report_id=report)
            
            print(new_entered)
            
            return JsonResponse({'message': 'Data received successfully'})
        return JsonResponse({'error': 'Invalid request'}, status=400)


@permission_classes([AllowAny])
class addTask(APIView): #Done
    def get(self, request, *args, **kwargs):
        contractors = Contractors.objects.all()
        serializer_contractors = ContractorsSerializer(contractors, many=True)  # Serialize the list of objects
        units = Units.objects.all()
        serializer_units = UnitsSerializer(units, many=True)
        personnels = Personnel.objects.all()
        serializer_personnels = PersonnelSerializer(personnels, many=True)
        
        return JsonResponse({'serializer_contractors': serializer_contractors.data, 'serializer_units':serializer_units.data, 'serializer_personnels':serializer_personnels.data})
        
    @method_decorator(csrf_exempt)
    def post(self, request):
        if request.method == 'POST':
            data = json.loads(request.body)
            contractorName = data.get('contractorName', None)
            contractor = Contractors.objects.get(id=contractorName)
            personnelName = data.get('personnelName', None)
            subject_id = data.get('subject', None)
            subject = Subjects.objects.get(id=subject_id)
            name = data.get('name', None)
            unit_id = data.get('unit', None)
            unit = Units.objects.get(id=unit_id)
            quantity = data.get('quantity', None)
            description = data.get('description', None)
            estimatedTime = data.get('estimatedTime', None)
            # image = data.get('name', None)
            report = Reports.objects.get(id=1)
            for personnel_id in personnelName:
                personnel = Personnel.objects.get(id=personnel_id) 
                new_task = Tasks.objects.create(report_id=report, national_id=personnel, contractor_id=contractor, subject_id=subject, name=name, unit_id = unit, quantity=quantity, description=description, proximate_time=estimatedTime)
                print(new_task)
                
            return JsonResponse({'message': 'Data received successfully'})
        return JsonResponse({'error': 'Invalid request'}, status=400)


@permission_classes([AllowAny])
class addMeeting(APIView): #Done
    def get(self, request, *args, **kwargs):
        personnels = Personnel.objects.all()
        serializer_personnels = PersonnelSerializer(personnels, many=True)
        
        return JsonResponse({'serializer_personnels':serializer_personnels.data})
        
    @method_decorator(csrf_exempt)
    def post(self, request):
        if request.method == 'POST':
            data = json.loads(request.body)
            name = data.get('name', None)
            time = data.get('time', None)
            duration = data.get('duration', None)
            proceeding = data.get('proceeding', None)
            agenda = data.get('agenda', None)
            personnel = data.get('personnel', None)
            report = Reports.objects.get(id=1)
            new_meeting = Meetings.objects.create(name=name, date=time, duration=duration, proceedings=proceeding, agenda=agenda, report_id=report)
            print(new_meeting)
            for person in personnel:
                per = Personnel.objects.get(id=person)
                bridge_obj = MeetingPersonnel.objects.create( personnel_id=per, meeting_id=new_meeting)
            
            return JsonResponse({'message': 'Data received successfully'})
        return JsonResponse({'error': 'Invalid request'}, status=400)


@csrf_exempt  
def addOrigin(request): # Done
    if request.method == 'POST':
        data = json.loads(request.body)
        originName = data.get('originName', None)
        description = data.get('description', None)
        bankNumber = data.get('bankNumber', None)
        number = data.get('number', None)
        quality = data.get('quality', None)
        gain = data.get('gain', None)
        city = data.get('city', None)
        street = data.get('street', None)
        
        new_origin = Origins.objects.create(name=originName, description=description, bank_number=bankNumber, number=number, quality=quality, gain=gain, city=city, street=street)
        print(new_origin)
        
        return JsonResponse({'message': 'Data received successfully'})
    return JsonResponse({'error': 'Invalid request'}, status=400)


@permission_classes([AllowAny])
class addWorker(APIView): #Done
    def get(self, request, *args, **kwargs):
        personnels = Personnel.objects.all()
        serializer_personnels = PersonnelSerializer(personnels, many=True)
        
        return JsonResponse({'serializer_personnels':serializer_personnels.data})
        
    @method_decorator(csrf_exempt)
    def post(self, request):
        if request.method == 'POST':
            data = json.loads(request.body)
            fullName = data.get('fullName', None)
            number = data.get('number', None)
            wage = data.get('wage', None)
            bankNumber = data.get('bankNumber', None)
            date_now = datetime.now().date()
            for name in fullName:
                person = Personnel.objects.get(id=name)
                new_worker = Workers.objects.create(first_name=person.first_name, last_name=person.last_name, number=number, join_date=date_now, wage=wage, bank_number=bankNumber)
                print(new_worker)
                
            return JsonResponse({'message': 'Data received successfully'})
        return JsonResponse({'error': 'Invalid request'}, status=400)



# @csrf_exempt  
# def enteredWarehouse(request): # Done
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         originName = data.get('originName', None)
#         description = data.get('description', None)
#         bankNumber = data.get('bankNumber', None)
#         number = data.get('number', None)
#         quality = data.get('quality', None)
#         gain = data.get('gain', None)
#         city = data.get('city', None)
#         street = data.get('street', None)
        
#         new_origin = Origins.objects.create(name=originName, description=description, bank_number=bankNumber, number=number, quality=quality, gain=gain, city=city, street=street)
#         print(new_origin)
        
#         return JsonResponse({'message': 'Data received successfully'})
#     return JsonResponse({'error': 'Invalid request'}, status=400)    
     
 
@permission_classes([AllowAny])
class addSubject(APIView): #Done
    def get(self, request, *args, **kwargs):
        projects = Projects.objects.all()
        serializer_projects = ProjectsSerializer(projects, many=True)
        
        return JsonResponse({'serializer_projects':serializer_projects.data})
        
    @method_decorator(csrf_exempt)
    def post(self, request):
        if request.method == 'POST':
            data = json.loads(request.body)
            name = data.get('name', None)
            project_id = data.get('project', None)
            project = Projects.objects.get(id=project_id)
            estimatedTime = data.get('estimatedTime', None)
            
            new_subject = Subjects.objects.create(name=name, project_id=project, estimated_time=estimatedTime)
            print(new_subject)
                
            return JsonResponse({'message': 'Data received successfully'})
        return JsonResponse({'error': 'Invalid request'}, status=400)     

        
@permission_classes([AllowAny])
class viewMeeting(APIView): # Done
    def get(self, request, *args, **kwargs):
        meetings = Meetings.objects.all()
        serializer = MeetingsSerializer(meetings, many=True)  # Serialize the list of objects
        
        per = [[] for _ in range(len(meetings))]
        for index, meeting in enumerate(meetings):
            personnels = []
            person_id = MeetingPersonnel.objects.filter(meeting_id=meeting)
            for item in person_id:    
                person = Personnel.objects.get(id=item.personnel_id_id)
                personnels.append(person)
            
            serialized_personnels = PersonnelSerializer(personnels, many=True).data
            per[index].append(serialized_personnels)
                            
        return JsonResponse({'meetings': serializer.data, 'pers':per})

    @method_decorator(csrf_exempt)
    def post(self, request):
        if request.method == 'POST':
            print("hello")
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
  