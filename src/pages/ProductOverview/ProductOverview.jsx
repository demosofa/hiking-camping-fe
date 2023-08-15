import ProductDetail from 'components/ProductDetail/ProductDetail';
import { products } from './products';
import './ProductOverview.css';
import { Col, Row } from 'antd';
import { ProductOverviewImage } from 'components/ProductOverviewImage/ProductOverviewImage';

export const ProductOverview = () => {
	return (
		<div className="product-overview">
			<Row justify={'center'} className="product-overview_layout">
				<Col span={1}></Col>
				<Col span={10}>
					<ProductOverviewImage />
				</Col>
				<Col span={1}></Col>
				<Col span={11}>
					{products.map((product) => (
						<ProductDetail key={product.id} product={product} />
					))}
				</Col>
				<Col span={1}></Col>
			</Row>
		</div>
	);
};
