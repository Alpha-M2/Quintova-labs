import styles from './ProjectShowcase.module.css';

export default function ProjectShowcase() {
    return (
        <section className={`section ${styles.showcaseSection}`}>
            <div className="container">
                <h2 className={styles.sectionTitle}>The Arcade</h2>

                <div className={styles.bentoGrid}>
                    {/* Large Card 2x2 */}
                    <div className={`${styles.bentoItem} ${styles.largeCard}`}>
                        <div className={styles.contentOverlay}>
                            <h3 className={styles.cardTitle}>Liquidation Engine</h3>
                            <p className={styles.cardDesc}>Advanced Aave V3 Liquidation Alerter. Monitoring underwater positions with zero latency.</p>
                            <button className={styles.cardCta}>View Case Study</button>
                        </div>
                        <div className={styles.mockupVisual}>
                            {/* placeholder for visual */}
                            <div className={styles.terminalSim}>
                                <span className={styles.logLine}>[RPC] Connected to Aave V3 Pool...</span>
                                <span className={styles.logLine}>[SCAN] Analyzing collateral factors...</span>
                            </div>
                        </div>
                    </div>

                    {/* Rectangle Card 2x1 */}
                    <div className={`${styles.bentoItem} ${styles.rectCard}`}>
                        <div className={styles.contentOverlay}>
                            <h3 className={styles.cardTitle}>Solana Speed</h3>
                            <p className={styles.cardDesc}>Ultra-Low Latency Solana Sniping Bot.</p>
                        </div>
                    </div>

                    {/* Square Card 1x1 */}
                    <div className={`${styles.bentoItem} ${styles.squareCard}`}>
                        <div className={styles.contentOverlay}>
                            <h3 className={styles.cardTitle}>Data Aggregation</h3>
                            <p className={styles.cardDesc}>Crypto News & Sentiment ML Aggregator.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
