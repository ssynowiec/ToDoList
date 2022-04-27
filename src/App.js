import { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TasksList from './components/TasksList';

const tasksList = [
	{ id: 0, name: 'gym', completed: false },
	{ id: 1, name: 'work', completed: true },
	{ id: 2, name: 'travel', completed: false },
];

function App() {
	const [userTasksList, setuserTasksList] = useState(tasksList);

	const addNewTask = newTask => {
		setuserTasksList(prevTasksList => [...prevTasksList, newTask]);
	};

	return (
		<>
			<Header />
			<main className={styles.content}>
				<TaskInput onNewTaskAdded={addNewTask} />
				<TasksList tasks={userTasksList} />
			</main>
		</>
	);
}

export default App;
