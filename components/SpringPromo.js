import styles from "./SpringPromo.module.css";

export default function SpringPromo() {
  return (
    <section className={styles.springPromo}>
      <div className="container">
        <div className={styles.banner}>
          <img
            src="/spring-special-banner.png"
            alt="Spring Special - $6995 RUUD"
            className={styles.bannerImage}
          />
        </div>
      </div>
    </section>
  );
}