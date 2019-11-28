import React, { FC, useState } from 'react';
import { Container, Form, Button, TextArea } from 'semantic-ui-react';
import axios from 'axios';

interface IData {
	first: string;
	last: string;
	email: string;
	item: string;
}

const onSubmit = (data: IData) => {
	const { first, last, email, item } = data;
	if (first && last && email && item) {
		axios({
			method: 'post',
			url: '/',
			data
		});
	}
};

const SecretSanta: FC = () => {
	const formData: IData = {
		first: '',
		last: '',
		email: '',
		item: ''
	};

	const [ form, setForm ] = useState(formData);

	return (
		<Container textAlign="justified">
			<Container textAlign="center">
				<h1>Secret Santa</h1>
			</Container>

			<Form>
				<Form.Field>
					<label>First Name</label>
					<input
						onChange={(e) => {
							setForm({ ...form, first: e.target.value });
						}}
						required
						placeholder="First Name"
					/>
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input
						onChange={(e) => {
							setForm({ ...form, last: e.target.value });
						}}
						required
						placeholder="Last Name"
					/>
				</Form.Field>
				<Form.Field>
					<label>Email</label>
					<input
						onChange={(e) => {
							setForm({ ...form, email: e.target.value });
						}}
						required
						placeholder="Email"
					/>
				</Form.Field>
				<Form.Field>
					<label>Gift</label>
					<textarea
						onChange={(e) => {
							setForm({ ...form, item: e.target.value });
						}}
						required
						placeholder="What you want for Christmas"
					/>
				</Form.Field>
				<Button
					onClick={() => {
						onSubmit(form);
					}}
				>
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default SecretSanta;
