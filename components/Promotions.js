import styles from "./Promotions.module.css";

export default function Promotions() {
  return (
    <section className={styles.promotions}>
      <div className="container">
        <a href="#contact" className={styles.bannerLink}>
          <div className={styles.banner}>
            <img
              src="/financing-banner.png"
              alt="In-House Financing - Quick and Easy"
              className={styles.promoImage}
            />
          </div>
        </a>
      </div>
    </section>
  );
}
