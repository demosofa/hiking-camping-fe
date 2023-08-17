import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel, Image, Space } from 'antd';
import { useRef, useState } from 'react';
import './HeadHomeSlide.css';

export const HeadHomeSlide = () => {
	const carouselRef = useRef(null);
	const [selectedSlide, setSelectedSlide] = useState(null);

	const handlePrevClick = () => {
		if (carouselRef.current) {
			carouselRef.current.prev();
		}
	};

	const handleNextClick = () => {
		if (carouselRef.current) {
			carouselRef.current.next();
		}
	};

	const handleGoto = (index) => {
		carouselRef.current.goTo(index);
		setSelectedSlide(index);
	};

	const imageSrcList = [
		'//hiking-camping-demo.myshopify.com/cdn/shop/files/slider1_1920x1920.jpg?v=1613773234',
		'//hiking-camping-demo.myshopify.com/cdn/shop/files/slider3_f841c720-d049-4f75-87a2-fee6657b5d26_1920x1920.jpg?v=1613773234',
		'//hiking-camping-demo.myshopify.com/cdn/shop/files/slider2_4630933f-dd9a-4dbb-b408-bd5aed68d17d_1920x1920.jpg?v=1613773245',
		'//hiking-camping-demo.myshopify.com/cdn/shop/files/slider4_9e0c2419-5632-45cb-8e7a-fc2d648c5f8b_1920x1920.jpg?v=1613773234',
	];

	const slideNames = ['Trekking', 'Flying Belt', 'Hiking', 'Climbing'];

	return (
		<div>
			<div className="home-slide_container">
				<Carousel
					dots={false}
					draggable={true}
					autoplay
					arrows
					ref={carouselRef}
					afterChange={(current) => setSelectedSlide(current)} // Update the selected slide index
				>
					{imageSrcList.map((src, index) => (
						<div key={index} className="home-slide_image-container">
							<Image
								style={{ width: '90%', margin: '0 auto' }}
								preview={false}
								className="home-slide_image"
								src={src}
							/>
						</div>
					))}
				</Carousel>
				<Space>
					{imageSrcList.map((src, index) => (
						<div
							key={index}
							className={`home-slide_image-container ${
								selectedSlide === index ? 'selected' : ''
							}`}
						>
							<Image
								preview={false}
								className="home-slide_image"
								src={src}
								onClick={() => handleGoto(index)}
							/>
							{selectedSlide === index && (
								<div className="home-slide_overlay">
									<p className="slide-name">{slideNames[index]}</p>
								</div>
							)}
						</div>
					))}
				</Space>
				<a className="home-silde prev" onClick={handlePrevClick}>
					<LeftOutlined />
				</a>
				<a className="home-silde next" onClick={handleNextClick}>
					<RightOutlined />
				</a>
			</div>
		</div>
	);
};
