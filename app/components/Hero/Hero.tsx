import styles from "./Hero.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Image with Arch Mask */}
          <div className={styles.imageWrapper}>
            <div className={styles.archMask}>
              {/* Hero Image - Replace with your own */}
              <img
                src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80"
                alt="Flowers in bloom"
                className={styles.heroImage}
              />
            </div>
          </div>

          {/* Content */}
          <div className={styles.content}>
            <h1 className={styles.title}>
              Live your life <br />
              in full bloom
            </h1>
            <p className={styles.subtitle}>
              Therapy for Adults in Minneapolis, MN.
            </p>
            <Link href="/contact" className={styles.btn}>
              Connect with me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
