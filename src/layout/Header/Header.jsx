import { Layout, Space } from 'antd';
import MenuNav from 'components/MenuNav/MenuNav';
import './header.css';
import {
	HeartFilled,
	SearchOutlined,
	ShoppingCartOutlined,
} from '@ant-design/icons';
import { HeadOfHeader } from 'components/HeadOfHeader/HeadOfHeader';

const { Sider } = Layout;
export function Header() {
	return (
		<>
			<HeadOfHeader />
			<nav className="navbar-container">
				<img
					className="home-logo"
					src="//hiking-camping-demo.myshopify.com/cdn/shop/t/10/assets/logo.png?v=163936674615271427871580795816"
				></img>
				<MenuNav />
				<Space className="container-right">
					<SearchOutlined style={{ fontSize: '14px' }} />
					<HeartFilled style={{ fontSize: '14px' }} />
					<ShoppingCartOutlined style={{ fontSize: '14px' }} />
				</Space>
			</nav>
			<Sider style={{ display: 'none' }}>
				<MenuNav />
			</Sider>
		</>
	);
}
