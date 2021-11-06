import React, { useContext } from 'react';
import TodosContext from '../context/todos/todosContext';
import { CancelButton, TodoCheckBox, ListItem, Check } from './styles';
import iconcross from '../asserts/images/iconcross.svg';
import iconcheck from '../asserts/images/iconcheck.svg';
const ActiveTodos = () => {
	const todosContext = useContext(TodosContext);
	const { todos, removeTodo, markAsCompleted } = todosContext;
	return (
		<>
			{todos
				.filter((todo) => todo.completed === false)
				.map((todo) => (
					<ListItem
						key={todo.id}
						onClick={() => markAsCompleted(todo.id)}
						completed={todo.completed}>
						<TodoCheckBox completed={todo.completed}>
							<Check completed={todo.completed} src={iconcheck} alt='check' />
						</TodoCheckBox>
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
		</>
	);
};

export default ActiveTodos;
