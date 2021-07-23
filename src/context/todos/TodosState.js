import React, { Children, useReducer } from 'react';
import TodosContext from './todosContext';
import TodoReducer from './todoReducer';
import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETED } from '../types';

const TodosState = (props) => {
	const intialState = {
		todos: [],
	};
	const [state, dispatch] = useReducer(TodoReducer, intialState);
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
	const toggleCompleted = (todoId) => {
		dispatch({
			type: TOGGLE_COMPLETED,
			payload: todoId,
		});
	};
	return (
		<TodosContext.Provider
			value={{ todo: state.todo, removeTodo, addTodo, toggleCompleted }}>
			{props.children}
		</TodosContext.Provider>
	);
};

export default TodosState;
