import React, { useReducer } from 'react';
import TodosContext from './todosContext';
import TodoReducer from './todoReducer';
import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETED } from '../types';

const TodosState = (props) => {
	const initialState = {
		todos: [],
	};
	const [state, dispatch] = useReducer(TodoReducer, initialState);
	// add new todo
	const addTodo = (value) => {
		dispatch({
			type: ADD_TODO,
			payload: value,
		});
	};
	const removeTodo = (todoId) => {
		dispatch({
			type: REMOVE_TODO,
			payload: todoId,
		});
	};
	const markAsCompleted = (todoId) => {
		dispatch({
			type: TOGGLE_COMPLETED,
			payload: todoId,
		});
	};

	return (
		<TodosContext.Provider
			value={{ todos: state.todos, removeTodo, addTodo, markAsCompleted }}>
			{props.children}
		</TodosContext.Provider>
	);
};

export default TodosState;
