import Footer from '@layout/Footer/Footer';
import HikingPage from 'pages/Hiking/HikingPage';
import { ProductPage } from 'pages/ProductPage/ProductPage';

import { Shop } from 'pages/Shop/Shop';

/**@type {import("react-router-dom").RouteObject[]} */
const publicRoutes = [
	{
		path: '/hehe',
		element: <Footer />,
	},

	{
		path: '/hoho',
		element: <HikingPage />,
	},

	{
		path: '/collection/all',
		element: <Shop />,
	},

	{
		path: '/hihi',
		element: <ProductPage />,
	},
];

export default publicRoutes;
