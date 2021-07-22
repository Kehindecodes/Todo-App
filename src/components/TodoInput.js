import React from 'react';
import { Input, Form, CheckBox } from './styles';
const TodoInput = () => {
	return (
		<div>
			<Form>
				<CheckBox></CheckBox>
				<Input type='text' placeholder='Create new todo...' />
			</Form>
		</div>
	);
};

export default TodoInput;
