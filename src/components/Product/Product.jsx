import { Col, Row, Card } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

import { useGetProduct } from 'hooks/useGetProduct';
import Rating from 'components/Rating/Rating';
import { Link } from 'react-router-dom';

export const Product = () => {
	const items = [
		{
			label: <a href="">Featured</a>,
			key: '0',
		},
		{
			label: <a href="">Price,low to high</a>,
			key: '1',
		},
		{
			label: <a href="">Price, hight to low</a>,
			key: '2',
		},
		{
			label: <a href="">A-Z</a>,
			key: '3',
		},
		{
			label: <a href="">Z-A</a>,
			key: '4',
		},
		{
			label: <a href="">Date, old to new</a>,
			key: '5',
		},
		{
			label: <a href="">Date, new to old</a>,
			key: '6',
		},
		{
			label: <a href="">Best Selling</a>,
			key: '7',
		},
	];

	const shows = [
		{
			label: <a href="">12</a>,
			key: '0',
		},
		{
			label: <a href="">24</a>,
			key: '1',
		},
		{
			label: <a href="">36</a>,
			key: '2',
		},
		{
			label: <a href="">All</a>,
			key: '3',
		},
	];

	const { data: products, isLoading: loadingProduct } = useGetProduct();

	return (
		<>
			<div className="shop">
				<Row justify={'center'} className="shop-layout">
					<Col span={1}></Col>
					<Col span={1}></Col>
					<Col className="dropdown-content" span={16}>
						<Row className="dropdown" align={'middle'}>
							<Col span={7}></Col>
							<Col>
								<Row>
									<p className="text-dropdown">Sort By</p>
									<Dropdown
										menu={{
											items,
										}}
										trigger={['click']}
									>
										<a onClick={(e) => e.preventDefault()}>
											<Space className="dropdown-space">
												FEATURED
												<DownOutlined className="dropdown-icon" />
											</Space>
										</a>
									</Dropdown>
								</Row>
							</Col>
							<Col className="Bienmat" span={2}></Col>
							<Col>
								<Row>
									<p className="text-dropdown">Show</p>
									<Dropdown menu={{ items: shows }} trigger={['click']}>
										<a onClick={(e) => e.preventDefault()}>
											<Space
												style={{
													width: '140px',
													height: '41px',
													background: 'white',
													border: '1px solid #e4e4e4',
													display: 'flex',
													justifyContent: 'space-evenly',
												}}
											>
												12
												<DownOutlined />
											</Space>
										</a>
									</Dropdown>
								</Row>
							</Col>
						</Row>
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
							{/* {
								loadingProduct ? null : products && products.length > 0 ? 
								(products.map((product) => product.variant ? (<Col></Col>): null)):(<p>hehehe</p>
								)
							} */}
						</Row>
					</Col>
					<Col span={1}></Col>
				</Row>
			</div>
		</>
	);
};
