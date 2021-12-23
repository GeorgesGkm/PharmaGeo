from django.template.defaulttags import url

from . import views
app_name = 'login'
urlpatterns = [
    url(r'^$', views.login, name='login'),
]