import { Navigate } from 'react-router-dom';
import { getStorage } from '@utils';

export function PrivatePage({ children, roles }) {
	const role = getStorage('role');
	const checkRole = roles.some((item) => item === role);

	if (checkRole) return children;
	return <Navigate to="/403" />;
}
