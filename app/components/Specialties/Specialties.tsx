import styles from "./Specialties.module.css";

/* ============================================
   SPECIALTIES DATA
   Edit the items below to customize your specialties.
   Each item has: id, title, description, and image URL.
   ============================================ */
const specialties = [
  {
    id: 1,
    title: "Self-Esteem",
    description:
      "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80",
  },
  {
    id: 2,
    title: "Relationships",
    description:
      "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80",
  },
  {
    id: 3,
    title: "Burnout",
    description:
      "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
  },
];

const Specialties = () => {
  return (
    <section className={styles.specialties}>
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
