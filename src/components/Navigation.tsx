import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.logo}>QUINT<span className={styles.accent}>OVA</span></div>

                <div className={styles.links}>
                    <a href="#" className={styles.link}>Infrastructure</a>
                    <a href="#" className={styles.link}>Showcase</a>
                    <a href="#" className={styles.link}>About</a>
                </div>

                <button className={styles.primaryCta}>[ Connect ]</button>
            </div>
        </nav>
    );
}
