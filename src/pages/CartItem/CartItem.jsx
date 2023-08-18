import { Parallax } from 'components/Parallax/Parallax';
import './CartItem.css';
import { Button, Space, Table, message } from 'antd';
import {
	DeleteFilled,
	PlusSquareFilled,
	MinusSquareFilled,
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { clone } from '@utils';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const CartItem = () => {
	const [cart, setCart] = useState([]);
	const [deleted, setDeleted] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:3000/cart-item/user')
			.then((response) => {
				setCart(response.data);
			})
			.catch((error) => {
				message.error(error);
			});
	}, []);

	const handleDelete = (id) => {
		const targetIdx = cart.findIndex((item) => item.id == id);
		setDeleted((prev) => prev.concat(cart[targetIdx].id));
		setCart((prev) => prev.filter((item) => item.id != id));
	};

	const handleQuantityPlus = (id) => {
		setCart((prev) => {
			const cloned = clone(prev);
			const targetIdx = cloned.findIndex((item) => item.id == id);
			const target = cloned[targetIdx];
			if (target.quantity <= target.variant.stock - 1) {
				target.quantity += 1;
				target.totalPrice += target.itemPrice;
			}
			return cloned;
		});
	};

	const handleQuantityMinus = (id) => {
		setCart((prev) => {
			const cloned = clone(prev);
			const targetIdx = cloned.findIndex((item) => item.id == id);
			const target = cloned[targetIdx];
			if (target.quantity >= 1) {
				target.quantity -= 1;
				target.totalPrice -= target.itemPrice;
			}
			return cloned;
		});
	};
	const subTotal = cart.reduce((prev, curr) => prev + curr.totalPrice, 0);
	const handleSubTotal = async () => {
		await Promise.all(
			deleted.map((id) =>
				axios
					.delete(`http://localhost:3000/cart-item/${id}`)
					.then((response) => response.data)
			)
		);

		await Promise.all(
			cart.map(({ id, quantity, totalPrice, variant }) =>
				axios
					.patch(`http://localhost:3000/cart-item/${id}`, {
						quantity,
						totalPrice,
						variantStock: variant.stock,
					})
					.then((response) => response.data)
			)
		);
	};

	const columns = [
		{
			title: '___',
			dataIndex: 'image',
			key: 'image',
			render: (image) => (
				<div>
					<img
						style={{ maxWidth: 200 }}
						src={'http://localhost:3000/' + image}
					/>
				</div>
			),
		},
		{
			title: 'Product',
			dataIndex: 'nameCart',
			key: 'product',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Price',
			dataIndex: 'itemPrice',
			key: 'price',
			render: (price) => (
				<Space size="middle">
					{/* <EuroCircleFilled /> */}
					<p>$ {price}</p>
				</Space>
			),
		},
		{
			title: 'Quantity',
			dataIndex: 'quantity',
			key: 'quantity',
			render: (quantity, record) => (
				<Space size="middle">
					<span onClick={() => handleQuantityMinus(record.id)}>
						<MinusSquareFilled />
					</span>
					<p>{quantity}</p>
					<span onClick={() => handleQuantityPlus(record.id)}>
						<PlusSquareFilled />
					</span>
				</Space>
			),
		},
		{
			title: 'Total',
			key: 'total',
			render: (_, record) => <p>$ {record.quantity * record.itemPrice}</p>,
		},
		{
			title: 'Remove',
			key: 'remove',
			render: (_, record) => (
				<Space size="middle">
					<a onClick={() => handleDelete(record.id)}>
						<DeleteFilled style={{ color: '#fac012' }} />
					</a>
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
				<Parallax pageTitle={'Your Shopping Cart'} />
			</div>
			<div>
				<ImageTable items={cart} />
				<div className="title-sub">
					<div className="handle_btn">Subtotal: $ {subTotal}</div>
					<div className="desc">
						Shipping, taxes, and discounts will be calculated at checkout.
					</div>
					<div className="action-btn">
						<Link to={'/collection/all'}>
							<Button className="btn-handle">CONTINUE SHOPPING</Button>
						</Link>

						<Button className="btn-handle" onClick={handleSubTotal}>
							UPDATE CART
						</Button>
						<Button className="btn-handle">CHECK OUT</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
