import axios from 'axios';

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_API_URL
    : process.env.NEXT_PUBLIC_DEV_API_URL;

const createAxios = axios.create({
  baseURL: `${baseUrl}/api`,
});
export default createAxios;
