import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <section className={styles.aboutMe} data-theme="white">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imagesGroup}>
            <div className={styles.archImageWrapper}>
              <div className={styles.archImageInner}>
                {/* About Me - Main Portrait Image - Replace with your own */}
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                  alt="Therapist portrait"
                  className={styles.archImage}
                  loading="lazy"
                />
              </div>
            </div>
            <div className={styles.circleImageWrapper}>
              <div className={styles.circleImageInner}>
                {/* About Me - Decorative Circle Image - Replace with your own */}
                <img
                  src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&q=80"
                  alt="Abstract texture"
                  className={styles.circleImage}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>Hi, I&apos;m Lilac</h2>
            <div className={styles.text}>
              <p>
                Welcome. I&apos;m so glad you&apos;re taking this step for yourself. I understand 
                that reaching out is both brave and challenging, and I&apos;m here to help you 
                every step of the way.
              </p>
              <p>
                As a therapist, my approach is rooted in curiosity, empathy, and respect. 
                Together, we&apos;ll work through old patterns and narratives that no longer 
                serve you, helping you reconnect with your authentic self. We&apos;ll find ways 
                for you to show up for yourself and engage fully in your life.
              </p>
              <p>
                I believe that all of you is welcome here—even the messy parts. I&apos;m here 
                to listen, not to fix you. My goal is to support you in creating a life 
                that feels true to who you are.
              </p>
              <p>
                Let&apos;s begin this journey together and see what unfolds.
              </p>
            </div>
            <a href="#contact" className={styles.button}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
