// src/api/api.js
import axios from 'axios';

// Set the base URL for your API (replace with your own backend URL)
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api', // Change this for production or different environment
});

// Example API calls
export const getTasks = () => api.get('/tasks');
export const createTask = (taskData) => api.post('/tasks', taskData);
export const deleteTask = (taskId) => api.delete(`/tasks/${taskId}`);
