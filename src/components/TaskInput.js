import { useState } from 'react';
import { Error } from './Error';
import styles from './styles/TaskInput.module.css';

export const TaskInput = ({ onNewTaskAdded }) => {
	const [taskName, setTaskName] = useState('');
	const [error, setError] = useState('');

	const addNewTask = e => {
		e.preventDefault();
		const taskId = Math.floor(Math.random() * (10000 - 1)) + 1;
		if (taskName.trim() === '') {
			setError('Ooops, Please enter task name');
			return;
		}
		const newTask = {
			id: taskId,
			name: taskName.trim(),
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
						autoFocus={true}
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
