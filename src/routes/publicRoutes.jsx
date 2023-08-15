import { PublicLayout } from '@layout/PublicLayout';
import HikingPage from 'pages/Hiking/HikingPage';
import { ProductPage } from 'pages/ProductPage/ProductPage';

import { ProductOverview } from 'pages/ProductOverview/ProductOverview';
import { Shop } from 'pages/Shop/Shop';
import { CartItem } from 'pages/CartItem/CartItem';
import { Trekking } from 'pages/Trekking/Trekking';
import { Register, Login } from '@pages';
import { Wishlist } from 'pages/Wishlist/Wishlist';

/**@type {import("react-router-dom").RouteObject[]} */
const publicRoutes = [
	{
		element: <PublicLayout />,
		children: [
			{ path: '/' },

			{ path: '/register', element: <Register /> },

			{ path: '/login', element: <Login /> },

			{
				path: '/collections',
				element: <HikingPage />,
			},

			{
				path: '/collections/all',
				element: <Shop />,
			},

			{
				path: '/hihi',
				element: <ProductPage />,
			},

			{
				path: 'product/overview/:id',
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
			{
				path: '/wishlist',
				element: <Wishlist />,
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
];

export default publicRoutes;
