from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import GlobalSettings,Navigation,ContactUS,BookRoom
from rest_framework.authtoken.views import Token


class GlobalSettingsSerializer(serializers.ModelSerializer):
  class Meta:
    model = GlobalSettings
    fields = "__all__"
    
    
class NavigationSerializer(ModelSerializer):
  class Meta:
    model = Navigation
    fields = "__all__"
    
class ContactSerializer(ModelSerializer):
  class Meta:
    model = ContactUS
    fields = ['name', 'mobileno', 'email', 'message']

class BookRoomSerializer(ModelSerializer):
  class Meta:
    model = BookRoom
    fields = ['check_in', 'check_out', 'adults', 'children', 'bed_type', 'room_type']
    
class UserSerializer(serializers.ModelSerializer):
      class Meta :
        model = User
        fields ="__all__"
        
        extra_kwargs = {'password':{
           'write_only':True,
           'required':True,
        }}
        
        
def create(self,validated_data):
  user = user.objects.create_user(**validated_data)
  Token.objects.create(user=user)
  return user