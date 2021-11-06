import React from 'react';
import { ThemeButton } from './styles';
import iconsun from '../asserts/images/iconsun.svg';
import iconmoon from '../asserts/images/iconmoon.svg';
const Toggle = ({ theme, toggleTheme }) => {
	return (
		<ThemeButton onClick={toggleTheme}>
			{theme === 'light' ? (
				<img src={iconsun} alt='sun' />
			) : (
				<img src={iconmoon} alt='moon' />
			)}
		</ThemeButton>
	);
};

export default Toggle;
