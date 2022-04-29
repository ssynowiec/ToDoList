import styles from './Task.module.css';

const Task = ({ task, onDeleteTask, onMarkAsDone }) => {
	const deleteTask = () => {
		onDeleteTask(task.id);
	};

	const markAsDone = () => {
		onMarkAsDone(task.id);
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

export default Task;
