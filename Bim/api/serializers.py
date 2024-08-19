from django.contrib.auth.models import AbstractUser
from rest_framework import serializers
from .models import *

class PersonnelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personnel
        fields = '__all__'
     
        
class AttendanceListSerializer(serializers.ModelSerializer):
    class Meta:
        model = AttendanceList
        fields = '__all__'
 
        
class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class SubjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subjects
        fields = '__all__'


class TasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        fields = '__all__'


class WarehousesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Warehouses
        fields = '__all__'


class ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = '__all__'


class PurchaseRequestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseRequests
        fields = '__all__'


class StorekeepersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Storekeepers
        fields = '__all__'


class UnitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Units
        fields = '__all__'


class OriginsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Origins
        fields = '__all__'


class RolesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roles
        fields = '__all__'


class PersonnelRoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonnelRole
        fields = '__all__'


class ProjectPersonnelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectPersonnel
        fields = '__all__'


class EnteredSerializer(serializers.ModelSerializer):
    class Meta:
        model = Entered
        fields = '__all__'


class ReportsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reports
        fields = '__all__'


class EnteredWarehouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnteredWarehouse
        fields = '__all__'


class WarehouseProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = WarehouseProject
        fields = '__all__'


class WorkersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workers
        fields = '__all__'


class TaskWorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskWorker
        fields = '__all__'


class BodyMasterSerializer(serializers.ModelSerializer):
    class Meta:
        model = BodyMaster
        fields = '__all__'


class PublicKeysSerializer(serializers.ModelSerializer):
    class Meta:
        model = PublicKeys
        fields = '__all__'


class ContractorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contractors
        fields = '__all__'


class TaskImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskImages
        fields = '__all__'


class ProjectContractorSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectContractor
        fields = '__all__'


class MachinesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Machines
        fields = '__all__'


class TaskMachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskMachine
        fields = '__all__'


class MeetingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meetings
        fields = '__all__'


class MeetingPersonnelSerializer(serializers.ModelSerializer):
    class Meta:
        model = MeetingPersonnel
        fields = '__all__'


class DifficulitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Difficulities
        fields = '__all__'


class PursuitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pursuits
        fields = '__all__'


class CoordinationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coordinations
        fields = '__all__'
        