'use client';

import { useState } from 'react';
import styles from './Background.module.css';
import { background } from '@/app/data/siteContent';

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
              <img
                src={background.image}
                alt={background.imageAlt}
                className={styles.image}
                loading="lazy"
              />
            </div>
          </div>
          <div className={styles.contentColumn}>
            <h2 className={styles.title}>{background.title}</h2>
            <div className={styles.accordion}>
              {background.items.map((item, index) => (
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
