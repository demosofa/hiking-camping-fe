import { Card, Col, Row } from 'antd';
import Rating from 'components/Rating/Rating';
import { useGetProduct } from 'hooks/useGetProduct';
import { Link } from 'react-router-dom';

const Product = () => {
	const { data: products, isLoading: loadingProduct } = useGetProduct();
	return (
		<div className="wrap-container">
			<div className="wrap-container-color">
				<Row justify="center">
					{loadingProduct ? null : products && products.length > 0 ? (
						products.map((product) =>
							product.variant ? (
								<Col
									key={product.id}
									xs={24}
									md={11}
									lg={7}
									xl={8}
									className="row-wrap"
								>
									<a href={`/collections/${product.id}`}>
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
															// height: '300px',
														}}
													>
														<img
															src={`http://localhost:3000/${product.variant[0].image}`}
															className="product-img"
															alt="Hiking"
															crossOrigin="anonymous"
														/>
													</div>
													<div className="grid-link__title">
														<a className="product-text-name">{product.name}</a>
														<Link className="grid-color">
															{product.variant.map((variant) => (
																<Link
																	key={product.id}
																	className="grid-image"
																	style={{
																		background: `${variant.color.color}`,
																	}}
																></Link>
															))}
														</Link>
													</div>

													<div className="product-price-name">
														<span className="">
															${product.variant[0].price}
														</span>
														<div className="product-rating-pro">
															<Rating rating={product.review[0]?.rating} />
														</div>
													</div>
												</>
											}
										/>
									</a>
								</Col>
							) : null
						)
					) : (
						<p>No categories found.</p>
					)}
				</Row>
			</div>
		</div>
	);
};

export default Product;
