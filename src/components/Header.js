import React from 'react';
import iconsun from '../asserts/images/iconsun.svg';
import Displaytodos from './Displaytodos';
import { HeaderContainer } from './styles';
import TodoInput from './TodoInput';
const Header = () => {
	return (
		<HeaderContainer>
			<div>
				<h1>TODO</h1>
				<div className='icon'>
					<img src={iconsun} alt='icon' />
				</div>
			</div>
			<TodoInput />
			<Displaytodos />
		</HeaderContainer>
	);
};

export default Header;
