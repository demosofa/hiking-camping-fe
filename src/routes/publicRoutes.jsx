import Footer from '@layout/Footer/Footer';
import HikingPage from 'pages/Hiking/HikingPage';
import { ProductPage } from 'pages/ProductPage/ProductPage';

import { ProductOverview } from 'pages/ProductOverview/ProductOverview';
import { Shop } from 'pages/Shop/Shop';
import { CartItem } from 'pages/CartItem';

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

	{
		path: 'product/overview',
		element: <ProductOverview />,
	},
	{
		path: '/',
		element: <CartItem />,
	},
];

export default publicRoutes;
