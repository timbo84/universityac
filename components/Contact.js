"use client";
import { useState } from "react";
import styles from "./Contact.module.css";

const services = [
  "AC Repair",
  "AC Installation",
  "Heating Repair",
  "Heating Installation",
  "Preventive Maintenance",
  "Emergency Service",
  "Commercial HVAC",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", service: "", message: "", urgency: "standard",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className={`section section-alt ${styles.contact}`} id="contact">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.info}>
            <span className="section-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Get in Touch
            </span>
            <h2 className="section-title">Ready to Get<br />Comfortable?</h2>
            <p className="section-subtitle">
              Fill out the form and we&apos;ll get back to you within 1 hour during business hours. For emergencies, call us directly 24/7.
            </p>

            <div className={styles.contactCards}>
              <a href="tel:+13254500481" className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.contactCardLabel}>Call Us 24/7</span>
                  <span className={styles.contactCardValue}>(325) 450-0481</span>
                </div>
                <svg className={styles.contactCardArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <div className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.contactCardLabel}>Email Us</span>
                  <span className={styles.contactCardValue}>univac@suddenlink.net</span>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.contactCardLabel}>Business Hours</span>
                  <span className={styles.contactCardValue}>Mon–Fri: 7am–7pm</span>
                  <span className={styles.contactCardSub}>Sat: 8am–5pm · Emergency: 24/7</span>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.contactCardLabel}>Service Area</span>
                  <span className={styles.contactCardValue}>San Angelo, TX</span>
                  <span className={styles.contactCardSub}>& Surrounding Areas</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3>Message Sent!</h3>
                <p>We&apos;ll get back to you within 1 hour during business hours. For emergencies, call us at <a href="tel:+13254500481">(325) 450-0481</a>.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <h3 className={styles.formTitle}>Get Your Free Quote</h3>
                <p className={styles.formSubtitle}>No obligation. We respond within 1 hour.</p>

                <div className={styles.urgencyToggle}>
                  <button
                    type="button"
                    className={`${styles.urgencyBtn} ${formData.urgency === "standard" ? styles.urgencyActive : ""}`}
                    onClick={() => setFormData(p => ({ ...p, urgency: "standard" }))}
                  >
                    Standard Request
                  </button>
                  <button
                    type="button"
                    className={`${styles.urgencyBtn} ${formData.urgency === "emergency" ? styles.urgencyActiveRed : ""}`}
                    onClick={() => setFormData(p => ({ ...p, urgency: "emergency" }))}
                  >
                    🚨 Emergency
                  </button>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(325)-555-1234"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="service">Service Needed *</label>
                  <select id="service" name="service" required value={formData.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Tell Us More</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Describe what's going on with your system..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className={`btn btn-primary btn-lg ${styles.submit}`} disabled={loading}>
                  {loading ? (
                    <>
                      <span className={styles.spinner} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send My Request
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className={styles.disclaimer}>
                  By submitting, you agree to be contacted by University Heating &amp; Cooling. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
