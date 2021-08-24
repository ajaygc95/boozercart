from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from users.views import CustomObtainAuthToken
urlpatterns = [
    path('admin/', admin.site.urls),
    path('blog/', include('hero.urls')),
    path('', include('hero.urls')),
    path('api/', include('hero.urls')),
    path('user/', include('users.urls')),
    path('auth/', CustomObtainAuthToken.as_view()),
    path('accounts/', include('allauth.urls')),
]
