import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
