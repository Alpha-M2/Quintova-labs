import styles from './ValueProposition.module.css';

export default function ValueProposition() {
    return (
        <section className="section container">
            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>⚡</div>
                    <h3 className={styles.header}>Uncompromising Speed</h3>
                    <p className={styles.body}>
                        High-frequency, sub-second execution built on Rust and optimized Solana RPCs. We don't just participate in the network; we front-run the standard.
                    </p>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconWrapper}>🎯</div>
                    <h3 className={styles.header}>Absolute Precision</h3>
                    <p className={styles.body}>
                        Algorithmic exactness. From liquidation alerting to complex MEV extraction, our logic is defensively engineered for zero-margin-of-error environments.
                    </p>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconWrapper}>✧</div>
                    <h3 className={styles.header}>Stealth Elegance</h3>
                    <p className={styles.body}>
                        Complex backend architecture wrapped in frictionless, glassmorphic interfaces. We make deep-tech feel effortless.
                    </p>
                </div>
            </div>
        </section>
    );
}
