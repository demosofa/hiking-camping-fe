import './SubCategory.css';

const SubCategory = ({ name }) => {
	return (
		<div className="sub-category">
			<br />
			<div className="category-header">
				<span className="category-name">
					<a href="#" className="category-name-link">
						{name}
					</a>
				</span>
			</div>
		</div>
	);
};

export default SubCategory;
