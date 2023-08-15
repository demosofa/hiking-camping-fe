import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useState } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product }) => {
	const [selectedVariant] = useState(product.variants[0]);
	const [quantity, setQuantity] = useState(1);

	const handleQuantityChange = (value) => {
		setQuantity(value);
	};

	const renderRatingStars = (averageRating) => {
		const stars = [];
		for (let i = 0; i < 5; i++) {
			stars.push(
				i < averageRating ? (
					<StarFilled
						key={i}
						style={{ fontSize: '20px', marginRight: '8px' }}
					/>
				) : (
					<StarOutlined
						key={i}
						style={{ fontSize: '20px', marginRight: '8px' }}
					/>
				)
			);
		}
		return stars;
	};

	let averageRating = 0;
	if (product.reviews.length > 0) {
		averageRating =
			product.reviews.reduce((total, review) => total + review.rating, 0) /
			product.reviews.length;
	}

	const availabilityText =
		selectedVariant.stock === 'Many In Stock' ? 'In Stock' : 'Out of Stock';

	const handleQuantitySub = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleQuantityPlus = () => {
		setQuantity(quantity + 1);
	};

	return (
		<div className="product-detail-container">
			<Row gutter={[16, 16]}>
				<Col span={12}>
					<h2>{product.name}</h2>
				</Col>
				<Col span={12} style={{ textAlign: 'right' }}>
					<p>Price: ${selectedVariant.price.toFixed(2)}</p>
					<p className="sale">${selectedVariant.price.toFixed(2)}</p>
				</Col>
			</Row>

			<div className="detail-star">{renderRatingStars(averageRating)}</div>

			<p>{product.description}</p>
			<p>
				<label className="detail-title">Product Vendor:</label> {product.vendor}
			</p>
			<p>
				<label className="detail-title">Product Type:</label>{' '}
				{product.categoryId}
			</p>
			<p>
				<label className="detail-title">Avaibility:</label> {availabilityText}
			</p>

			<Row gutter={[16, 16]}>
				<Col>
					<label className="detail-title">Color:</label>
				</Col>
				{product.variants.map((variant) => (
					<Col key={variant.id}>
						<div
							className="custom-div"
							style={{ backgroundColor: variant.colorId }}
						></div>
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
						<div className="dec button" onClick={() => handleQuantitySub()}>
							-
						</div>
						<p className="quantity-text" onClick={() => handleQuantityChange()}>
							{quantity}
						</p>
						<p className="inc button" onClick={() => handleQuantityPlus()}>
							+
						</p>
					</div>
				</Col>
			</Row>

			<div>
				<p>
					<label className="detail-title">Subtotal:</label> $
					{(selectedVariant.price * quantity).toFixed(2)}
				</p>
			</div>

			<div className="action-btn">
				<Button className="btn-handle">ADD TO CART</Button>
				<Button className="btn-handle">BUY IT NOW</Button>
				<Button className="btn-handle">VIEW WISHLIST</Button>
			</div>
		</div>
	);
};

export default ProductDetail;
