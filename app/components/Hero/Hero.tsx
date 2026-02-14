import styles from "./Hero.module.css";
import Link from "next/link";
import { heroContent } from "@/app/data/siteContent";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Image with Arch Mask */}
          <div className={styles.imageWrapper}>
            <div className={styles.archMask}>
              <img
                src={heroContent.image}
                alt={heroContent.imageAlt}
                className={styles.heroImage}
              />
            </div>
          </div>

          {/* Content */}
          <div className={styles.content}>
            <h1 className={styles.title}>
              {heroContent.title}
            </h1>
            <p className={styles.subtitle}>
              {heroContent.subtitle}
            </p>
            <Link href={heroContent.ctaLink} className={styles.btn}>
              {heroContent.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
