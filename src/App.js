import { createContext, useContext, useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { TaskInput } from './components/TaskInput';
import { TasksList } from './components/TasksList';
import { Footer } from './components/Footer/Footer';
import { Button } from './components/Button/Button';

const tasksList = [
	{ id: 0, name: 'gym', completed: false },
	{ id: 1, name: 'work', completed: true },
	{ id: 2, name: 'travel', completed: false },
];

export const TaskStatus = createContext({
	change: () => {},
	delete: () => {},
	add: () => {},
});

export const App = () => {
	const [userTasksList, setuserTasksList] = useState(tasksList);

	const addNewTask = newTask => {
		setuserTasksList(prevTasksList => [...prevTasksList, newTask]);
	};

	const deleteTask = taskId => {
		setuserTasksList(prevTasksList =>
			prevTasksList.filter(task => task.id !== taskId),
		);
	};

	const changeTaskStatus = taskId => {
		setuserTasksList(prevTasksList => {
			const updatedTasksList = prevTasksList.map(task =>
				task.id === taskId
					? { ...task, completed: !task.completed }
					: task,
			);
			return updatedTasksList;
		});
	};

	const deleteAllTasks = () => {
		setuserTasksList([]);
	};

	const ctx = useContext(TaskStatus);
	ctx.change = changeTaskStatus;
	ctx.delete = deleteTask;
	ctx.add = addNewTask;

	return (
		<>
			<Header />
			<main className={styles.content}>
				<TaskInput />
				{userTasksList.length === 0 && (
					<h2 className={styles.noTasks}>
						No tasks 🤷‍♂️, add here anything
					</h2>
				)}
				<TasksList tasks={userTasksList} />
				{userTasksList.length > 0 && (
					<Button onClick={deleteAllTasks}>Clear All</Button>
				)}
			</main>
			<Footer />
		</>
	);
};
