import axios from 'axios';
import { API_URL } from '../constants/url';

export const getProductDetail = (id) =>
	axios.get(API_URL.PRODUCT + id, {
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM0ZGI0NTlmLTg3MDctNDllZi1hODU3LTcwYmRhMTQ2ZGUzYSIsImZ1bGxOYW1lIjoiTmhhbiBOZ28iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTIxNTQ5MDB9.HHxL2DUiMO6WqN_gMUd-OBgaOOkrkSastLezOCqmeLY',
		},
	});
