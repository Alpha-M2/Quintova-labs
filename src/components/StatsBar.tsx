import styles from './StatsBar.module.css';

export default function StatsBar() {
    return (
        <div className={styles.statsBar}>
            <div className={styles.container}>
                <div className={styles.statItem}>
                    <div className={styles.number}>99.9%</div>
                    <div className={styles.label}>Uptime SLA</div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.statItem}>
                    <div className={styles.number}>&lt;1ms</div>
                    <div className={styles.label}>Execution Latency</div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.statItem}>
                    <div className={styles.number}>$100M+</div>
                    <div className={styles.label}>Volume Tracked</div>
                </div>
            </div>
        </div>
    );
}
