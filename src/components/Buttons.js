import React, { useState, useEffect } from 'react';
import { Button, ButtonWrapper } from './styles';

const Buttons = ({ showAll, activeTodo, completedTodo, activeTab }) => {
	// const [active, setActive] = useState(true);
	// useEffect(() => {
	// 	setActive(true);
	// }, []);
	// const todosContext = useContext(TodosContext);
	// const {  } = todosContext;
	return (
		<ButtonWrapper>
			<Button
				onClick={() => showAll()}
				// active={activeTab === 'all' ? active : setActive(false)}
				value='all'>
				All
			</Button>
			<Button
				onClick={() => activeTodo()}
				value='active'
				// active={activeTab === 'active' ? active : setActive(false)}
			>
				Active
			</Button>
			<Button
				onClick={() => completedTodo()}
				value='completed'
				// active={activeTab === 'completed' ? active : setActive(false)}
			>
				completed
			</Button>
		</ButtonWrapper>
	);
};

export default Buttons;
