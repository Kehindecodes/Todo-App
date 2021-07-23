import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETED } from '../types';

export default (state, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				todos: [
					...state.todos,
					{
						todo: action.payload,
						id: new Date().valueOf(),
						completed: false,
						active: true,
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
				todos: completedList,
			};
		}

		default:
			return state;
	}
};
