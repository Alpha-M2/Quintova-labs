import styles from './EngineRoom.module.css';

export default function EngineRoom() {
    return (
        <section className={`section container ${styles.engineSection}`}>
            <h2 className={styles.title}>Powered By</h2>
            <div className={styles.techGrid}>
                <div className={styles.techItem}>Python</div>
                <div className={styles.techItem}>Next.js</div>
                <div className={styles.techItem}>FastAPI</div>
                <div className={styles.techItem}>PostgreSQL</div>
                <div className={styles.techItem}>Web3.py</div>
                <div className={styles.techItem}>Rust</div>
            </div>
        </section>
    );
}
