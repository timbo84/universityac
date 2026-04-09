import styles from "./Services.module.css";
import SpringPromo from "./SpringPromo";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: "AC Installation",
    desc: "Expert installation of new air conditioning systems. We carry Energy Star certified units from top brands to fit any budget and home size.",
    features: ["Energy Star Products", "All Major Brands", "Free Load Calculation", "Warranty Included"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: "AC Repair & Service",
    desc: "Fast, reliable repairs for all makes and models. Our certified technicians diagnose the problem right the first time and get you cool again — fast.",
    features: ["Same-Day Service", "All Makes & Models", "Upfront Pricing", "24/7 Emergency"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/>
      </svg>
    ),
    title: "Heating Systems",
    desc: "Keep warm when temperatures drop. We install, repair, and maintain all types of furnaces, heat pumps, and heating systems for residential and commercial properties.",
    features: ["Furnace Repair", "Heat Pump Service", "Annual Tune-Ups", "Carbon Monoxide Check"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Preventive Maintenance",
    desc: "Extend the life of your HVAC system and prevent costly breakdowns. Our maintenance plans keep your equipment running at peak efficiency year-round.",
    features: ["Spring/Fall Tune-Up", "Filter Replacement", "System Inspection", "Priority Scheduling"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Commercial HVAC",
    desc: "Full-service commercial HVAC solutions for businesses of all sizes. We understand the unique demands of commercial systems and deliver reliable results.",
    features: ["Office Buildings", "Retail Spaces", "Restaurants", "Industrial"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "Residential Service",
    desc: "Your home deserves the best. We bring the same professional service whether it's a repair, replacement, or routine maintenance for your family home.",
    features: ["All Home Sizes", "Indoor Air Quality", "Duct Cleaning", "Smart Thermostats"],
  },
];

export default function Services() {
  return (
    <section className={`section section-alt ${styles.services}`} id="services">
      <div className="container">
        <div className="section-header center">
          <span className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
            Our Services
          </span>
          <h2 className="section-title">Everything Your Home Needs to Stay Comfortable</h2>
          <p className="section-subtitle">From emergency repairs to full system replacements — we do it all with the expertise and care you deserve.</p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardIcon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <ul className={styles.features}>
                {service.features.map((f) => (
                  <li key={f}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={styles.cardLink}>
                Get a Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
      <SpringPromo />
    </section>
  );
}
