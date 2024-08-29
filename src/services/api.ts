import axios from 'axios';

const API_BASE_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app';

export const api = axios.create({
  baseURL: API_BASE_URL,
});
