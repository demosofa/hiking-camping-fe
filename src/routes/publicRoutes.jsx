import { PublicLayout } from '@layout/PublicLayout';
import HikingPage from 'pages/Hiking/HikingPage';
import { ProductPage } from 'pages/ProductPage/ProductPage';

import { ProductOverview } from 'pages/ProductOverview/ProductOverview';
import { Shop } from 'pages/Shop/Shop';
import { CartItem } from 'pages/CartItem/CartItem';
import { Trekking } from 'pages/Trekking/Trekking';
import { Register, Login } from '@pages';
import { Wishlist } from 'pages/Wishlist/Wishlist';
import { Home } from 'pages/Home/Home';

/**@type {import("react-router-dom").RouteObject[]} */
const publicRoutes = [
	{
		element: <PublicLayout />,
		children: [
			{ path: '/', element: <Home /> },

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
				path: '/collections/tents-collection',
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
];

export default publicRoutes;
