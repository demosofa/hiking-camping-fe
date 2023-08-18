import { useState, useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import './ListOneCategory.css';
import axios from 'axios';
import Rating from 'components/Rating/Rating';

export default function ListOneCategory() {
	const [category, setCategory] = useState(null);
	const categoryId = '97ee93a3-9e72-4a1a-855b-069400c05212';
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3000/category/${categoryId}`
				);
				setCategory(response.data);
			} catch (error) {
				console.error('Error fetching category:', error);
			}
		};

		fetchData();
	}, [categoryId]);

	if (!category) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Row justify="center">
				{category.product.map((product) => (
					<Col
						key={product.id}
						xs={24}
						md={11}
						lg={7}
						xl={5}
						className="row-wrap"
					>
						<Card
							hoverable
							className="card-category-product"
							style={{ padding: '0' }}
							cover={
								<>
									<div
										style={{
											display: 'flex',
											justifyContent: 'center',
										}}
									>
										<img
											src={`http://localhost:3000/${product.variant[0].image}`}
											className="hiking-img-product"
											alt="Hiking"
										/>
									</div>
									<div className="grid-link__title">
										<h3 className="wrap-text-name">{product.name}</h3>
										<div className="grid-color-category">
											{product.variant.map((variant) => (
												<span
													key={variant.id}
													className="grid-image"
													style={{
														background: `${variant.color.color}`,
													}}
												></span>
											))}
										</div>
									</div>

									<div className="product-price-name">
										<span className="">${product.variant[0].price}</span>
										<div className="product-rating-pro">
											<Rating rating={product.review[0]?.rating} />
										</div>
									</div>
								</>
							}
						/>
					</Col>
				))}
			</Row>
		</>
	);
}
