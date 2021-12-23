from django.contrib import messages
from django.contrib.auth import authenticate
from django.shortcuts import redirect, render


def login(request):

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)
        print(user)
        if username == 'admin' and password =='1234':
            print(username)
            return redirect('home',)
        elif username == 'user' and password =='1234':
            print(username)
            return redirect('add_hotels',)

        else:
            messages.info(request, 'username or password is incorrect')
    context = {}
    return render(request, 'index.html')
