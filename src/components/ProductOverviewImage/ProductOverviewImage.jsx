import ReactImageMagnify from 'react-image-magnify';
import './ProductOverviewImage.css';

export const ProductOverviewImage = ({ image }) => {
	const src = `http://localhost:3000/${image}`;
	return (
		<div className="product-image-container">
			<ReactImageMagnify
				smallImage={{
					alt: 'Wristwatch by Ted Baker London',
					width: 480,
					height: 480,
					src,
				}}
				largeImage={{
					width: 800,
					height: 1000,
					src,
				}}
			/>
		</div>
	);
};
