import { Carousel, Image } from 'antd';
import './ShopCarousel.css';

const ShopCarousel = () => (
	<Carousel autoplay dots={false} className="custom-carousel">
		<div className="carousel-slide">
			<div className="image-container">
				<Image
					preview={false}
					className="image"
					width={235}
					src="//hiking-camping-demo.myshopify.com/cdn/shop/files/promo1_500x500.jpg?v=1613773234"
				/>
			</div>
		</div>
		<div className="carousel-slide">
			<div className="image-container">
				<Image
					preview={false}
					className="image"
					width={235}
					src="//hiking-camping-demo.myshopify.com/cdn/shop/files/promo2_500x500.jpg?v=1613773234"
				/>
			</div>
		</div>
		<div className="carousel-slide">
			<div className="image-container">
				<Image
					preview={false}
					className="image"
					width={235}
					src="//hiking-camping-demo.myshopify.com/cdn/shop/files/promo3_500x500.jpg?v=1613773234"
				/>
			</div>
		</div>
	</Carousel>
);

export default ShopCarousel;
