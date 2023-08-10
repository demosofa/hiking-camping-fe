import { ROLE } from '@constants';
import routeBasedRole from './routeBasedRole';
import PrivateLayout from '@layout/PrivateLayout';

/**@type {import("./routeBasedRole").Route[]} */
const privateRoutes = [
	{
		element: <PrivateLayout />,
		children: [
			{
				path: '/',
				element: <h1>Homepage</h1>,
				roles: [ROLE.ADMIN],
			},
		],
	},
];

const routes = routeBasedRole(privateRoutes);

export default routes;
