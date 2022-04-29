import Task from './Task';
import styles from './TasksList.module.css';

const TasksList = ({ tasks, onDeleteTask, onMarkAsDone }) => {
	return (
		<section className={styles.tasksList}>
			<ul className={styles.taskListContainer}>
				{tasks.map(task => {
					return (
						<Task
							task={task}
							key={task.id}
							onDeleteTask={onDeleteTask}
							onMarkAsDone={onMarkAsDone}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default TasksList;
