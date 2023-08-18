import { Link } from 'react-router-dom';
import './ColorDiv.css';

const colors = [
	'#ff0000',
	'#cd853f',
	'#008000',
	'#000000',
	'#ffffff',
	'#ffc0cb',
	'#f8ab51',
	'#2e75dd',
	'#996666',
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
