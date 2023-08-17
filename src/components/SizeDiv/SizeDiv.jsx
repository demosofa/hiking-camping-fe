import { Col, Row } from 'antd';
import './SizeDiv.css';

export const SizeCard = ({ size, isSelected, ...props }) => {
	const cardClassName = `size-card size-card-${size} ${
		isSelected ? 'selected' : ''
	}`;
	return (
		<div className={cardClassName} {...props}>
			{size}
		</div>
	);
};

const SizeDiv = () => {
	const sizes = ['M', 'L', 'X'];

	return (
		<div className="container">
			<Row gutter={[16, 16]}>
				{sizes.map((sizeItem, index) => (
					<Col key={index} span={8}>
						<SizeCard size={sizeItem} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default SizeDiv;
