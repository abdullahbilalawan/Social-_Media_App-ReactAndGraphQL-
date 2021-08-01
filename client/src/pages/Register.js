import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { useMutations } from '@apollo/react-hooks';

const REGISTER_USER = gql`
	mutation {
		register(
			
				$username: String!
				$password: String!
				$confirmPassword: String!
				$email: String!
			
		) {

			register(
				registerInput: {
					username: $username,
					email: $email,
					password: $password,
					confirmPassword: $confirmPassword,

				}
			
			) {
				id email username createdAt token
			}
		}
	}
`;

export default function Register() {
	const [values, setValues] = useState({
		username: '',
		password: '',
		email: '',
		confirmPassword: '',
	});
	const onChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};


	
	const [addUser, {loading}] = useMutation(REGISTER_USER, {
		update(proxy, result) {
			console.log(result);
		},
		variables: values
	})
	const onSubmit = (event) => {
		event.preventDefault();
		addUser();
	}
	
	
	return (
		<div>
			<Form onSubmit={onSubmit} noValidate>
				<h1>Register Page</h1>
				<Form.Input
					label="username"
					placeholder="username.."
					name="username"
					value={values.username}
					onChange={onChange}
				></Form.Input>

				<Form.Input
					label="email"
					placeholder="email.."
					name="email"
					value={values.email}
					onChange={onChange}
				></Form.Input>

				<Form.Input
					label="password"
					placeholder="password.."
					name="password"
					value={values.password}
					onChange={onChange}
				></Form.Input>

				<Form.Input
					label="confirmPassword"
					placeholder="confirmPassword.."
					name="confirmPassword"
					value={values.confirmPassword}
					onChange={onChange}
				></Form.Input>
				<Button type="submit" primary>
					Register
				</Button>
			</Form>
		</div>
	);
}
