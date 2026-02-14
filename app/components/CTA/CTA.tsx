import styles from './CTA.module.css';
import { ctaSection } from '@/app/data/siteContent';

export default function CTA() {
  return (
    <section id="contact" className={styles.cta} data-theme="dark">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{ctaSection.title}</h2>
          <p className={styles.description}>
            {ctaSection.description}
          </p>
          <a href={ctaSection.buttonLink} className={styles.button}>
            {ctaSection.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
