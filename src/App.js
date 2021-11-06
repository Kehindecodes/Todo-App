import React, { useState } from 'react';
import './app.css';
import Displaytodos from './components/Displaytodos';
import Header from './components/Header';
import { AppWrapper } from '../src/components/styles';
import { useDarkMode } from './components/useDarkmode';
import TodosState from './context/todos/TodosState';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyle';
import { lightTheme, darkTheme } from './components/Themes';

function App() {
	// const [theme, setTheme] = useState('light');
	const [theme, themeToggler] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;
	// const themeToggler = () => {
	// 	theme === 'light' ? setTheme('dark') : setTheme('light');
	// };
	return (
		<ThemeProvider theme={themeMode}>
			<>
				<GlobalStyles />
				<TodosState>
					<AppWrapper>
						<Header theme={theme} themeToggler={themeToggler} />
						<Displaytodos />
						{/* <footer>
					<p>drag the to reorder the task</p>
				</footer> */}
					</AppWrapper>
				</TodosState>
			</>
		</ThemeProvider>
	);
}

export default App;
