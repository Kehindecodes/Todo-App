import React, { useContext, useState } from 'react';
import { CancelButton, TodoCheckBox, ListContainer, ListItem } from './styles';
import iconcross from '../asserts/images/iconcross.svg';
import iconcheck from '../asserts/images/iconcheck.svg';
import TodosContext from '../context/todos/todosContext';
const Displaytodos = () => {
	const todosContext = useContext(TodosContext);

	const { todos, removeTodo, markAsCompleted } = todosContext;

	return (
		<>
			<ListContainer>
				{todos.map((todo) => (
					<ListItem
						key={todo.id}
						onClick={() => markAsCompleted(todo.id)}
						completed={todo.completed}>
						<TodoCheckBox completed={todo.completed}>
							<img src={iconcheck} alt='check' />
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
			</ListContainer>
		</>
	);
};

export default Displaytodos;
