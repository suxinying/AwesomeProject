import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:8085',
  timeout: 10000,
});

request.interceptors.request.use(config => {
  console.error(config);
  return config;
});

request.interceptors.response.use(response => {
  if (response.data && response.data.code === 200) {
    return response.data;
  }
});

export default request;
