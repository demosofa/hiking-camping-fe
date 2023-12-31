import { Col, Row } from 'antd';
import Category from 'components/Category/Category';
import ColorDiv from 'components/ColorDiv/ColorDiv';
import { Parallax } from 'components/Parallax/Parallax';
import PriceList from 'components/PriceList/PriceList';
import ShopCarousel from 'components/ShopCarousel/ShopCarousel';
import SizeDiv from 'components/SizeDiv/SizeDiv';
import './Shop.css';
import BrandList from 'components/BrandList/BrandList';
import BootList from 'components/BootList/BootList';

import { Product } from 'components/Product/Product';

export const Shop = () => {
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
							<Product />
						</Col>
						<Col span={1}></Col>
					</Row>
				</div>
			</div>
		</>
	);
};
