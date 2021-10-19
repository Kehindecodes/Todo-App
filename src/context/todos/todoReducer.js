import {
	ADD_TODO,
	REMOVE_TODO,
	TOGGLE_COMPLETED,
	CLEAR_COMPLETED,
} from '../types';

const reducer = (state, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				todos: [
					...state.todos,
					{
						todo: action.payload,
						id: new Date().valueOf(),
						completed: false,
					},
				],
			};
		case REMOVE_TODO: {
			const filteredTodos = state.todos.filter(
				(todo) => todo.id !== action.payload,
			);
			return {
				todos: filteredTodos,
			};
		}
		case TOGGLE_COMPLETED: {
			const completedList = state.todos.map((todo) =>
				todo.id === action.payload
					? { ...todo, completed: !todo.completed }
					: todo,
			);
			return {
				...state,
				todos: completedList,
			};
		}
		case CLEAR_COMPLETED: {
			const clearedTodos = state.todos.filter(
				(todo) => todo.completed === false,
			);

			return {
				...state,
				todos: clearedTodos,
			};
		}
		default:
			return state;
	}
};

export default reducer;
