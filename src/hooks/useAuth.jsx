import { Auth } from '@layout/PrivateLayout';
import { useContext } from 'react';

export function useAuth() {
	return useContext(Auth);
}
