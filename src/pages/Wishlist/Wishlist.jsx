import { Parallax } from 'components/Parallax';
import './Wishlist.css';
import { Button, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Wishlist = () => {
	const [wishlist, setWishlist] = useState([]);
	// const [deleted, setDeleted] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:3000/wishlist')
			.then((response) => {
				setWishlist(response.data.products);
			})
			.catch((error) => {
				console.log('Error fetching cart data:', error);
			});
	}, []);

	const handleDelete = (id) => {
		axios
			.delete(`http://localhost:3000/wishlist/${id}`)
			.then(() => {
				setWishlist((prev) => prev.filter((item) => item.id !== id));
			})
			.catch((error) => {
				console.error('Error deleting item:', error);
			});
	};

	const columns = [
		{
			title: '___',
			key: 'delete',
			render: (_, record) => (
				<Space size="middle">
					<a onClick={() => handleDelete(record.id)}>x</a>
				</Space>
			),
		},
		{
			title: '___',
			dataIndex: 'variant',
			key: 'image',
			render: (variants) => (
				<span>
					{variants.map((variant) => (
						<span key={variant.id}>
							<img
								style={{ maxWidth: 200 }}
								src={'http://localhost:3000/' + variant.image}
								crossOrigin="anonymous"
							/>
							<br />
						</span>
					))}
				</span>
			),
		},
		{
			title: 'Product',
			dataIndex: 'name',
			key: 'name',
			render: (name) => <span>{name}</span>,
		},
		{
			title: 'Price',
			dataIndex: 'variant',
			key: 'price',
			render: (variants) => (
				<span>
					{variants.map((variant) => (
						<span key={variant.id}>
							{variant.price}
							<br />
						</span>
					))}
				</span>
			),
		},
		{
			title: 'Stock status',
			dataIndex: 'variant',
			key: 'stock',
			render: (variants) => (
				<span>
					{variants.map((variant) => (
						<span key={variant.id}>
							{variant.stock}
							<br />
						</span>
					))}
				</span>
			),
		},
		{
			title: '___',
			key: 'review',
			render: () => (
				<Space className="action-btn" size="middle">
					<Link>
						<Button className="btn-handle">VIEW PRODUCT</Button>
					</Link>
				</Space>
			),
		},
	];

	const ImageTable = ({ items }) => {
		return (
			<Table
				className="custom-table"
				dataSource={items}
				columns={columns}
				rowKey="id"
			/>
		);
	};
	return (
		<div className="cart_body">
			<div className="bg-parallax">
				<Parallax pageTitle={'Wishlist'} />
			</div>
			<div>
				<ImageTable items={wishlist} />
			</div>
		</div>
	);
};
