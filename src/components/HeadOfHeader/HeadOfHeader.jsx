import { Button, Col, Dropdown, Row } from 'antd';
import './HeadOfHeaders.css';
import { Link } from 'react-router-dom';
import { useAuth } from '@hooks';
import { removeStorage } from '@utils';

export const HeadOfHeader = () => {
	const { getAuth, setAuth } = useAuth();

	let label1, label2;

	const handleLogout = () => {
		removeStorage('token');
		setAuth(null);
	};

	if (getAuth()) {
		label1 = (
			<Link rel="noopener noreferrer" to="/">
				Profile
			</Link>
		);

		label2 = (
			<Link rel="noopener noreferrer" onClick={handleLogout} to="/">
				Log out
			</Link>
		);
	} else {
		label1 = (
			<Link rel="noopener noreferrer" to="/login">
				Log in
			</Link>
		);

		label2 = (
			<Link rel="noopener noreferrer" to="/register">
				Create an account
			</Link>
		);
	}

	const items1 = [
		{
			key: '1',
			label: label1,
		},
		{
			key: '2',
			label: label2,
		},
	];
	const items2 = [
		{
			key: '1',
			label: (
				<Link rel="noopener noreferrer" to="">
					USD
				</Link>
			),
		},
		{
			key: '2',
			label: (
				<Link rel="noopener noreferrer" to="">
					EUR
				</Link>
			),
		},
		{
			key: '3',
			label: (
				<Link rel="noopener noreferrer" to="">
					GBP
				</Link>
			),
		},
		{
			key: '4',
			label: (
				<Link rel="noopener noreferrer" to="">
					AUD
				</Link>
			),
		},
		{
			key: '5',
			label: (
				<Link rel="noopener noreferrer" to="">
					INR
				</Link>
			),
		},
		{
			key: '6',
			label: (
				<Link rel="noopener noreferrer" to="">
					JPY
				</Link>
			),
		},
		{
			key: '7',
			label: (
				<Link rel="noopener noreferrer" to="">
					CAD
				</Link>
			),
		},
		{
			key: '8',
			label: (
				<Link rel="noopener noreferrer" to="">
					CNY
				</Link>
			),
		},
		{
			key: '9',
			label: (
				<Link rel="noopener noreferrer" to="">
					AED
				</Link>
			),
		},
		{
			key: '10',
			label: (
				<Link rel="noopener noreferrer" to="">
					RUB
				</Link>
			),
		},
	];
	return (
		<div className="head-of-header_cotainer">
			<Row className="header-of-header_info">
				<Col>
					<span>(00) 000 111 222</span>
					<span> info@somedomain.com</span>
				</Col>
				<Col>
					<span>
						<Dropdown
							menu={{
								items: items1,
							}}
							placement="bottomLeft"
							arrow
						>
							<Button className="my-account_button">My Account</Button>
						</Dropdown>
					</span>
					<span>
						{' '}
						<Dropdown
							menu={{
								items: items2,
							}}
							placement="bottomLeft"
							arrow
						>
							<Button className="my-account_button">USD</Button>
						</Dropdown>
					</span>
				</Col>
			</Row>
		</div>
	);
};
