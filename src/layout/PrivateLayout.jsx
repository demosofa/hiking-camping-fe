import { Navigate, Outlet } from 'react-router-dom';
import { getStorage } from '@utils';

export default function PrivateLayout() {
	const role = getStorage('role');

	if (role != null) return <Outlet />;
	return <Navigate to="/login" />;
}
