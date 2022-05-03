import { Task } from './Task';
import styles from './styles/TasksList.module.css';

export const TasksList = ({ tasks, onDeleteTask, onChangeTaskStatus }) => {
	return (
		<section className={styles.tasksList}>
			<ul className={styles.taskListContainer}>
				{tasks.map(task => {
					return (
						<Task
							task={task}
							key={task.id}
							onDeleteTask={onDeleteTask}
							onChangeTaskStatus={onChangeTaskStatus}
						/>
					);
				})}
			</ul>
		</section>
	);
};
