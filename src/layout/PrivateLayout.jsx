import { useAuth } from '@hooks';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateLayout() {
	const auth = useAuth()();
	if (auth) return <Outlet />;
	return <Navigate to="/login" />;
}
