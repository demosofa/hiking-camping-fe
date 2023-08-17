import { Avatar, List } from 'antd';

export const Contact = () => {
	const data = [
		{
			title: 'Ant Design Title 1',
			description: 'Description for Ant Design Title 1',
		},
		{
			title: 'Ant Design Title 2',
			description: 'Description for Ant Design Title 2',
		},
		{
			title: 'Ant Design Title 3',
			description: 'Description for Ant Design Title 3',
		},
	];

	return (
		<List
			itemLayout="horizontal"
			dataSource={data}
			renderItem={(item, index) => (
				<List.Item style={{ display: 'inline-block', width: '33.3%' }}>
					<List.Item.Meta
						avatar={
							<Avatar
								src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
							/>
						}
						title={<a href="https://ant.design">{item.title}</a>}
						description={item.description}
					/>
				</List.Item>
			)}
		/>
	);
};
