import Footer from '@layout/Footer/Footer';
import { Shop } from 'pages/Shop/Shop';

/**@type {import("react-router-dom").RouteObject[]} */
const publicRoutes = [
	{
		path: '/hehe',
		element: <Footer />,
	},

	{
		path: '/collection/all',
		element: <Shop />,
	},
];

export default publicRoutes;
