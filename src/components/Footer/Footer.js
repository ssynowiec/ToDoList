import styles from './Footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.footerText}>
				&copy; 2022 All rights reserved.
			</p>
		</footer>
	);
};
