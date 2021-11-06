import React, { useContext } from 'react';
import TodosContext from '../context/todos/todosContext';
import { CancelButton, TodoCheckBox, ListItem, Message, Check } from './styles';
import iconcross from '../asserts/images/iconcross.svg';
import iconcheck from '../asserts/images/iconcheck.svg';
const CompletedTodos = ({}) => {
	const todosContext = useContext(TodosContext);
	const { todos, removeTodo, markAsCompleted } = todosContext;
	const completedTodos = todos.filter((todo) => todo.completed === true);
	return (
		<>
			{completedTodos.length === 0 ? (
				<Message>
					<h3>No Completed Task Yet</h3>
				</Message>
			) : (
				completedTodos.map((todo) =>
					todo.length === 0 ? (
						console.log('No completed task yet')
					) : (
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
					),
				)
			)}
		</>
	);
};

export default CompletedTodos;
