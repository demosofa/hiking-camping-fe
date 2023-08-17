import './Parallax.css';
export const Parallax = ({ pageTitle }) => {
	return (
		<div className="parallax-position">
			<div className="parallax-relative">
				<section>
					<div className="p-one parallax-inner">
						<h4>Home › {pageTitle}</h4>
						<h2>{pageTitle}</h2>
					</div>
				</section>
			</div>
		</div>
	);
};
