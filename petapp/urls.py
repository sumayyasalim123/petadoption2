from django.urls import path
from . import views 
from .views import LoginView

urlpatterns = [
    path('api/donor/register/', views.register_donor, name='register_donor'),
    path('api/buyer/register/', views.register_buyer, name='register_donor'),
      path('api/login/', LoginView.as_view(), name='login'),

    # Other URL patterns for your app
]