import { useState } from 'react';
import SubCategory from '../SubCategory/SubCategory';
import './Category.css';

const CategoryItem = ({ name, subCategories }) => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpand = () => {
		if (subCategories.length > 0) {
			setExpanded(!expanded);
		}
	};

	return (
		<div className={`category ${expanded ? 'open' : ''}`}>
			<div className="category-header" onClick={toggleExpand}>
				<span className="category-name">
					<a href="#" className="category-name-link">
						{name}
					</a>
				</span>
				{subCategories.length > 0 && <span>{expanded ? '-' : '+'}</span>}
			</div>
			<div className="sub-category-list">
				{subCategories.map((subCategory, index) => (
					<SubCategory key={index} name={subCategory} />
				))}
			</div>
		</div>
	);
};

export const Category = () => {
	const categories = [
		{
			name: 'Hiking',
			subCategories: ['Seiberton', 'Shiraleah', 'Waterfly'],
		},
		{
			name: 'Camping',
			subCategories: ['Inditradition', 'Standley', 'Sunding'],
		},
		{
			name: 'Trekking',
			subCategories: [],
		},
		{
			name: 'Climbing',
			subCategories: ['Skillofun', 'Bestofferbuy', 'Squirrel'],
		},
		{
			name: 'Mountaineering',
			subCategories: [],
		},
	];
	return (
		<div>
			{categories.map((category, index) => (
				<CategoryItem
					className="category-item"
					key={index}
					name={category.name}
					subCategories={category.subCategories}
				/>
			))}
		</div>
	);
};

export default Category;
