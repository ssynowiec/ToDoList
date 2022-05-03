import { Logo } from './Logo';

import styles from './styles/Header.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo height='150vh' />
			<h1 className={styles.title}>What do you want to do today? 💪🚗</h1>
			<p className={styles.subtite}>
				gym, work, travel, and maybe something else?
			</p>
		</header>
	);
};
