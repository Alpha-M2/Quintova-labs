import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContent}`}>
                <h2 className={styles.headline}>Ready to build the unseen?</h2>
                <p className={styles.subheadline}>Currently accepting select partnerships for Q3.</p>

                <button className={styles.ctaButton}>[ Contact the Lab ]</button>

                <div className={styles.links}>
                    <a href="#">[ X/Twitter ]</a>
                    <span className={styles.separator}>—</span>
                    <a href="#">[ GitHub ]</a>
                    <span className={styles.separator}>—</span>
                    <a href="#">[ Discord ]</a>
                </div>
            </div>
        </footer>
    );
}
