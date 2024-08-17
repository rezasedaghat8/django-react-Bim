from django.contrib import admin
from django.urls import path, include
from api.views import addUser, viewMeeting, addContractor, itemList, addPersonnel, addWarehouse, addAttended
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
]

