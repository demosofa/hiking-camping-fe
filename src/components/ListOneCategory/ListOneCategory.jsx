import { useState, useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import Footer from '@layout/Footer/Footer';
import axios from 'axios';
import Rating from 'components/Rating/Rating';

export default function ListOneCategory() {
	const [category, setCategory] = useState(null);
	const categoryId = '826b070f-c612-40ea-9905-3bf48b520407'; // Thay 'your_category_id' bằng ID danh mục mong muốn

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
		// Hiển thị thông báo hoặc spinner khi đang tải dữ liệu
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className="wrap-container">
				<div className="wrap-container-color">
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
									className="card-wrap"
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
													className="hiking-img"
													alt="Hiking"
												/>
											</div>
											<div className="grid-link__title">
												<h3 className="wrap-text-name">{product.name}</h3>
											</div>
											<div className="grid-color">
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
				</div>
			</div>
			<Footer />
		</>
	);
}
