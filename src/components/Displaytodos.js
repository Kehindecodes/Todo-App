import React, { useContext } from 'react';
import { CheckBox, ListContainer, ListItem } from './styles';
import TodosContext from '../context/todos/todosContext';
const Displaytodos = () => {
	const todosContext = useContext(TodosContext);
	const { todos, removeTodos, toggleCompleted } = todosContext;
	return (
		<>
			<ListContainer>
				{todos.map((todo) => (
					<ListItem key={todo.id}>
						<CheckBox></CheckBox>
						<p>{todo.todo}</p>
					</ListItem>
				))}
			</ListContainer>
		</>
	);
};

export default Displaytodos;
