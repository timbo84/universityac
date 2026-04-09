import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={`section section-alt ${styles.testimonials}`} id="testimonials">
      <div className="container">
        <div className="section-header center">
          <span className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Facebook Activity
          </span>
          <h2 className="section-title">Follow Us on Facebook</h2>
          <p className="section-subtitle">
            Stay connected with University HVAC on Facebook for updates, local service news, and customer activity.
          </p>
        </div>

        <div className={styles.facebookCard}>
          <div className={styles.embedWrapper}>
            <iframe
              title="University HVAC Facebook Page"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Funiversityhvac%2F&tabs=timeline&width=500&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId="
              width="500"
              height="650"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className={styles.facebookInfo}>
            <p className={styles.facebookText}>
              See their latest updates, customer conversations, and service highlights on Facebook.
            </p>
            <a
              href="https://www.facebook.com/universityhvac/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Our Facebook Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

