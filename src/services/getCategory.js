import axios from 'axios';
import { API_URL } from '../constants/url';

export const getCategory = () =>
	axios.get(API_URL.CATEGORY, {
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRmOWRlMWNiLTcyOGEtNGI0OS04ZjAzLWJjY2NmNGIxOTA0MCIsImZ1bGxOYW1lIjoibmhhbiBuZ3V5ZW4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTIwNzA4NzN9.dOAjdVq5JrH4GVOWSBUkQ3KuKP2aUTi360BlBqfAFyU',
		},
	});
