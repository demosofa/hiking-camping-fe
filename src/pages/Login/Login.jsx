import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '@services';
import { useState } from 'react';
import { Parallax } from 'components/Parallax/Parallax';
import { useAuth } from '@hooks';
import './login.css';

export function Login() {
	const [form] = Form.useForm();
	const navigate = useNavigate();

	const setAuth = useAuth();
	const [errors, setErrors] = useState([]);

	const onFinish = async (values) => {
		const { data } = await login(values);
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
				<Parallax pageTitle="ACCOUNT" />
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

						<Link className="forgot-pwd">Forgot your password?</Link>

						<Form.Item>
							<Button block className="register-btn" htmlType="submit">
								Sign in
							</Button>
						</Form.Item>
					</Form>

					<Link to={'/'}>Return to Store</Link>
				</div>
			</div>
		</div>
	);
}
