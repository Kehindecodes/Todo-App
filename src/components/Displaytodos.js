import React, { useContext, useState, useEffect } from 'react';
import { ListContainer, TabsWrapper, Button } from './styles';
import TodosContext from '../context/todos/todosContext';
import Buttons from './Buttons';
import AllTodos from './AllTodos';
import ActiveTodos from './ActiveTodos';
import CompletedTodos from './CompletedTodo';
const Displaytodos = () => {
	const todosContext = useContext(TodosContext);

	const { todos, clearCompletedTask } = todosContext;
	// const [todoItem, setTodoItem] = useState(todos);
	const [filteredTodo, setFilteredTodo] = useState(todos);
	const [activeTab, setActiveTab] = useState('all');

	console.log(filteredTodo);
	console.log(todos);
	// console.log(todoItem);
	// show the total of uncompeleted task
	useEffect(() => {
		setFilteredTodo(todos);
	}, []);

	const total = todos.filter((todo) => todo.completed === false);
	// show both completed and active tasks
	const showAllTask = () => {
		setActiveTab('all');
	};
	// show only active task
	const showActive = () => {
		setActiveTab('active');
	};
	// show only completed task
	const completedTask = () => {
		setActiveTab('completed');
	};
	// const clearCompletedTask = () => {
	// 	setDoneTask([]);
	// };
	return (
		<>
			<ListContainer>
				{activeTab === 'all' ? <AllTodos /> : ''}
				{activeTab === 'active' ? <ActiveTodos /> : ''}
				{activeTab === 'completed' ? <CompletedTodos /> : ''}
				<TabsWrapper>
					<p>{total.length} items lefts </p>
					<Buttons
						showAll={showAllTask}
						activeTodo={showActive}
						completedTodo={completedTask}
						activeTab={activeTab}
					/>
					<Button onClick={() => clearCompletedTask()}>Clear Completed</Button>
				</TabsWrapper>
			</ListContainer>
		</>
	);
};

export default Displaytodos;
