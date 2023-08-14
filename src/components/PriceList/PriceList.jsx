const PriceList = () => {
	const prices = [
		{ name: '$100-$200', link: '#' },
		{ name: '$200-$300', link: '#' },
		{ name: '$300-$400', link: '#' },
		{ name: '$500-$700', link: '#' },
		{ name: '$700-$1000', link: '#' },
	];

	return (
		<div style={{ display: 'flex', flexDirection: 'column', padding: '15px' }}>
			{prices.map((price, index) => (
				<a
					key={index}
					href={price.link}
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
					{price.name}
				</a>
			))}
		</div>
	);
};

export default PriceList;
