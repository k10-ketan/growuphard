import styles from "./About.module.css";
import Link from "next/link";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Content */}
          <div className={styles.content}>
            <h2 className={styles.title}>Live a fulfilling life.</h2>
            <p className={styles.text}>
              Life can be challenging—especially when you&apos;re trying to balance
              your personal and professional life.
            </p>
            <p className={styles.text}>
              It&apos;s easy to feel like you&apos;re alone in facing these challenges,
              but I want you to know that I&apos;m here to help.
            </p>
            <Link href="/contact" className={styles.btn}>
              Get in touch
            </Link>
          </div>

          {/* Image - Replace src with your own image URL */}
          <div className={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80"
              alt="Woman among flowers"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
