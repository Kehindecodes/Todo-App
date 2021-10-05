import React, { useState } from 'react';
import { Button, ButtonWrapper } from './styles';
import TodosContext from '../context/todos/todosContext';
const Buttons = ({ showAll, activeTodo, completedTodo, activeTab }) => {
	// const [activeTab, setActiveTab] = useState('all');
	// const todosContext = useContext(TodosContext);
	// const {  } = todosContext;
	return (
		<ButtonWrapper>
			<Button
				onClick={() => showAll()}
				active={activeTab === 'all'}
				value='all'>
				All
			</Button>
			<Button
				onClick={() => activeTodo()}
				value='active'
				active={activeTab === 'active'}>
				Active
			</Button>
			<Button
				onClick={() => completedTodo()}
				value='completed'
				active={activeTab === 'completed'}>
				completed
			</Button>
		</ButtonWrapper>
	);
};

export default Buttons;
