import React, { useContext, useState } from 'react';
import { Input, Form, CheckBox, FormContainer } from './styles';
import TodosContext from '../context/todos/todosContext';
const TodoInput = () => {
	const todosContext = useContext(TodosContext);
	const { addTodo, todos } = todosContext;
	const [inputValue, setInputValue] = useState('');
	const handlekeyDown = (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			addTodo(inputValue);
			setInputValue('');
			console.log(todos);
		}
	};

	return (
		<FormContainer>
			<Form>
				<CheckBox></CheckBox>
				<Input
					type='text'
					placeholder='Create new todo...'
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
					onKeyDown={handlekeyDown}
				/>
			</Form>
		</FormContainer>
	);
};

export default TodoInput;
