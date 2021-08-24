from django.contrib import admin
from django.urls import path, include
from .views import UserViewSet, BookViewSet, CustomObtainAuthToken

from rest_framework import routers

router = routers.DefaultRouter()
router.register('users',UserViewSet)
router.register('books',BookViewSet)

urlpatterns = [
    path("auth/",CustomObtainAuthToken.as_view()),
    path('', include(router.urls))
]