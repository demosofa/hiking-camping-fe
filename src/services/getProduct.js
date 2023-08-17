import axios from 'axios';
import { API_URL } from '../constants/url';

export const getProduct = () => axios.get(API_URL.PRODUCT);
