import { List } from 'antd';
import {
	PhoneFilled,
	MailFilled,
	QuestionCircleFilled,
} from '@ant-design/icons';

export const Contact = () => {
	const data = [
		{
			title: 'DO YOU HAVE A QUESTION',
			description: '500-130-120',
			icon: <PhoneFilled />,
		},
		{
			title: 'OFFER QUESTION',
			description: 'contact@somedomain.com',
			icon: <MailFilled />,
		},
		{
			title: 'SUPPORT QUESTION',
			description: 'support@somedomain.com',
			icon: <QuestionCircleFilled />,
		},
	];

	return (
		<List
			itemLayout="horizontal"
			dataSource={data}
			renderItem={(item) => (
				<List.Item style={{ display: 'inline-block', width: '33.3%' }}>
					<List.Item.Meta
						avatar={item.icon}
						title={<a href="https://ant.design">{item.title}</a>}
						description={item.description}
					/>
				</List.Item>
			)}
		/>
	);
};
