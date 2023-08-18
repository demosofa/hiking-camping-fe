import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '@services';
import { useState } from 'react';
import { Parallax } from 'components/Parallax/Parallax';
import './register.css';
import { useAuth } from '@hooks';

export function Register() {
	const [form] = Form.useForm();
	const navigate = useNavigate();

	const { setAuth } = useAuth();
	const [errors, setErrors] = useState([]);

	const onFinish = async (values) => {
		const { data } = await register(values);
		setAuth(data);
		navigate('/');
	};

	const onFailed = ({ errorFields }) => {
		setErrors(
			errorFields.reduce((prev, curr) => {
				return prev.concat(curr.errors);
			}, [])
		);
	};

	return (
		<div className="shop">
			<div className="shop-layout">
				<Parallax pageTitle="CREATE ACCOUNT" />
				<div className="register-container">
					<Form
						className="register-form"
						size="large"
						form={form}
						onFinish={onFinish}
						onFinishFailed={onFailed}
					>
						{errors.length ? (
							<div className="error-show">
								<ul>
									{errors.map((error) => (
										<li key={error}>{error}</li>
									))}
								</ul>
							</div>
						) : null}

						<Form.Item name="firstName">
							<Input placeholder="First Name" required />
						</Form.Item>

						<Form.Item name="lastName">
							<Input placeholder="Last Name" required />
						</Form.Item>

						<Form.Item
							name="email"
							rules={[
								{ required: true },
								{
									type: 'email',
									warningOnly: true,
								},
							]}
						>
							<Input type="email" placeholder="Email" />
						</Form.Item>

						<Form.Item
							name="password"
							rules={[
								{ required: true },
								{
									type: 'string',
									warningOnly: true,
								},
							]}
						>
							<Input.Password placeholder="Password" />
						</Form.Item>

						<Form.Item>
							<Button block className="register-btn" htmlType="submit">
								Create
							</Button>
						</Form.Item>
					</Form>

					<Link to={'/'}>Return to Store</Link>
				</div>
			</div>
		</div>
	);
}
