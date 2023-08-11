import { Col, Row } from 'antd';
import './SizeDiv.css'; // Import file CSS để định dạng các thẻ

const SizeCard = ({ content, size }) => {
	const cardClassName = `size-card size-card-${size}`;
	return (
		<div className={cardClassName}>
			<a href="#" className="size-link">
				{content}
			</a>
		</div>
	);
};

const SizeDiv = () => {
	const items = [
		{ content: 'M', size: 'large' },
		{ content: 'L', size: 'large' },
		{ content: 'X', size: 'large' },
	];

	return (
		<div className="container">
			<Row gutter={[16, 16]}>
				{items.map((item, index) => (
					<Col key={index} span={8}>
						<SizeCard content={item.content} size={item.size} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default SizeDiv;
