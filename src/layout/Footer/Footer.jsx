import { Row, Col } from 'antd';
import {
	FacebookOutlined,
	TwitterOutlined,
	GooglePlusOutlined,
	YoutubeOutlined,
	PhoneFilled,
	MailFilled,
} from '@ant-design/icons';
import './Footer.css';
const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="site-footer">
					<Row justify="center">
						<Col xs={24} md={11} lg={7} xl={5} className="row-wrap">
							<div className="grid__item post-large--one-quarter medium--one-half">
								<h4>Location</h4>

								<div className="address">
									<p className="p-text">520,West valey, Anim ad minim,</p>
									<PhoneFilled className="phone-icon" />
									<i className="fa fa-phone"></i>+91 1234567890
								</div>

								<a href="mailto:/pages" className="mail-footer">
									<MailFilled className="mail-icon" />
									<i className="fa fa-envelope"></i>info@domainname.com
								</a>
							</div>
							<Row className="wrap-icon">
								<TwitterOutlined className="footer-social" />
								<FacebookOutlined className="footer-social" />
								<GooglePlusOutlined className="footer-social" />
								<YoutubeOutlined className="footer-social" />
							</Row>
						</Col>
						<Col xs={24} md={11} lg={7} xl={5} className="row-wrap">
							<div className="grid__item post-large--one-quarter medium--one-half">
								<h4>MY ACCOUNT</h4>

								<ul className="site-footer__links">
									<li>
										<a href="/search">Search Terms</a>
									</li>

									<li>
										<a href="/">Advanced Search</a>
									</li>

									<li>
										<a href="/">Orders and Returns</a>
									</li>

									<li>
										<a href="/">Consultant</a>
									</li>

									<li>
										<a href="/pages/faq">Help &amp; FAQs</a>
									</li>

									<li>
										<a href="/pages/contact-us">Store Locations</a>
									</li>
								</ul>
							</div>
						</Col>
						<Col xs={24} md={11} lg={7} xl={5} className="row-wrap">
							<div className="grid__item post-large--one-quarter medium--one-half">
								<h4>INFORMATION</h4>
								<ul className="site-footer__links">
									<li>
										<a href="/blogs/news">News</a>
									</li>

									<li>
										<a href="/pages/faq">{`Faq's`}</a>
									</li>

									<li>
										<a href="/">Refunds and returns</a>
									</li>

									<li>
										<a href="/">Deliveries</a>
									</li>

									<li>
										<a href="/">Privacy policy</a>
									</li>

									<li>
										<a href="/">Terms &amp; conditions</a>
									</li>
								</ul>
							</div>
						</Col>
						<Col xs={24} md={11} lg={7} xl={5} className="row-wrap">
							<Col className="row-wrap">
								<div className="grid__item post-large--one-quarter medium--one-half">
									<h4>SUPPORT</h4>
									<ul className="site-footer__links">
										<li>
											<a href="/collections/all">Rock Climbing Gear</a>
										</li>

										<li>
											<a href="/collections/all">Solar Powered Helmet</a>
										</li>

										<li>
											<a href="/collections/all">Pull Rope Rubber</a>
										</li>

										<li>
											<a href="/collections/all">Paring Knife</a>
										</li>

										<li>
											<a href="/collections/all">Ladder Golf</a>
										</li>

										<li>
											<a href="/collections/all">Hiking Bottles Holder</a>
										</li>
									</ul>
								</div>
							</Col>
						</Col>
					</Row>
					<Row>
						<Col span={2}></Col>
						<Col span={20}>
							<div className="footer-bottom">
								<ul className="menu">
									<li className="">
										<a href="/" className="menu_1">
											Home
										</a>
									</li>

									<li className="current_page_item">
										<a href="/collections/all" className="menu_2">
											Shop
										</a>
									</li>

									<li className="">
										<a href="/collections" className="menu_3">
											Hiking
										</a>
									</li>

									<li className="">
										<a href="/collections/trekking" className="menu_4">
											Trekking
										</a>
									</li>

									<li className="">
										<a href="/collections/tents-collection" className="menu_5">
											Camping
										</a>
									</li>

									<li className="">
										<a href="/pages/about-us" className="menu_6">
											Pages
										</a>
									</li>
								</ul>

								<div className="footer-icons">
									<ul className="inline-list payment-icons">
										<li>
											<a href="/cart">
												<img
													src="//hiking-camping-demo.myshopify.com/cdn/shop/files/payment_icon_3_small_1_small.png?v=1613773240"
													alt="Visa"
												></img>
											</a>
										</li>
										<li>
											<a href="/cart">
												<img
													src="//hiking-camping-demo.myshopify.com/cdn/shop/files/payment_icon_2_small_small.png?v=1613773240"
													alt="MasterCard"
												></img>
											</a>
										</li>
										<li>
											<a href="/cart">
												<img
													src="//hiking-camping-demo.myshopify.com/cdn/shop/files/payment_icon_4_small_small.png?v=1613773240"
													alt="Amex"
												></img>
											</a>
										</li>
										<li>
											<a href="/cart">
												<img
													src="//hiking-camping-demo.myshopify.com/cdn/shop/files/payment_icon_5_small_small.png?v=1613773240"
													alt="Discover"
												></img>
											</a>
										</li>
										<li>
											<a href="/cart">
												<img
													src="//hiking-camping-demo.myshopify.com/cdn/shop/files/payment_icon_6_small_small.png?v=1613773240"
													alt="PayPal"
												></img>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</Col>
					</Row>
				</div>
				<div className="grid__item copyright-section">
					<p className="copyright">
						Copyright © 2023, Hiking Camping{' '}
						<a
							target="_blank"
							rel="nofollow noreferrer"
							href="https://www.shopify.com?utm_campaign=poweredby&amp;utm_medium=shopify&amp;utm_source=onlinestore"
						>
							Powered by Shopify
						</a>
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
