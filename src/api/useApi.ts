import axios from 'axios';
import Cookies from 'js-cookie';

const API = axios.create({
  baseURL: 'http://test.hookfish.co.in',
  headers: {
    Authorization: `Bearer ${Cookies.get('bearer_token')}`,
  },
});

export default API;
