import './BootList.css'; // Import your CSS file for BootList styles

const BootList = () => {
	const boots = [
		{
			name: 'FORCLAZ FLEX 3',
			originalPrice: '$512.26',
			imageSrc:
				'//hiking-camping-demo.myshopify.com/cdn/shop/products/sports-1_medium.jpg?v=1480481941',
		},
		{
			name: 'Approach Shoes',
			salePrice: '$741.40',
			originalPrice: '$864.78',
			imageSrc:
				'//hiking-camping-demo.myshopify.com/cdn/shop/products/product-1_medium.jpg?v=1540786507',
		},
		{
			name: 'GTX Hiking Boot',
			originalPrice: '$846.05',
			imageSrc:
				'//hiking-camping-demo.myshopify.com/cdn/shop/products/img14_medium.jpg?v=1481087674',
		},
	];

	return (
		<div>
			{boots.map((boot, index) => (
				<div key={index} className="boot-item">
					<img src={boot.imageSrc} alt={boot.name} className="boot-image" />
					<div className="boot-details">
						<div className="boot-name">{boot.name}</div>
						{boot.originalPrice ? (
							<div className="price">
								<span className="sale">
									{boot.salePrice || boot.originalPrice}
								</span>
								{boot.salePrice && (
									<span className="original">
										<br />
										{boot.originalPrice}
									</span>
								)}
							</div>
						) : (
							<div className="price">{boot.salePrice}</div>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default BootList;
