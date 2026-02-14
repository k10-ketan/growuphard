import styles from './Support.module.css';
import { supportSection } from '@/app/data/siteContent';

export default function Support() {
  return (
    <section className={styles.support} data-theme="light">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              {supportSection.title}
            </h2>
            <p className={styles.intro}>
              {supportSection.intro}
            </p>
            <ul className={styles.list}>
              {supportSection.challenges.map((challenge, index) => (
                <li key={index} className={styles.listItem}>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imageInner}>
              <img
                src={supportSection.image}
                alt={supportSection.imageAlt}
                className={styles.image}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
