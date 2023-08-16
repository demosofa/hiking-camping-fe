import { useAuth } from '@hooks';
import { Navigate } from 'react-router-dom';

export function PrivatePage({ children, roles }) {
	const { role } = useAuth();
	const checkRole = roles.some((item) => item === role);

	if (checkRole) return children;
	return <Navigate to="/403" />;
}
