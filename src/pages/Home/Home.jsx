import { Button, Col, Row } from 'antd';
import Category from 'components/Category/Category';
import { Contact } from 'components/Contact/Contact';
import { EmailForm } from 'components/EmailInput/EmailForm';
import { Featured } from 'components/Featured/Featured';
import { HeadHomeSlide } from 'components/HeadHomeSlide/HeadHomeSlide';
import { HomeFootCarousel } from 'components/HomeFootCarousel/HomeFootCarousel';
import ListOneCategory from 'components/ListOneCategory/ListOneCategory';
import { PickGradientProducts } from 'components/PickGradientProducts/PickGradientProducts';
import ShopCarousel from 'components/ShopCarousel/ShopCarousel';
import BootList from './../../components/BootList/BootList';
import './Home.css';

export const Home = () => {
	return (
		<>
			<div className="home">
				<Row justify={'center'} className="home-layout">
					<Col className="home_left-col" span={5}>
						<div className="home-categories">
							<span className="home_category-title">CATEGORY</span>
							<br />
							<br />
							<Category />
						</div>
						<br />
						<br />
						<div className="home-treak-boots">
							<span className="home_treak-boots-title">TREK BOOTS</span>
							<br />
							<br />
							<BootList />
						</div>
						<br />
						<br />
						<div className="home-equipments">
							<span className="home_equipments">EQUIQMENTS</span>
							<br />
							<br />
						</div>
						<br />
						<br />
						<div className="home-carousel">
							<br />
							<br />
							<ShopCarousel />
						</div>
						<br />
						<br />
						<div className="home-featured">
							<span className="home_featured">FEATURED POST</span>
							<br />
							<br />
							<Featured />
						</div>
						<br />
						<br />
						<div className="home-instagram">
							<span className="home_instagram">INSTAGRAM</span>
							<br />
							<br />
							<div style={{ textAlign: 'center' }}>
								<a className="action-btn">
									<Button className="btn-handle">VIEW MORE</Button>
								</a>
							</div>
						</div>
						<br />
						<br />
						<div className="home-newsletter">
							<span className="home_newsletter">NEWSLETTER</span>
							<br />
							<br />
							<EmailForm />
						</div>
						<br />
						<br />
					</Col>
					<Col span={1}></Col>
					<Col span={16}>
						<HeadHomeSlide />
						<br />
						<br />
						<div className="tenlist-bg">
							<p className="tenlist-title">NEW ARRIVALS</p>
						</div>

						<ListOneCategory
							categoryId={'97ee93a3-9e72-4a1a-855b-069400c05212'}
						/>

						<div className="collections">
							<a href="/collections">
								<img
									src="//hiking-camping-demo.myshopify.com/cdn/shop/files/banner-1_500x500.jpg?v=1613773234"
									alt=""
								/>
							</a>

							<a href="/collections/new-arrivals">
								<img
									src="//hiking-camping-demo.myshopify.com/cdn/shop/files/banner-2_500x500.jpg?v=1613773234"
									alt=""
								/>
							</a>
						</div>

						<br />
						<br />
						<br />
						<div>
							<PickGradientProducts />
						</div>

						<div>
							<a
								href="/products/footwear-shoes"
								className="footwear-shoes_image"
							>
								<img
									src="//hiking-camping-demo.myshopify.com/cdn/shop/files/banner-3_6a2faa66-5540-455a-9d20-81231f3ead68_1920x1920.jpg?v=1613773234"
									alt=""
								/>
							</a>
						</div>

						<br />
						<br />
						<div className="tenlist-bg">
							<p className="tenlist-title">BEST SELLING</p>
						</div>

						<Contact />

						<br />
						<br />
						<br />
						<HomeFootCarousel />
					</Col>

					<Col span={2}></Col>
				</Row>
			</div>
		</>
	);
};
