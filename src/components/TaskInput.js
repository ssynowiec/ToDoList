import { useState } from 'react';
import Error from './Error';
import styles from './TaskInput.module.css';

const TaskInput = ({ onNewTaskAdded }) => {
	const [taskName, setTaskName] = useState('');
	const [error, setError] = useState('');

	const addNewTask = e => {
		e.preventDefault();
		const taskId = Math.floor(Math.random() * (100 - 1)) + 1;
		if (taskName === '') {
			setError('Ooops, Please enter task name');
			return;
		}
		const newTask = {
			id: taskId,
			name: taskName,
			completed: false,
		};
		onNewTaskAdded(newTask);
		setTaskName('');
		setError('');
	};

	return (
		<>
			<form className={styles.form} onSubmit={addNewTask}>
				<label htmlFor='taskName' className={styles.label}>
					Add 🆕 task
				</label>
				<div>
					<input
						value={taskName}
						type='text'
						placeholder='Add 🆕 task'
						id='taskName'
						className={styles.input}
						onChange={e => setTaskName(e.target.value)}
					/>
					<button type='submit' className={styles.submit}>
						+
					</button>
				</div>

				{error !== '' && <Error>{error}</Error>}
			</form>
		</>
	);
};

export default TaskInput;
