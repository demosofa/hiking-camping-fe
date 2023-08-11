import { Card, Col, Row } from 'antd';
import './HikingPage.css';
import Footer from '@layout/Footer/Footer';

export default function SearchContext() {
	const data = [
		{
			img: 'https://hiking-camping-demo.myshopify.com/cdn/shop/collections/mega7_grande.jpg?v=1484052411',
			type: 'ADVENTURE',
		},
		{
			img: 'https://hiking-camping-demo.myshopify.com/cdn/shop/collections/collection-3_grande.jpg?v=1481088375',
			type: 'BEST SELLING',
		},
		{
			img: 'https://hiking-camping-demo.myshopify.com/cdn/shop/collections/img35_grande.jpg?v=1481175176',
			type: 'HIKING',
		},
		{
			img: 'https://hiking-camping-demo.myshopify.com/cdn/shop/collections/coillection--1_grande.jpg?v=1481088394',
			type: 'NEW ARRIVALS',
		},
		{
			img: 'https://hiking-camping-demo.myshopify.com/cdn/shop/collections/coillection--1_grande.jpg?v=1481088394',
			type: 'NEW ARRIVALS',
		},
		{
			img: 'https://hiking-camping-demo.myshopify.com/cdn/shop/collections/coillection--1_grande.jpg?v=1481088394',
			type: 'NEW ARRIVALS',
		},
		{
			img: 'https://hiking-camping-demo.myshopify.com/cdn/shop/collections/coillection--1_grande.jpg?v=1481088394',
			type: 'NEW ARRIVALS',
		},
		{
			img: 'https://hiking-camping-demo.myshopify.com/cdn/shop/collections/coillection--1_grande.jpg?v=1481088394',
			type: 'NEW ARRIVALS',
		},
		{
			img: 'https://hiking-camping-demo.myshopify.com/cdn/shop/collections/coillection--1_grande.jpg?v=1481088394',
			type: 'NEW ARRIVALS',
		},
		{
			img: 'https://hiking-camping-demo.myshopify.com/cdn/shop/collections/coillection--1_grande.jpg?v=1481088394',
			type: 'NEW ARRIVALS',
		},
	];

	return (
		<>
			<div className="wrap-container">
				<div className="wrap-container-color">
					<Row justify="center">
						{data.map((item, index) => (
							<Col
								key={index}
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
												<img src={item.img} className="hiking-img" />
											</div>
											<div className="grid-link__title">
												<h3 className="wrap-text-name">{item.type}</h3>
											</div>
										</>
									}
								></Card>
							</Col>
						))}
					</Row>
				</div>
			</div>
			<Footer />
		</>
	);
}
