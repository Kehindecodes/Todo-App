import {
	ADD_TODO,
	REMOVE_TODO,
	TOGGLE_COMPLETED,
	ACTIVE_TODO,
	COMPLETED_TODO,
	SHOW_ALL,
} from '../types';

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
		// case ACTIVE_TODO: {
		// 	// const total = ;
		// 	// console.log(total);
		// 	return {
		// 		...state,
		// 		todos: state.todos.filter((todo) => todo.completed === false),
		// 	};
		// }
		// case COMPLETED_TODO: {
		// 	// const completedTasks = ,
		// 	// );

		// 	return state.todos.filter((todo) => todo.completed === true);
		// }

		// case SHOW_ALL: {
		// 	return {
		// 		...state,
		// 		todos: state.todos,
		// 	};
		// }
		default:
			return state;
	}
};
