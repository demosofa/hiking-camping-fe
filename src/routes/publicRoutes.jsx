import { PublicLayout } from '@layout/PublicLayout';
import HikingPage from 'pages/Hiking/HikingPage';
import { ProductPage } from 'pages/ProductPage/ProductPage';

import { ProductOverview } from 'pages/ProductOverview/ProductOverview';
import { Shop } from 'pages/Shop/Shop';
import { CartItem } from 'pages/CartItem/CartItem';
import Product from 'components/Product/Product';
import { Trekking } from 'pages/Trekking/Trekking';

/**@type {import("react-router-dom").RouteObject[]} */
const publicRoutes = [
	{
		element: <PublicLayout />,
		children: [
			{ path: '/' },

			{
				path: '/collections',
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
				path: '/cart',
				element: <CartItem />,
			},

			{
				path: '/trekking',
				element: <Trekking />,
			},
		],
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

	{
		path: '/product',
		element: <Product />,
	},
];

export default publicRoutes;
