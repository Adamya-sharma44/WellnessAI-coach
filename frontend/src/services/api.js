import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const apiService = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// Request interceptor to add token
apiService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  register: (data) => apiService.post('/auth/register', data),
  login: (data) => apiService.post('/auth/login', data),
  getCurrentUser: () => apiService.get('/auth/me'),
};

export const healthAPI = {
  checkHealth: () => apiService.get('/health'),
};

export default apiService;
