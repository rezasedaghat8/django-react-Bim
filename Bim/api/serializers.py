from django.contrib.auth.models import AbstractUser
from rest_framework import serializers
from .models import Personnel

class PersonnelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personnel
        fields = ['national_id', 'first_name', 'last_name', 'number', 'join_date', 'wage', 'bank_number']