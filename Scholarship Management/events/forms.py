from django import forms
from django.contrib.auth.forms import UserCreationForm
from . models import *

class Registration_Form(UserCreationForm):
    username=forms.CharField(widget=forms.TextInput(attrs={
        
    }))
    email=forms.CharField(widget=forms.TextInput(attrs={
        
    }))
    password1=forms.CharField(widget=forms.PasswordInput(attrs={
        
    }))
    password2=forms.CharField(widget=forms.PasswordInput(attrs={
        
    }))
    class Meta:
        model=User
        fields=['username','email','password1','password2']