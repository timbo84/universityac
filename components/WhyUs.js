import styles from "./WhyUs.module.css";

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    title: "21+ Years of Experience",
    desc: "Over two decades serving San Angelo families and businesses. We've seen it all — and we know how to fix it.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Licensed & Fully Insured",
    desc: "Every technician is fully licensed and insured. You can trust us in your home with complete peace of mind.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "24/7 Emergency Service",
    desc: "HVAC emergencies don't keep business hours. We're available around the clock to get your system back up fast.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: "Flexible Financing",
    desc: "No credit, bad credit, no problem. We offer in-house financing options so you can get comfortable now and pay over time.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: "Upfront, Honest Pricing",
    desc: "We give you a clear quote before any work begins. No surprises, no hidden fees — just fair pricing every time.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: "Energy Star Products",
    desc: "We install certified Energy Star equipment that cuts your energy bills while keeping your home comfortable.",
  },
];

export default function WhyUs() {
  return (
    <section className={`section ${styles.whyUs}`} id="why-us">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left}>
            <span className="section-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
              Why Choose Us
            </span>
            <h2 className="section-title">
              San Angelo&apos;s Most Trusted HVAC Partner
            </h2>
            <p className="section-subtitle">
              We&apos;re not just another HVAC company. We&apos;re your neighbors — and we treat every job like it&apos;s our own home.
            </p>

            <div className={styles.bigStat}>
              <div className={styles.bigStatItem}>
                <span className={styles.bigStatNum}>21+</span>
                <span className={styles.bigStatLabel}>Years Serving<br/>San Angelo</span>
              </div>
              <div className={styles.bigStatDivider} />
              <div className={styles.bigStatItem}>
                <span className={styles.bigStatNum}>5K+</span>
                <span className={styles.bigStatLabel}>Satisfied<br/>Customers</span>
              </div>
              <div className={styles.bigStatDivider} />
              <div className={styles.bigStatItem}>
                <span className={styles.bigStatNum}>4.9★</span>
                <span className={styles.bigStatLabel}>Average<br/>Rating</span>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary btn-lg">
              Schedule Your Service
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className={styles.right}>
            {reasons.map((r, i) => (
              <div key={i} className={styles.item}>
                <div className={styles.itemIcon}>{r.icon}</div>
                <div className={styles.itemContent}>
                  <h3 className={styles.itemTitle}>{r.title}</h3>
                  <p className={styles.itemDesc}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
