import React, { useContext } from 'react';
import { CancelButton, CheckBox, ListContainer, ListItem } from './styles';
import iconcross from '../asserts/images/iconcross.svg';
import TodosContext from '../context/todos/todosContext';
const Displaytodos = () => {
	const todosContext = useContext(TodosContext);
	const { todos, removeTodo, toggleCompleted } = todosContext;
	return (
		<>
			<ListContainer>
				{todos.map((todo) => (
					<ListItem key={todo.id}>
						<CheckBox></CheckBox>
						<p>{todo.todo}</p>
						<span>
							<CancelButton
								src={iconcross}
								alt='cross'
								onClick={() => removeTodo(todo.id)}
							/>
						</span>
					</ListItem>
				))}
			</ListContainer>
		</>
	);
};

export default Displaytodos;
