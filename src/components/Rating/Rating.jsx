import { StarFilled, StarOutlined } from '@ant-design/icons';

const Rating = ({ rating }) => {
	const filledStars = Math.floor(rating);
	const fullStart = rating % 1 !== 0;

	const renderStars = () => {
		const stars = [];

		for (let i = 0; i < filledStars; i++) {
			stars.push(<StarFilled key={i} />);
		}

		if (fullStart) {
			stars.push(<StarOutlined key={filledStars} />);
		}

		while (stars.length < 5) {
			stars.push(<StarOutlined key={stars.length} />);
		}

		return stars;
	};

	return <>{renderStars()}</>;
};

export default Rating;
