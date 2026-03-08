import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundAnimation}>
        {/* Placeholder for generative math animation (Canvas/WebGL) */}
        <div className={styles.glowOrb}></div>
        <div className={styles.glowOrb2}></div>
      </div>
      
      <div className={styles.content}>
        <h1 className={styles.headline}>The Edge in Web3.</h1>
        <p className={styles.subheadline}>
          Engineering the unseen forces of decentralized finance. <br/>
          Precision, security, and elegance crafted by Quintova Labs.
        </p>
        
        <div className={styles.ctaWrapper}>
          <button className={styles.primaryCta}>
            [ Initiate ]
          </button>
        </div>
      </div>
    </section>
  );
}
