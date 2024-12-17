from django.shortcuts import render,redirect
from django.http import HttpResponse
from . forms import *
from django.contrib.auth import authenticate,login,logout
# Create your views here.



def home(request):
    return render(request,'events/home.html')

def login_page(request):
    if request.method=='POST':
        name=request.POST.get('email')
        pwd=request.POST.get('pwd')
        user = authenticate(email = name,password=pwd)
        if user is not None:
            login(request,user)
            return HttpResponse('home')
        else:
            return HttpResponse("Wrong")
    
def register(request):
    form =Registration_Form()
    if request.method=='POST':
        form = Registration_Form(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    return render(request,'events/register.html',{'html_form':form})
