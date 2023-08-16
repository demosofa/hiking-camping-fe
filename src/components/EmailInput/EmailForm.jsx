import { SendOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import './EmailForm.css';

export const EmailForm = () => {
	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
			<form onSubmit={handleFormSubmit} className="email-form">
				<Input placeholder="Email Address" className="email-input" />
				<Button htmlType="submit" className="email-submit">
					<SendOutlined />
				</Button>
			</form>
		</div>
	);
};
