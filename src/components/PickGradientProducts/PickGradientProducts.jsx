import { Image, Space } from 'antd';
import { useState } from 'react';

import './PickGradientProduct.css';

export const PickGradientProducts = () => {
	const imageSrcList = [
		'//hiking-camping-demo.myshopify.com/cdn/shop/collections/coillection--1_450x450_crop_top.jpg?v=1481088394',
		'//hiking-camping-demo.myshopify.com/cdn/shop/collections/collection-2_450x450_crop_top.jpg?v=1481088435',
		'//hiking-camping-demo.myshopify.com/cdn/shop/collections/collection-3_450x450_crop_top.jpg?v=1481088375',
	];

	const slideNames = ['New Arrivals', 'Trekking', 'Best Selling'];
	const slideLinks = [
		'/collections/new-arrivals',
		'/collections/trekking',
		'/collections/best-selling',
	];

	const [selectedSlide, setSelectedSlide] = useState(null);

	const handleMouseEnter = (index) => {
		setSelectedSlide(index);
	};

	const handleMouseLeave = () => {
		setSelectedSlide(null);
	};

	return (
		<div>
			<Space>
				{imageSrcList.map((src, index) => (
					<a
						key={index}
						href={slideLinks[index]}
						className={`collection_image-container ${
							selectedSlide === index ? 'selected' : ''
						}`}
						onMouseEnter={() => handleMouseEnter(index)}
						onMouseLeave={handleMouseLeave}
					>
						<Image preview={false} className="collection_image" src={src} />
						{selectedSlide === index && (
							<div className="collection-text-overlay">
								<div className="collection-text-center">
									<h3 className="collection-grid-item__title grid-link">
										{slideNames[index]}
									</h3>
									<p>
										At vero eos et accusamus et iusto odio dignissimos ducimus
										qui blanditiis praesentium voluptatum ...
									</p>
								</div>
							</div>
						)}
					</a>
				))}
			</Space>
		</div>
	);
};
