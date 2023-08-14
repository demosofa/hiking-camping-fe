import { Link } from 'react-router-dom';
import './ColorDiv.css';

const colors = [
	'#ff0000',
	'#cd853f',
	'#000000',
	'#ffffff',
	'#ffc0cb',
	'#2e75dd',
	'#c8c8c8',
	'#f3f0b9',
];

const ColorDiv = () => {
	return (
		<div className="custom-divs-container">
			{colors.map((color, index) => (
				<Link to="/" key={index} className="custom-div-link">
					<div className="custom-div" style={{ backgroundColor: color }}></div>
				</Link>
			))}
		</div>
	);
};

export default ColorDiv;
