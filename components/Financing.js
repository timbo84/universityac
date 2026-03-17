import styles from "./Financing.module.css";

const perks = [
  "No credit? No problem — we work with all credit types",
  "In-house financing with flexible monthly payments",
  "Apply in minutes, get approved same day",
  "0% interest options available for qualified applicants",
];

export default function Financing() {
  return (
    <section className={styles.financing} id="financing">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.glow} />
          <div className={styles.content}>
            <span className={styles.label}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
              </svg>
              Easy Financing Available
            </span>
            <h2 className={styles.title}>
              Don&apos;t Let Budget Stop You From Staying Comfortable
            </h2>
            <p className={styles.desc}>
              A new HVAC system is an investment — and we make it easy to afford. Our in-house financing means you get the system you need today, with payments that work for you.
            </p>
            <ul className={styles.perks}>
              {perks.map((p) => (
                <li key={p}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
            <a href="#contact" className={`btn btn-primary btn-lg ${styles.cta}`}>
              Apply for Financing
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div className={styles.visual}>
            <div className={styles.visualCard}>
              <div className={styles.cardChip} />
              <div className={styles.cardBrand}>University AC</div>
              <div className={styles.cardLine}>Financing Plan</div>
              <div className={styles.cardAmount}>$0 Down</div>
              <div className={styles.cardSub}>Low Monthly Payments</div>
            </div>
            <div className={styles.floatItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Approved!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
