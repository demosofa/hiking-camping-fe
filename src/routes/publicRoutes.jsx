import Footer from '@layout/Footer/Footer';
import HikingPage from 'pages/Hiking/HikingPage';

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
];

export default publicRoutes;
