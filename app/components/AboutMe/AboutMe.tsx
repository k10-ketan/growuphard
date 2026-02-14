import styles from './AboutMe.module.css';
import { aboutMe } from '@/app/data/siteContent';

export default function AboutMe() {
  return (
    <section className={styles.aboutMe} data-theme="white">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imagesGroup}>
            <div className={styles.archImageWrapper}>
              <div className={styles.archImageInner}>
                <img
                  src={aboutMe.mainImage}
                  alt={aboutMe.mainImageAlt}
                  className={styles.archImage}
                  loading="lazy"
                />
              </div>
            </div>
            <div className={styles.circleImageWrapper}>
              <div className={styles.circleImageInner}>
                <img
                  src={aboutMe.decorImage}
                  alt={aboutMe.decorImageAlt}
                  className={styles.circleImage}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{aboutMe.title}</h2>
            <div className={styles.text}>
              {aboutMe.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <a href={aboutMe.ctaLink} className={styles.button}>
              {aboutMe.ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
