import { useContext } from 'react';
import styles from './Task.module.css';
import { TaskStatus } from '../../App';

export const Task = ({ task }) => {
	const ctx = useContext(TaskStatus);

	const deleteTask = () => {
		ctx.delete(task.id);
	};

	const markAsDone = () => {
		ctx.change(task.id);
	};

	return (
		<li
			key={task.id}
			className={`${styles.task} ${
				task.completed ? styles.completed : ''
			}`}
			onClick={markAsDone}>
			{/* <input type='checkbox' /> */}
			{task.name}
			<button
				onClick={deleteTask}
				className={styles.deleteBtn}
				title='Delete Task'>
				X
			</button>
		</li>
	);
};
