from django.urls import path
from .views import RegisterView, MedicineCreateAPIView, MedicineUpdateAPIView, MedicineDeleteAPIView, MedicineSearchAPIView, MedicineListAPIView, MedicineDetailAPIView, ScheduleListCreateAPIView, ScheduleDetailAPIView, PatientAppointmentListCreateAPIView, PatientAppointmentDetailAPIView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('medicines/', MedicineListAPIView.as_view(), name='medicine-list'),
    path('medicines/<int:pk>/', MedicineDetailAPIView.as_view(), name='medicine-detail'),
    path('medicines/create/', MedicineCreateAPIView.as_view(), name='medicine-create'),
    path('medicines/update/<int:pk>/', MedicineUpdateAPIView.as_view(), name='medicine-update'),
    path('medicines/delete/<int:pk>/', MedicineDeleteAPIView.as_view(), name='medicine-delete'),
    path('medicines/search/', MedicineSearchAPIView.as_view(), name='medicine-search'),

    path('schedules/', ScheduleListCreateAPIView.as_view(), name='schedule-list-create'),
    path('schedules/<int:pk>/', ScheduleDetailAPIView.as_view(), name='schedule-detail'),

    path('appointments/', PatientAppointmentListCreateAPIView.as_view(), name='appointment-list-create'),
    path('appointments/<int:pk>/', PatientAppointmentDetailAPIView.as_view(), name='appointment-detail'),
]
