import styles from './TasksList.module.css';

const TasksList = ({ tasks }) => {
	return (
		<section className={styles.tasksList}>
			<ul className={styles.taskListContainer}>
				{tasks.map(task => {
					return (
						<li key={task.id} className={styles.task}>
							{task.name}
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default TasksList;
