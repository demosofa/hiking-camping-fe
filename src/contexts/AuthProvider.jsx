import { createContext, useEffect, useCallback, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getStorage, removeStorage, setStorage } from '@utils';

// eslint-disable-next-line no-unused-vars
export const Auth = createContext((newToken) => ({
	id: '',
	email: '',
	role: '',
}));

export function AuthProvider({ children }) {
	const [token, setToken] = useState(getStorage('token'));

	if (token) {
		if (!axios.defaults.headers.common['Authorization']) {
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
		}
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}

	const getAuth = useCallback(
		(newToken) => {
			if (!newToken) newToken = token;
			else {
				setStorage('token', newToken);
				setToken(newToken);
			}

			try {
				return jwtDecode(newToken);
			} catch (error) {
				removeStorage('token');
				setToken(null);
				return null;
			}
		},
		[token]
	);

	useEffect(() => {
		const interceptor = axios.interceptors.response.use(
			(response) => response,
			(error) => {
				switch (error?.response?.status) {
					case 403:
						window.location = '/403';
						break;
					default:
				}
				return Promise.reject(error);
			}
		);

		return () => axios.interceptors.response.eject(interceptor);
	}, []);

	return <Auth.Provider value={getAuth}>{children}</Auth.Provider>;
}
