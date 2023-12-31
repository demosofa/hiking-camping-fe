import { Auth } from '@contexts';
import { useContext } from 'react';

export function useAuth() {
	return useContext(Auth);
}
