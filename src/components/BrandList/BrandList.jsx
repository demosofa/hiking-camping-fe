const BrandList = () => {
	const brands = [
		{ name: 'Werty', link: '#' },
		{ name: 'Nemu', link: '#' },
		{ name: 'Nike', link: '#' },
	];

	return (
		<div style={{ display: 'flex', flexDirection: 'column', padding: '15px' }}>
			{brands.map((brand, index) => (
				<a
					key={index}
					href={brand.link}
					style={{
						color: 'black',
						fontSize: '14px',
						marginBottom: '8px',
						transition: 'color 0.3s',
						textDecoration: 'none',
					}}
					onMouseEnter={(e) => (e.target.style.color = '#f9c971')}
					onMouseLeave={(e) => (e.target.style.color = 'black')}
				>
					{brand.name}
				</a>
			))}
		</div>
	);
};

export default BrandList;
