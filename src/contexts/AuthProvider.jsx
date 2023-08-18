import { createContext, useEffect, useCallback, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getStorage, removeStorage, setStorage } from '@utils';

export const Auth = createContext({
	getAuth: () => ({
		id: '',
		email: '',
		role: '',
	}),
	// eslint-disable-next-line no-unused-vars
	setAuth: (newToken) => undefined,
});

export function AuthProvider({ children }) {
	const [token, setToken] = useState(getStorage('token'));

	if (token) {
		if (!axios.defaults.headers.common['Authorization']) {
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
		}
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}

	const setAuth = useCallback(
		(newToken) => {
			if (newToken) {
				setStorage('token', newToken);
				setToken(newToken);
			} else {
				removeStorage('token');
				setToken(null);
			}
		},
		[setToken]
	);

	const getAuth = useCallback(() => {
		try {
			return jwtDecode(token);
		} catch (error) {
			setAuth(null);
			return null;
		}
	}, [setAuth, token]);

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

	return <Auth.Provider value={{ getAuth, setAuth }}>{children}</Auth.Provider>;
}
