import axios from 'axios'

const config = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000
});

export default config;