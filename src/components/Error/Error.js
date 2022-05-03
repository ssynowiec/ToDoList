import errorImg from '../../img/error.png';
import styles from './Error.module.css';

export const Error = ({ children }) => {
	return (
		<div className={styles.error}>
			<img src={errorImg} alt='' height='50px' />
			<p>{children}</p>
		</div>
	);
};
