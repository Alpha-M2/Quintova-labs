import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.grid}>

        {/* Left Column - 60% */}
        <div className={styles.leftCol}>
          <div className={styles.content}>
            <h1 className={styles.headline}>The engineering partner for Tier-1 Web3 protocols.</h1>
            <p className={styles.subheadline}>
              Behind every dominant decentralized application is architecture built for absolute precision and stealth elegance.
            </p>
            <p className={styles.bodyCopy}>
              You are building the future of finance; you need a team that operates at the absolute frontier of what&apos;s possible. Quintova Labs is the silent force chosen by industry leaders to construct their most critical, high-stakes infrastructure. Build with the elites.
            </p>

            <div className={styles.ctaWrapper}>
              <button className={styles.primaryCta}>
                [ Enter the Laboratory ]
              </button>
              <a href="#" className={styles.secondaryLink}>
                View Showcase <span className={styles.arrow}>→</span>
              </a>
            </div>
            <p className={styles.microcopy}>Currently onboarding select visionary founders for Q3.</p>
          </div>
        </div>

        {/* Right Column - 40% */}
        <div className={styles.rightCol}>
          <div className={styles.visualContainer}>
            {/* CSS Rendered Abstract Geometry */}
            <div className={styles.hypercube}>
              <div className={`${styles.cube} ${styles.cubeInner}`}></div>
              <div className={`${styles.cube} ${styles.cubeOuter}`}></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
