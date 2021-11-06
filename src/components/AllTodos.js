import React, { useContext } from 'react';
import TodosContext from '../context/todos/todosContext';
import { CancelButton, TodoCheckBox, ListItem, Message, Check } from './styles';
import iconcross from '../asserts/images/iconcross.svg';
import iconcheck from '../asserts/images/iconcheck.svg';
const AllTodos = () => {
	const todosContext = useContext(TodosContext);
	const { todos, removeTodo, markAsCompleted } = todosContext;

	return (
		<>
			{todos.length === 0 ? (
				<Message>
					<h3>You have nothing todo</h3>
				</Message>
			) : (
				todos.map((todo) => (
					<ListItem
						key={todo.id}
						onClick={() => markAsCompleted(todo.id)}
						completed={todo.completed}>
						<TodoCheckBox completed={todo.completed}>
							<Check src={iconcheck} completed={todo.completed} alt='check' />
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
				))
			)}
		</>
	);
};

export default AllTodos;
