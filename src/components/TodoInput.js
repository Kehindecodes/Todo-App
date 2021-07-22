import React from 'react';
import { Input, Form, CheckBox, FormContainer } from './styles';
const TodoInput = ({ handlekeyDown }) => {
	const [todos, setTodo] = React.useState('');

	return (
		<FormContainer>
			<Form>
				<CheckBox></CheckBox>
				<Input
					type='text'
					placeholder='Create new todo...'
					onChange={(e) => {
						setTodo(e.target.value);
					}}
					onKeyDown={handlekeyDown}
				/>
			</Form>
		</FormContainer>
	);
};

export default TodoInput;
