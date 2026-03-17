import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Maria G.",
    location: "San Angelo, TX",
    rating: 5,
    text: "My AC went out on the hottest day of the year. University Heating & Cooling sent someone out within 2 hours and had it fixed before dinnertime. I cannot thank them enough. These guys are the real deal!",
    service: "Emergency AC Repair",
  },
  {
    name: "Robert T.",
    location: "San Angelo, TX",
    rating: 5,
    text: "I've been using University AC for 8 years now and they've never let me down. Fair prices, honest work, and they always treat me like family. Wouldn't call anyone else.",
    service: "Annual Maintenance",
  },
  {
    name: "Sandra L.",
    location: "San Angelo, TX",
    rating: 5,
    text: "We needed a full system replacement and I was dreading the cost. They worked with us on financing and installed a brand new Energy Star unit. Our electric bill dropped by $80 a month!",
    service: "Full AC Replacement",
  },
  {
    name: "James W.",
    location: "San Angelo, TX",
    rating: 5,
    text: "The technician was on time, professional, and explained everything clearly. Got my furnace running perfectly before the cold snap hit. Highly recommend for any heating needs.",
    service: "Furnace Repair",
  },
  {
    name: "Patricia M.",
    location: "San Angelo, TX",
    rating: 5,
    text: "Called late on a Friday night for an emergency. They were there within an hour! The tech was polite and had us cool again before midnight. Worth every penny.",
    service: "After-Hours Emergency",
  },
  {
    name: "David C.",
    location: "San Angelo, TX",
    rating: 5,
    text: "Used them for our small business. They were quick, efficient, and the pricing was very fair. Will definitely be using University AC for all our commercial HVAC needs going forward.",
    service: "Commercial HVAC",
  },
];

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f97316">
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className={`section section-alt ${styles.testimonials}`} id="testimonials">
      <div className="container">
        <div className="section-header center">
          <span className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
            Customer Reviews
          </span>
          <h2 className="section-title">Don&apos;t Just Take Our Word For It</h2>
          <p className="section-subtitle">
            Real stories from real San Angelo customers. Over 5,000 families and businesses have trusted us with their comfort.
          </p>
        </div>

        <div className={styles.overallRating}>
          <div className={styles.ratingNum}>4.9</div>
          <div className={styles.ratingDetails}>
            <Stars count={5} />
            <span>Based on 400+ reviews</span>
          </div>
          <div className={styles.ratingBadges}>
            <span className={styles.badge}>Google Verified</span>
            <span className={styles.badge}>BBB Accredited</span>
          </div>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.location}>{t.location}</div>
                </div>
                <Stars count={t.rating} />
              </div>
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.serviceTag}>{t.service}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
