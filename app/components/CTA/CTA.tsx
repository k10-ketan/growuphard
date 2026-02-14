import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta} data-theme="dark">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Get started today.</h2>
          <p className={styles.description}>
            Taking the first step can feel overwhelming, but it&apos;s also 
            incredibly brave. Whether you&apos;re ready for a free consultation 
            or just want more information, I&apos;m here to support you.
          </p>
          <a href="#contact" className={styles.button}>
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
