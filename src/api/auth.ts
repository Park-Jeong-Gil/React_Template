import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dev-wedding.barunsoncard.com/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
