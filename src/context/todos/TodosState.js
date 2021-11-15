import React, { useReducer, useEffect } from 'react';
import TodosContext from './todosContext';
import reducer from './todoReducer';
import {
	ADD_TODO,
	REMOVE_TODO,
	TOGGLE_COMPLETED,
	CLEAR_COMPLETED,
} from '../types';

const TodosState = (props) => {
	const initialState = {
		todos: [],
	};
	const getStorageValue = (defaultValue) => {
		// getting stored value
		const saved = window.localStorage.getItem('task');
		const initial = JSON.parse(saved);
		return initial || defaultValue;
	};

	const [state, dispatch] = useReducer(reducer, initialState, getStorageValue);

	useEffect(() => {
		// storing input name
		window.localStorage.setItem('task', JSON.stringify(state));
	}, [state]);

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
	const clearCompletedTask = () => {
		dispatch({
			type: CLEAR_COMPLETED,
		});
	};

	return (
		<TodosContext.Provider
			value={{
				todos: state.todos,
				removeTodo,
				addTodo,
				markAsCompleted,
				clearCompletedTask,
			}}>
			{props.children}
		</TodosContext.Provider>
	);
};

export default TodosState;
