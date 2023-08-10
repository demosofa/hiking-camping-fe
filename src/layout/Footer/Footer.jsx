import { Row, Col, Card } from 'antd';
import './Footer.css';
const Footer = () => {
	const { Meta } = Card;
	return (
		<>
			<footer className="footer">
				<Row justify="center" className="site-footer">
					<Col
						xs={24}
						// sm={8}
						md={11}
						lg={7}
						xl={5}
						className="row-wrap"
					>
						<div className="grid__item post-large--one-quarter medium--one-half">
							<h4>Location</h4>

							<div className="address">
								<p className="p-text">520,West valey, Anim ad minim,</p>
								<i className="fa fa-phone"></i>+91 1234567890
							</div>

							<a href="mailto:/pages">
								<i className="fa fa-envelope"></i>info@domainname.com
							</a>

							<div className="grid footer-icons">
								<ul className="inline-list social-icons">
									<li>
										<a
											className="icon-fallback-text twitt hexagon"
											target="blank"
											href="https://twitter.com/shopify"
											title="Tweet"
										>
											<span className="corner_1"></span>
											<span className="corner_2"></span>
											<i className="fa fa-twitter" aria-hidden="true"></i>
										</a>
									</li>

									<li>
										<a
											className="icon-fallback-text fb hexagon"
											target="blank"
											href="https://www.facebook.com/shopify"
											title="facebbok"
										>
											<span
												className="fa fa-facebook"
												aria-hidden="true"
											></span>
											<span className="fallback-text">Facebook</span>
										</a>
									</li>

									<li>
										<a
											className="icon-fallback-text google_plus"
											target="blank"
											href="#"
											title="Google Plus"
											rel="publisher"
										>
											<span
												className="fa fa-google-plus"
												aria-hidden="true"
											></span>
											<span className="fallback-text">Google</span>
										</a>
									</li>

									<li>
										<a
											className="icon-fallback-text youtube"
											target="blank"
											href="#"
											title="You Tube"
										>
											<span className="fa fa-youtube" aria-hidden="true"></span>
											<span className="fallback-text">YouTube</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</Col>
					<Col
						xs={24}
						// sm={8}
						md={11}
						lg={7}
						xl={5}
						className="row-wrap"
					>
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
					<Col
						xs={24}
						// sm={8}
						md={11}
						lg={7}
						xl={5}
						className="row-wrap"
					>
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
					<Col
						xs={24}
						// sm={8}
						md={11}
						lg={7}
						xl={5}
						className="row-wrap"
					>
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
			</footer>
			<footer className="footer">
				<Row justify="center" className="site-footer">
					<Col
						xs={24}
						// sm={8}
						md={11}
						lg={7}
						xl={5}
						className="row-wrap"
					>
						<Card
							hoverable
							style={{
								width: 240,
							}}
							cover={
								<img
									alt="example"
									src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
								/>
							}
						>
							<Meta
								title="Europe Street beat"
								description="www.instagram.com"
							/>
						</Card>
					</Col>
					<Col
						xs={24}
						// sm={8}
						md={11}
						lg={7}
						xl={5}
						className="row-wrap"
					>
						<Card
							hoverable
							style={{
								width: 240,
							}}
							cover={
								<img
									alt="example"
									src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
								/>
							}
						>
							<Meta
								title="Europe Street beat"
								description="www.instagram.com"
							/>
						</Card>
					</Col>
					<Col
						xs={24}
						// sm={8}
						md={11}
						lg={7}
						xl={5}
						className="row-wrap"
					>
						<Meta
							hoverable
							style={{
								width: 240,
							}}
							cover={
								<img
									alt="example"
									src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
								/>
							}
						>
							<Meta
								title="Europe Street beat"
								description="www.instagram.com"
							/>
						</Meta>
					</Col>
				</Row>
			</footer>
		</>
	);
};

export default Footer;
