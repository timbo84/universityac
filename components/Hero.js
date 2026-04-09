import styles from "./Hero.module.css";

const stats = [
  { value: "21+", label: "Years in Business" },
  { value: "5,000+", label: "Happy Customers" },
  { value: "24/7", label: "Emergency Service" },
  { value: "100%", label: "Licensed & Insured" },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg}>
        <div className={styles.gradient} />
        <div className={styles.grid} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
            </svg>
            San Angelo&apos;s #1 Rated HVAC Company
          </div>

          <h1 className={styles.headline}>
            Stay Cool.<br />
            Stay Comfortable.<br />
            <span>Stay Worry-Free.</span>
          </h1>

          <p className={styles.subtext}>
            Professional heating &amp; cooling services San Angelo has trusted for over 21 years.
            From emergency repairs to full system installations — we&apos;ve got you covered.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={`btn btn-primary btn-lg ${styles.ctaPrimary}`}>
              Get a Free Quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="tel:+13254500481" className={`btn btn-secondary btn-lg ${styles.ctaPhone}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call Now
            </a>
          </div>

          <div className={styles.trust}>
            <span className={styles.trustItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Energy Star Certified
            </span>
            <span className={styles.trustItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              In-House Financing
            </span>
            <span className={styles.trustItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              All Credit Accepted
            </span>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.card}>
            <div className={styles.cardGlow} />
            <div className={styles.thermostat}>
              <div className={styles.thermostatRing}>
                <div className={styles.thermostatCenter}>
                  <span className={styles.thermostatTemp}>72°</span>
                  <span className={styles.thermostatLabel}>Perfect Comfort</span>
                </div>
              </div>
              <div className={styles.thermostatBars}>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`${styles.bar} ${i < 6 ? styles.barActive : ""}`}
                    style={{ height: `${20 + i * 6}px` }}
                  />
                ))}
              </div>
            </div>
            <div className={styles.cardStatus}>
              <span className={styles.statusDot} />
              System Running Efficiently
            </div>
          </div>

          <div className={styles.floatBadge1}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#f97316">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
            </svg>
            <div>
              <strong>4.9/5.0</strong>
              <span>Customer Rating</span>
            </div>
          </div>

          <div className={styles.floatBadge2}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <div>
              <strong>Same-Day</strong>
              <span>Service Available</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
