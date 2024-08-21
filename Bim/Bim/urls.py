from django.contrib import admin
from django.urls import path, include
from api.views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/addUser/', addUser, name='addUser'),
    path('api/viewMeeting/', viewMeeting.as_view(), name='viewMeeting'), 
    path('api/addContractor/', addContractor, name='addContractor'), 
    path('api/itemList/', itemList.as_view(), name='itemList'),
    path('api/addPersonnel/', addPersonnel, name='addPersonnel'),
    path('api/addWarehouse/', addWarehouse, name='addWarehouse'),
    path('api/addAttended/', addAttended.as_view(), name='addAttended'),
    path('api/addRole/', addRole, name='addRole'),
    path('api/addUnit/', addUnit, name='addUnit'), 
    path('api/attendanceList/', attendanceList.as_view(), name='attendanceList'),
    path('api/addPurchase/', addPurchase.as_view(), name='addPurchase'), 
    path('api/addEntered/', addEntered.as_view(), name='addEntered'),
    path('api/addTask/', addTask.as_view(), name='addTask'), 
    path('api/addMeeting/', addMeeting.as_view(), name='addMeeting'),  
    path('api/addOrigin/', addOrigin, name='addOrigin'),   
    path('api/addWorker/', addWorker.as_view(), name='addWorker'),
]

