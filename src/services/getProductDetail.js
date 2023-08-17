import axios from 'axios';
import { API_URL } from '../constants/url';

export const getProductDetail = (id) => axios.get(API_URL.PRODUCT + id);
