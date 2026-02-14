import styles from "./Specialties.module.css";
import { specialties } from "@/app/data/siteContent";

const Specialties = () => {
  return (
    <section id="services" className={styles.specialties}>
      <div className={styles.container}>
        <p className={styles.sectionTitle}>My Specialties</p>

        <div className={styles.grid}>
          {specialties.map((specialty) => (
            <div key={specialty.id} className={styles.card}>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{specialty.title}</h2>
                <p className={styles.cardDescription}>{specialty.description}</p>
              </div>
              <div className={styles.cardImageWrapper}>
                <div className={styles.cardImageInner}>
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className={styles.cardImage}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
