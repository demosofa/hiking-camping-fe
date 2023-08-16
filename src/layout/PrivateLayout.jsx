import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { getStorage } from '@utils';
import { createContext, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const Auth = createContext({ id: '', email: '', role: '' });

export default function PrivateLayout() {
	const navigate = useNavigate();

	const token = getStorage('token');
	const auth = jwtDecode(token);

	useEffect(() => {
		const interceptor = axios.interceptors.response.use(
			(response) => response,
			(error) => {
				switch (error?.response?.status) {
					case 403:
						navigate('/403');
						break;
					default:
				}
				return Promise.reject(error);
			}
		);

		return () => axios.interceptors.response.eject(interceptor);
	}, [navigate]);

	if (token) {
		if (!axios.defaults.headers.common['Authorization'])
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

		return (
			<Auth.Provider value={auth}>
				<Outlet />
			</Auth.Provider>
		);
	} else {
		delete axios.defaults.headers.common['Authorization'];

		return <Navigate to="/login" />;
	}
}
