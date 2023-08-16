import axios from 'axios';
import { API_URL } from '../constants/url';

export const login = (data) => axios.post(API_URL.AUTH + 'login', data);
