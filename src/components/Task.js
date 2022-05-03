import styles from './styles/Task.module.css';

export const Task = ({ task, onDeleteTask, onChangeTaskStatus }) => {
	const deleteTask = () => {
		onDeleteTask(task.id);
	};

	const markAsDone = () => {
		onChangeTaskStatus(task.id);
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
