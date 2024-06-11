// axiosInstance.js
import axios from 'axios';
import { BASE_URL } from './proxy';

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
API.interceptors.request.use(
  (config) => {
    // Modify request config before sending, e.g., add auth token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle response error
    if (error.response.status === 401) {
      // Unauthorized error, redirect to login, etc.
    }
    return Promise.reject(error);
  }
);

export default API;
