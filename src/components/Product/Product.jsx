import {
	AppstoreFilled,
	CaretDownOutlined,
	CaretUpOutlined,
	UnorderedListOutlined,
} from '@ant-design/icons';
import { Card, Col, Dropdown, Row, Space } from 'antd';
import Rating from 'components/Rating/Rating';
import { useGetProduct } from 'hooks/useGetProduct';
import { Link } from 'react-router-dom';
import './Product.css';
import { useState } from 'react';

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

	const [expanded, setExpanded] = useState(false);

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	const { data: products, isLoading: loadingProduct } = useGetProduct();

	return (
		<>
			<Row className="dropdown" align={'middle'}>
				<Col span={7}>
					<div style={{ display: 'flex' }}>
						<a href="" title="Grid view" className="grid-view">
							<AppstoreFilled className="view-icon" />
						</a>
						<a href="" title="List view" className="list-view">
							<UnorderedListOutlined className="view-icon" />
						</a>
					</div>
				</Col>
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
									<p></p>
									<p></p>
									<p></p>FEATURED
									<span onClick={toggleExpand}>
										{expanded ? (
											<CaretUpOutlined className="dropdown-icon" />
										) : (
											<CaretDownOutlined className="dropdown-icon" />
										)}
									</span>
									<p></p>
								</Space>
							</a>
						</Dropdown>
					</Row>
				</Col>
				<Col span={2}></Col>
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
									<CaretDownOutlined />
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
								<a href={`/product/overview/${product.id}`}>
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
													<span className="">${product.variant[0].price}</span>
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
		</>
	);
};
