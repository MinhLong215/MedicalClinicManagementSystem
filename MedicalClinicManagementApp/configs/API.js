import axios from "axios";

export const endpoints = {
    'categories': '/categories/',
    'courses': '/courses/',
    'lessons': (courseId) => `/courses/${courseId}/lessons/`,
    'lesson-details': (lessonId) => `/lessons/${lessonId}/`,
    'comments': (lessonId) => `/lessons/${lessonId}/comments/`,
    'login': 'login/',
    'current-user': '/current-user/',
    'register': '/register/',
    'medicines': '/medicines/',
    'medicinesCreate': '/medicines/create/',
    'users': '/users/',
    'schedules': '/schedules/',
    'appointments': '/appointments/',
    'add-comment': (lessonId) => `/lessons/${lessonId}/comments/`
}

export const authApi = (accessToken) => axios.create({
    baseURL: "http://10.0.2.2:8000/api",
    headers: {
        "Authorization": `bearer ${accessToken}`
    }
})

export default axios.create({
    baseURL: "http://10.0.2.2:8000/api"
})