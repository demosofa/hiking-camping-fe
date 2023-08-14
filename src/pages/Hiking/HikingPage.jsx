import { Card, Col, Row } from 'antd';
import './HikingPage.css';
import Footer from '@layout/Footer/Footer';
import { useGetCategory } from 'hooks/useGetCategory';

export default function SearchContext() {
	const { data: category, isLoading: loadingCategory } = useGetCategory();

	return (
		<>
			<div className="wrap-container">
				<div className="wrap-container-color">
					<Row justify="center">
						{loadingCategory ? null : category && category.length > 0 ? (
							category.map((category) => (
								<Col
									key={category.id}
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
														src={category.image}
														className="hiking-img"
														alt="Hiking"
													/>
												</div>
												<div className="grid-link__title">
													<h3 className="wrap-text-name">
														{category.category}
													</h3>
												</div>
											</>
										}
									/>
								</Col>
							))
						) : (
							<p>No categories found.</p>
						)}
					</Row>
				</div>
			</div>
			<Footer />
		</>
	);
}

// import React, { useState, useEffect } from 'react';
// import { Card, Col, Row } from 'antd';
// import './HikingPage.css';
// import Footer from '@layout/Footer/Footer';
// import axios from 'axios';

// export default function SearchContext() {
// 	const [categories, setCategories] = useState([]);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await axios.get('http://localhost:3000/category');
// 				setCategories(response.data);
// 			} catch (error) {
// 				console.error('Error fetching categories:', error);
// 			}
// 		};

// 		fetchData();
// 	}, []);

// 	return (
// 		<>
// 			<div className="wrap-container">
// 				<div className="wrap-container-color">
// 					<Row justify="center">
// 						{categories.map((category) => (
// 							<Col
// 								key={category.id}
// 								xs={24}
// 								md={11}
// 								lg={7}
// 								xl={5}
// 								className="row-wrap"
// 							>
// 								<Card
// 									hoverable
// 									className="card-wrap"
// 									style={{ padding: '0' }}
// 									cover={
// 										<>
// 											<div
// 												style={{
// 													display: 'flex',
// 													justifyContent: 'center',
// 												}}
// 											>
// 												<img
// 													src={category.image}
// 													className="hiking-img"
// 													alt="Hiking"
// 												/>
// 											</div>
// 											<div className="grid-link__title">
// 												<h3 className="wrap-text-name">{category.category}</h3>
// 											</div>
// 										</>
// 									}
// 								/>
// 							</Col>
// 						))}
// 					</Row>
// 				</div>
// 			</div>
// 			<Footer />
// 		</>
// 	);
// }
