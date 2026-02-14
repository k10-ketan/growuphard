import styles from "./About.module.css";
import Link from "next/link";
import { aboutSection } from "@/app/data/siteContent";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Content */}
          <div className={styles.content}>
            <h2 className={styles.title}>{aboutSection.title}</h2>
            {aboutSection.paragraphs.map((paragraph, index) => (
              <p key={index} className={styles.text}>
                {paragraph}
              </p>
            ))}
            <Link href={aboutSection.ctaLink} className={styles.btn}>
              {aboutSection.ctaText}
            </Link>
          </div>

          {/* Image */}
          <div className={styles.imageWrapper}>
            <img
              src={aboutSection.image}
              alt={aboutSection.imageAlt}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
