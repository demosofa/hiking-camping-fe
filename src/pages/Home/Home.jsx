import { Button, Col, Row } from 'antd';
import Category from 'components/Category/Category';
import { EmailForm } from 'components/EmailInput/EmailForm';
import { Featured } from 'components/Featured/Featured';
import ShopCarousel from 'components/ShopCarousel/ShopCarousel';
import BootList from './../../components/BootList/BootList';
import './Home.css';
import { HeadHomeSlide } from 'components/HeadHomeSlide/HeadHomeSlide';
import { TentList } from 'components/TentList/TentList';

export const Home = () => {
	return (
		<>
			<div className="home">
				<Row justify={'center'} className="home-layout">
					<Col span={1}></Col>
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
					<Col span={14}>
						<HeadHomeSlide />
						<br />
						<br />
						<TentList />
					</Col>
					<Col span={4}></Col>
				</Row>
			</div>
		</>
	);
};
