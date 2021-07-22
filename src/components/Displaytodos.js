import React, { useState } from 'react';
import { CheckBox, ListContainer, ListItem } from './styles';
import TodoInput from './TodoInput';

const Displaytodos = () => {
	const [todos, setTodos] = useState([]);
	const handlekeyDown = (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			let input = e.target.value;
			setTodos(todos.concat(input));
			console.log(todos);
		}
	};
	return (
		<>
			<TodoInput handlekeyDown={handlekeyDown} />
			<ListContainer>
				{React.Children.toArray(
					todos.map((todo) => (
						<ListItem>
							<CheckBox></CheckBox>
							<p>{todo}</p>
						</ListItem>
					)),
				)}
			</ListContainer>
		</>
	);
};

export default Displaytodos;
