import ReactImageMagnify from 'react-image-magnify';
import './ProductOverviewImage.css';

export const ProductOverviewImage = ({ products, productload }) => {
	return (
		<div className="product-image-container">
			{productload ? null : products && products.length > 0 ? (
				products.map((product) =>
					product.variant ? (
						<>
							<ReactImageMagnify
								{...{
									smallImage: {
										alt: 'Wristwatch by Ted Baker London',
										width: 480,
										height: 480,
										src: `http://localhost:3000/${product.variant[0].image}`,
										crossOrigin: 'anonymous',
									},
									largeImage: {
										src: `http://localhost:3000/${product.variant[0].image}`,
										width: 800,
										height: 1000,
										crossOrigin: 'anonymous',
									},
								}}
							/>
						</>
					) : null
				)
			) : (
				<p>hehehe</p>
			)}
		</div>
	);
};
