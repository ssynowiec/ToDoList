import styles from './styles/Button.module.css';

export const Button = ({ onClick, children }) => {
	const deleteAllTasks = () => {
		onClick();
	};

	return (
		<button className={styles.btn} onClick={deleteAllTasks}>
			{children}
		</button>
	);
};
