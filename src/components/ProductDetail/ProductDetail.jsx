import { Button, Col, Row } from 'antd';
import { useState } from 'react';
import './ProductDetail.css';
import Rating from 'components/Rating/Rating';

const ProductDetail = ({ products, productload }) => {
	// const [selectedVariant] = useState(products.variant[0]);
	const [quantity, setQuantity] = useState(1);

	const handleQuantityChange = (value) => {
		setQuantity(value);
	};

	// const availabilityText =
	// 	selectedVariant.stock === 'Many In Stock' ? 'In Stock' : 'Out of Stock';

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
			{productload ? null : products && products.length > 0 ? (
				products.map((product) =>
					product.variant ? (
						<>
							<Row gutter={[16, 16]}>
								<Col span={12}>
									<h2>{product.name}</h2>
								</Col>
								<Col span={12} style={{ textAlign: 'right' }}>
									<p>Price: ${product.variant[0].price}</p>
								</Col>
							</Row>

							<div className="detail-star">
								<Rating rating={product.review[0]?.rating} />
							</div>

							<p>{product.description}</p>
							<p>
								<label className="detail-title">Product Vendor:</label>{' '}
								{product.vender}
							</p>
							<p>
								<label className="detail-title">Product Type:</label>{' '}
								{product.category.category}
							</p>
							<p>
								<label className="detail-title">Avaibility:</label>{' '}
								{product.variant[0].stock}
								{/* {availabilityText} */}
							</p>

							<Row gutter={[16, 16]}>
								<Col>
									<label className="detail-title">Color:</label>
								</Col>
								{product.variant.map((variant) => (
									<Col key={variant.id}>
										<div
											className="custom-div"
											style={{ backgroundColor: variant.color.color }}
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
										<div
											className="dec button"
											onClick={() => handleQuantitySub()}
										>
											-
										</div>
										<p
											className="quantity-text"
											onClick={() => handleQuantityChange()}
										>
											{quantity}
										</p>
										<p
											className="inc button"
											onClick={() => handleQuantityPlus()}
										>
											+
										</p>
									</div>
								</Col>
							</Row>

							<div>
								<p>
									<label className="detail-title">Subtotal:</label> $
									{/* {(selectedVariant.price * quantity).toFixed(2)} */}
								</p>
							</div>

							<div className="action-btn">
								<Button className="btn-handle">ADD TO CART</Button>
								<Button className="btn-handle">BUY IT NOW</Button>
								<Button className="btn-handle">VIEW WISHLIST</Button>
							</div>
						</>
					) : null
				)
			) : (
				<p>hehehe</p>
			)}
		</div>
	);
};

export default ProductDetail;
