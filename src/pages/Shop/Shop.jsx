import { Card, Col, Row } from 'antd';

import Category from 'components/Category/Category';
import ColorDiv from 'components/ColorDiv/ColorDiv';
import SizeDiv from 'components/SizeDiv/SizeDiv';
import './Shop.css';
import BrandList from 'components/BrandList/BrandList';
import PriceList from 'components/PriceList/PriceList';
import BootList from 'components/BootList/BootList';
import ShopCarousel from 'components/ShopCarousel/ShopCarousel';
import { Parallax } from 'components/Parallax';
import { Link } from 'react-router-dom';
import Rating from 'components/Rating/Rating';
import { useGetProduct } from 'hooks/useGetProduct';

export const Shop = () => {
	const { data: products, isLoading: loadingProduct } = useGetProduct();

	return (
		<>
			<div className="shop">
				<div className="shop-layout">
					<Parallax pageTitle="Collections" />
					<Row justify={'center'}>
						<Col span={1}></Col>
						<Col className="shop_left-col" span={5}>
							<div className="shop-categories">
								<span className="shop_category-title">Category</span>
								<br />
								<br />
								<Category />
							</div>
							<br />
							<br />
							<div className="shop_color">
								<span className="shop_color-title">Shop By Color</span>
								<br />
								<br />
								<ColorDiv />
							</div>
							<br />
							<br />
							<div className="shop_size">
								<span className="shop_size-title">Shop By Size</span>
								<br />
								<br />
								<SizeDiv />
							</div>
							<br />
							<br />
							<div className="shop_size">
								<span className="shop_brand-title">Shop By Brand</span>
								<br />
								<br />
								<BrandList />
							</div>
							<br />
							<br />
							<div className="shop_size">
								<span className="shop_price-title">Shop By Price</span>
								<br />
								<br />
								<PriceList />
							</div>
							<br />
							<br />
							<div className="shop_size">
								<span className="shop_price-title">Treak Boots</span>
								<br />
								<br />
								<BootList />
							</div>
							<div className="shop-carousel">
								<br />
								<br />
								<ShopCarousel />
							</div>
						</Col>
						<Col span={17}>
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
																	<a className="product-text-name">
																		{product.name}
																	</a>
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
																		<Rating
																			rating={product.review[0]?.rating}
																		/>
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
						</Col>
						<Col span={1}></Col>
					</Row>
				</div>
			</div>
		</>
	);
};
