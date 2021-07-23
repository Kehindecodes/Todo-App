import './app.css';
import Header from './components/Header';
import TodosState from './context/todos/TodosState';
function App() {
	return (
		<TodosState>
			<div className='App'>
				<Header />
			</div>
		</TodosState>
	);
}

export default App;
