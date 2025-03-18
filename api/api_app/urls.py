from django.urls import path
from rest_framework.routers import SimpleRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from api_app.views import UserViewSet, RegistrationViewSet, LoginViewSet
from django_rest_passwordreset.views import ResetPasswordValidateTokenViewSet, ResetPasswordConfirmViewSet, \
    ResetPasswordRequestTokenViewSet

app_name = "api_app"

route = SimpleRouter()

# API routes
route.register(r"users", UserViewSet, basename="users")
route.register(r"register", RegistrationViewSet, basename="register")
route.register(r"login", LoginViewSet, basename="login")
route.register(r'passwordreset/validate_token/', ResetPasswordValidateTokenViewSet, basename='reset-password-validate'),
route.register(r'passwordreset/confirm', ResetPasswordConfirmViewSet, basename='reset-password-confirm'),
route.register(r'passwordreset', ResetPasswordRequestTokenViewSet, basename='reset-password-request'),

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    *route.urls,
    
]