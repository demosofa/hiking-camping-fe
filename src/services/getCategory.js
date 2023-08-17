import axios from 'axios';
import { API_URL } from '../constants/url';

export const getCategory = () => axios.get(API_URL.CATEGORY);
