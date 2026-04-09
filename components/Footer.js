import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "How It Works", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Financing", href: "#financing" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  "AC Installation",
  "AC Repair & Service",
  "Heating Systems",
  "Preventive Maintenance",
  "Commercial HVAC",
  "Emergency Service",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <a href="#" className={styles.logo}>
                <img
                  src="/logo.png"
                  alt="University AC Logo"
                  className={styles.logoImage}
                />
              </a>
              <p className={styles.tagline}>
                San Angelo&apos;s most trusted heating and cooling company. Serving West Texas families and businesses for over 21 years.
              </p>
              <div className={styles.certBadges}>
                <span className={styles.cert}>⭐ Energy Star Certified</span>
                <span className={styles.cert}>🔒 Licensed & Insured</span>
              </div>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Quick Links</h4>
              <ul className={styles.list}>
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className={styles.link}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Our Services</h4>
              <ul className={styles.list}>
                {services.map((s) => (
                  <li key={s}>
                    <a href="#services" className={styles.link}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <div className={styles.contactInfo}>
                <a href="tel:+13254500481" className={styles.contactItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  (325) 450-0481
                </a>
                <a href="mailto:info@universityac.com" className={styles.contactItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  univac@suddenlink.net
                </a>
                <div className={styles.contactItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  San Angelo, TX &amp; Surrounding Areas
                </div>
                <div className={styles.contactItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Mon–Fri: 7am–7pm · Sat: 8am–5pm<br/>Emergency: 24/7
                </div>
              </div>

              <a href="#contact" className={`btn btn-primary ${styles.footerCta}`}>
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copy}>
              © {new Date().getFullYear()} University Heating &amp; Cooling. All rights reserved. | San Angelo, TX
            </p>
            <div className={styles.bottomLinks}>
              <a href="#" className={styles.bottomLink}>Privacy Policy</a>
              <span>·</span>
              <a href="#" className={styles.bottomLink}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
