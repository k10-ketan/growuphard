'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';
import { faqs } from '@/app/data/siteContent';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq} data-theme="bright">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.titleColumn}>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            <div className={styles.imageWrapper}>
              <img
                src="/grow/faq.webp"
                alt="Cozy therapy space"
                className={styles.image}
                loading="lazy"
              />
            </div>
          </div>
          <div className={styles.accordionColumn}>
            <div className={styles.accordion}>
              {faqs.map((faq, index) => (
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
                    <span className={styles.accordionQuestion}>
                      {faq.question}
                    </span>
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
                    <p className={styles.accordionAnswer}>{faq.answer}</p>
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
