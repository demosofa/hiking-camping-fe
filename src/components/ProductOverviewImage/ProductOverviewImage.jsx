import ReactImageMagnify from 'react-image-magnify';
import './ProductOverviewImage.css';

export const ProductOverviewImage = () => {
	return (
		<div className="product-image-container">
			<ReactImageMagnify
				{...{
					smallImage: {
						alt: 'Wristwatch by Ted Baker London',
						width: 480,
						height: 480,
						src: 'https://th.bing.com/th/id/OIP.uEgVM3DyVQYJ9j_mWw7wzwHaH7?pid=ImgDet&rs=1',
					},
					largeImage: {
						src: 'https://th.bing.com/th/id/OIP.uEgVM3DyVQYJ9j_mWw7wzwHaH7?pid=ImgDet&rs=1',
						width: 800,
						height: 1000,
					},
				}}
			/>
		</div>
	);
};
