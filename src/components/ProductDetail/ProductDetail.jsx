import { Button, Col, Image, Input, Modal, Row } from 'antd';
import Rating from 'components/Rating/Rating';
import { SizeCard } from 'components/SizeDiv/SizeDiv';
import { useMemo, useState } from 'react';
import './ProductDetail.css';
import axios from 'axios';
import { API_URL } from 'constants/url';

const ProductDetail = ({
	product,
	selectedVariant,
	onColorChange,
	onSizeChange,
	image,
}) => {
	const [quantity, setQuantity] = useState(1);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	useMemo(() => {
		if (quantity > selectedVariant.stock) setQuantity(selectedVariant.stock);
	}, [selectedVariant, quantity]);

	const handleQuantityChange = (value) => {
		if (value >= 0 || value <= selectedVariant.stock) setQuantity(value);
	};

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const increaseQuantity = () => {
		if (quantity <= selectedVariant.stock - 1) {
			setQuantity(quantity + 1);
		}
	};

	const subtotal = selectedVariant.price * quantity;
	const [lstColor, lstSize] = useMemo(() => {
		return product.variant.reduce(
			(prev, curr) => {
				if (prev[0].findIndex((item) => item.id === curr.color.id) == -1)
					prev[0].push(curr.color);
				if (prev[1].findIndex((item) => item.id === curr.size.id) == -1)
					prev[1].push(curr.size);
				return prev;
			},
			[[], []]
		);
	}, [product]);

	const handleAddToCart = () => {
		const { price, id, image } = selectedVariant;
		const cartItemData = {
			quantity,
			itemPrice: price,
			nameCart: product.name,
			variantId: id,
			image,
			totalPrice: quantity * price,
		};

		axios
			.post(API_URL.CART_ITEM, cartItemData)
			.then((response) => {
				console.log('Item added to cart:', response.data);
			})
			.catch((error) => {
				console.error('Error adding item to cart:', error);
			});
	};

	return (
		<div className="product-detail-container">
			<h2>{product.name}</h2>
			<Row gutter={[16, 16]}>
				<Col span={12}>
					<Rating rating={product.review[0]?.rating} />
				</Col>
				<Col span={12} style={{ textAlign: 'right' }}>
					<p>Price: ${selectedVariant.price}</p>
				</Col>
			</Row>
			<p>{product.description}</p>
			<p>
				<label className="detail-title">Product Vendor:</label> {product.vendor}
			</p>
			<p>
				<label className="detail-title">Product Type:</label>{' '}
				{product.category.category}
			</p>
			<p>
				<label className="detail-title">Availability:</label>{' '}
				{selectedVariant.stock}
			</p>
			<Row gutter={[16, 16]}>
				<Col>
					<label className="detail-title">Color:</label>
				</Col>
				{lstColor.map((color) => (
					<Col key={color.id}>
						<div
							className={`custom-div ${
								color.id === selectedVariant.color.id ? 'selected-color' : ''
							}`}
							style={{ backgroundColor: color.color }}
							onClick={() => onColorChange(color.id)}
						></div>
					</Col>
				))}
			</Row>
			<br />
			<Row gutter={[16, 16]}>
				<Col>
					<label className="detail-title">Size:</label>
				</Col>
				{lstSize.map((size) => (
					<Col key={size.id}>
						<SizeCard
							size={size.size}
							isSelected={size.id === selectedVariant?.size.id}
							onClick={() => onSizeChange(size.id)}
						/>
					</Col>
				))}
			</Row>
			<br />
			<Row gutter={16} align="middle">
				<Col>
					<label className="detail-title">Quantity:</label>
				</Col>
				<Col>
					<div className="overview-quantity" style={{ width: '130px' }}>
						<div className="dec button" onClick={decreaseQuantity}>
							-
						</div>
						<Input
							value={quantity}
							className="quantity-text"
							onChange={handleQuantityChange}
						/>
						<div className="inc button" onClick={increaseQuantity}>
							+
						</div>
					</div>
				</Col>
			</Row>
			<div>
				<p>
					<label className="detail-title">Subtotal:</label> ${subtotal}
				</p>
			</div>
			<div className="action-btn">
				<Button
					onClick={() => {
						handleAddToCart();
						showModal();
					}}
					className="btn-handle"
				>
					ADD TO CART
				</Button>

				<Button className="btn-handle">BUY IT NOW</Button>
				<Button className="btn-handle">VIEW WISHLIST</Button>
			</div>
			<Modal
				title="ADDED TO CART"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<Row>
					<Image width={120} src={`http://localhost:3000/${image}`} />
					<Col>
						<p>{product.name}</p>
						<Button href="/cart">View Cart</Button>
					</Col>
				</Row>
			</Modal>
		</div>
	);
};

export default ProductDetail;
