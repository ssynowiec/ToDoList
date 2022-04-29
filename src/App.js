import { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TasksList from './components/TasksList';
import Footer from './components/Footer';

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

	const deleteTask = taskId => {
		setuserTasksList(prevTasksList =>
			prevTasksList.filter(task => task.id !== taskId),
		);
	};

	const markTaskAsDone = taskId => {
		setuserTasksList(prevTasksList => {
			const updatedTasksList = prevTasksList.map(task =>
				task.id === taskId
					? { ...task, completed: !task.completed }
					: task,
			);
			return updatedTasksList;
		});
	};

	return (
		<>
			<Header />
			<main className={styles.content}>
				<TaskInput onNewTaskAdded={addNewTask} />
				<TasksList
					tasks={userTasksList}
					onDeleteTask={deleteTask}
					onMarkAsDone={markTaskAsDone}
				/>
			</main>
			<Footer />
		</>
	);
}

export default App;
