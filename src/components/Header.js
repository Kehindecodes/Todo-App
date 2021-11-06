import React from 'react';
import { HeaderContainer } from './styles';
import TodoInput from './TodoInput';
import Toggle from './Toggler';
const Header = ({ theme, themeToggler }) => {
	return (
		<HeaderContainer>
			<div>
				<h1>TODO</h1>
				<Toggle theme={theme} toggleTheme={themeToggler} />
			</div>
			<TodoInput />
		</HeaderContainer>
	);
};

export default Header;
