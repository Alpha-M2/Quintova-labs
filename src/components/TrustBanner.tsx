import styles from './TrustBanner.module.css';

export default function TrustBanner() {
    return (
        <section className={styles.bannerSection}>
            <div className={styles.container}>
                <p className={styles.label}>Architecting infrastructure for the decentralized frontier.</p>

                <div className={styles.logosTrack}>
                    {/* We will use text placeholders for logos temporarily. In production these would be SVG images. */}
                    <div className={styles.logo}>ETHEREUM</div>
                    <div className={styles.logo}>SOLANA</div>
                    <div className={styles.logo}>AAVE</div>
                    <div className={styles.logo}>NEXT.JS</div>
                    <div className={styles.logo}>PYTHON</div>
                    <div className={styles.logo}>RUST</div>
                </div>
            </div>
        </section>
    );
}
