const products = [
	{
		id: 1,
		name: 'Approach Shoes',
		vendor: 'Werty',
		description: 'Etiam vehicula...',
		categoryId: 'Camping',
		variants: [
			{
				id: 101,
				stock: 'Many In Stock',
				colorId: 'Black',
				sizeId: 'M',
				price: 737.54,
				productId: 1,
				image: 'path_to_image_1.jpg',
			},
			{
				id: 102,
				stock: 'Limited Stock',
				colorId: 'Brown',
				sizeId: 'L',
				price: 860.28,
				productId: 1,
				image: 'path_to_image_2.jpg',
			},
		],
		reviews: [
			{
				id: 1,
				name: 'John Doe',
				email: 'johndoe@example.com',
				rating: 2,
				review_title: 'Great Product!',
				review_body:
					'I love these approach shoes. They are very comfortable...',
			},
			// Thêm các đánh giá khác
		],
	},
	// Thêm các sản phẩm khác
];

export { products };
