import styles from "./OurOffice.module.css";
import { ourOffice } from "@/app/data/siteContent";

const icons = {
    Location: (
        <svg viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
            <circle cx="12" cy="9" r="2.5" />
        </svg>
    ),
    "Session Format": (
        <svg viewBox="0 0 24 24">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
    ),
    "Your Privacy Matters": (
        <svg viewBox="0 0 24 24">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    ),
};

const OurOffice = () => {
    return (
        <section id="office" className={styles.office}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    {/* <span className={styles.label}>Our Office</span> */}
                    <h1>Our Office</h1>

                    <h2 className={styles.title}>{ourOffice.title}</h2>
                    <p className={styles.description}>{ourOffice.description}</p>
                </div>

                {/* Image Gallery */}
                <div className={styles.gallery}>
                    {ourOffice.images.map((image, index) => (
                        <div
                            key={index}
                            className={
                                index === 0 ? styles.galleryMain : styles.gallerySecondary
                            }
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className={styles.galleryImage}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* Detail Cards */}
                <div className={styles.details}>
                    {ourOffice.details.map((detail, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardIcon}>
                                {icons[detail.label as keyof typeof icons]}
                            </div>
                            <h3 className={styles.cardLabel}>{detail.label}</h3>
                            <p className={styles.cardValue}>{detail.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurOffice;
