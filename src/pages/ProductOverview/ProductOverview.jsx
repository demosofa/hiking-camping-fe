import { Col, Row } from 'antd';
import { useGetProductDetail } from 'hooks/useGetProductDetail';
import { useMemo, useState } from 'react';
import './ProductOverview.css';
import ProductDetail from 'components/ProductDetail/ProductDetail';
import { ProductOverviewImage } from 'components/ProductOverviewImage/ProductOverviewImage';

export const ProductOverview = () => {
	const { data: productDetail, isLoading: loadingProductDetail } =
		useGetProductDetail();

	const [selectedColor, setSelectedColor] = useState('');
	const [selectedSize, setSelectedSize] = useState(null);

	console.log(selectedColor, selectedSize);

	const selectedVariant = useMemo(() => {
		if (loadingProductDetail) return null;
		let variant = productDetail.variant.find((item) => {
			return item.color.id === selectedColor && item.size.id === selectedSize;
		});
		console.log(variant);
		if (!variant) variant = productDetail.variant[0];
		return variant;
	}, [selectedColor, selectedSize, loadingProductDetail, productDetail]);

	const handleColorChange = (colorId) => {
		setSelectedColor(colorId);
	};

	const handleSizeChange = (sizeId) => {
		setSelectedSize(sizeId);
	};

	if (!selectedVariant) {
		return <p>Loading...</p>;
	}

	return (
		<div className="product-overview">
			<Row justify={'center'} className="product-overview_layout">
				<Col span={10}>
					<ProductOverviewImage image={selectedVariant.image} />
				</Col>
				<Col span={11}>
					<ProductDetail
						product={productDetail}
						selectedVariant={selectedVariant}
						onColorChange={handleColorChange}
						onSizeChange={handleSizeChange}
					/>
				</Col>
			</Row>
		</div>
	);
};
