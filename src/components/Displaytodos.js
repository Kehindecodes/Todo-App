import React, { useContext, useState, useEffect } from 'react';
import {
	CancelButton,
	TodoCheckBox,
	ListContainer,
	ListItem,
	TabsWrapper,
} from './styles';
import iconcross from '../asserts/images/iconcross.svg';
import iconcheck from '../asserts/images/iconcheck.svg';
import TodosContext from '../context/todos/todosContext';
import Buttons from './Buttons';
const Displaytodos = () => {
	const todosContext = useContext(TodosContext);

	const { todos, removeTodo, markAsCompleted } = todosContext;
	const [todoItem, setTodoItem] = useState(todos);

	console.log(todos);
	// show the total of uncompeleted task
	const total = todos.filter((todo) => todo.completed === false);
	// show both completed and active tasks
	const showAllTask = () => {
		const allTask = todos;
		console.log(allTask);
		setTodoItem(allTask);
	};
	// show only active task
	const showActive = () => {
		const active = todoItem.filter((todo) => todo.completed === false);
		setTodoItem(active);
		console.log(active);
	};
	// show only completed task
	const completedTask = () => {
		const completedTasks = todoItem.filter((todo) => todo.completed === true);
		console.log(completedTasks);
		setTodoItem(completedTasks);
	};
	console.log(total.length);

	return (
		<>
			<ListContainer>
				{todoItem.map((todo) => (
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
				<TabsWrapper>
					<p>{total.length} items lefts </p>
					<Buttons
						showAll={showAllTask}
						activeTodo={showActive}
						completedTodo={completedTask}
					/>
				</TabsWrapper>
			</ListContainer>
		</>
	);
};

export default Displaytodos;
