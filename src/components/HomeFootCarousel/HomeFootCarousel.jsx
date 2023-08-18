import { Carousel } from 'antd';

const imageData = [
	'//hiking-camping-demo.myshopify.com/cdn/shop/files/client-2_200x200.jpg?v=1613773234',
	'//hiking-camping-demo.myshopify.com/cdn/shop/files/client-3_3a9632df-201c-4b6f-892c-1281333b7872_200x200.jpg?v=1613773234',
	'//hiking-camping-demo.myshopify.com/cdn/shop/files/about_3_200x200.jpg?v=1613773234',
	'//hiking-camping-demo.myshopify.com/cdn/shop/files/about_4_200x200.jpg?v=1613773234',
	'//hiking-camping-demo.myshopify.com/cdn/shop/files/about_5_200x200.jpg?v=1613773234',
	'//hiking-camping-demo.myshopify.com/cdn/shop/files/client-2_df6fb989-dbd9-4715-8874-5802264a5e80_200x200.jpg?v=1613773234',
	'//hiking-camping-demo.myshopify.com/cdn/shop/files/client-3_ddae9bb0-635c-440c-b965-7ec67e8c3294_200x200.jpg?v=1613773234',
];

const ImageCarousel = () => {
	const groupSize = 5;
	const imageGroups = [];

	for (let i = 0; i < imageData.length; i += groupSize) {
		imageGroups.push(imageData.slice(i, i + groupSize));
	}

	return (
		<Carousel autoplay infinite>
			{imageGroups.map((group, index) => (
				<div key={index}>
					<div style={{ display: 'flex' }}>
						{group.map((src, innerIndex) => (
							<div
								key={innerIndex}
								style={{
									flex: '0 0 20%',
									padding: '0 8px',
									display: 'flex',
									justifyContent: 'space-around',
								}}
							>
								<img src={src} alt={`carousel-img-${index}-${innerIndex}`} />
							</div>
						))}
					</div>
				</div>
			))}
		</Carousel>
	);
};

export default ImageCarousel;
