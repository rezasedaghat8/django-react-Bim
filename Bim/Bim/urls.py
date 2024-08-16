from django.contrib import admin
from django.urls import path, include
from api.views import CreateUserView, addUser, viewMeeting, addContractor, itemList
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.urls import path



urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/user/register/", CreateUserView.as_view(), name="register"),
    path("api/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("Api-auth/", include("rest_framework.urls")),
    
    path("api/", include("api.urls")),
    
    path('api/addUser/', addUser, name='addUser'),
    path('api/viewMeeting/', viewMeeting.as_view(), name='viewMeeting'), 
    path('api/addContractor/', addContractor, name='addContractor'), 
    path('api/itemList/', itemList.as_view(), name='itemList'),
]

