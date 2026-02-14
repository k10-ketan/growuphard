import styles from './Support.module.css';

const challenges = [
  'Persistent sadness, anger, hopelessness, or emotional numbness',
  'Trouble focusing and a sense of mental clutter',
  'Difficulty in relationships',
  'Exhaustion and fatigue, even when seemingly rested',
  'Feeling overwhelmed by daily tasks',
  'Constantly stressed but unable to find relief',
  'Feeling stuck or unsure of where to start',
  'Carrying messages from childhood that no longer fit',
];

export default function Support() {
  return (
    <section className={styles.support} data-theme="light">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              You don&apos;t have to do this all alone.
            </h2>
            <p className={styles.intro}>
              If any of these symptoms describe you, it may be a sign that it&apos;s time to reach out for support:
            </p>
            <ul className={styles.list}>
              {challenges.map((challenge, index) => (
                <li key={index} className={styles.listItem}>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imageInner}>
              {/* Support Section Image - Replace with your own */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Dried flowers arrangement"
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
