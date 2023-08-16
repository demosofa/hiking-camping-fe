import axios from 'axios';
import { API_URL } from '../constants/url';

export const register = (data) => axios.post(API_URL.AUTH + 'register', data);
