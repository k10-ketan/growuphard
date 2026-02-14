'use client';

import { useState } from 'react';
import styles from './Background.module.css';

const backgroundItems = [
  {
    title: 'Education',
    content:
      'Master of Arts in Counseling Psychology, University of Minnesota. Bachelor of Science in Psychology, University of Wisconsin-Madison.',
  },
  {
    title: 'Licensure',
    content:
      'Licensed Professional Clinical Counselor (LPCC) in the state of Minnesota. National Certified Counselor (NCC).',
  },
  {
    title: 'Certifications',
    content:
      'Certified EMDR Therapist. Trained in Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Internal Family Systems (IFS).',
  },
];

export default function Background() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.background} data-theme="light">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              {/* Background Section Image - Replace with your own */}
              <img
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80"
                alt="Professional background"
                className={styles.image}
                loading="lazy"
              />
            </div>
          </div>
          <div className={styles.contentColumn}>
            <h2 className={styles.title}>My Professional Background</h2>
            <div className={styles.accordion}>
              {backgroundItems.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.accordionItem} ${
                    openIndex === index ? styles.active : ''
                  }`}
                >
                  <button
                    className={styles.accordionHeader}
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className={styles.accordionTitle}>{item.title}</span>
                    <span className={styles.accordionIcon}>
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    className={styles.accordionContent}
                    style={{
                      maxHeight: openIndex === index ? '500px' : '0',
                    }}
                  >
                    <p className={styles.accordionText}>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
