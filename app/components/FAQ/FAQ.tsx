'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'Do you take insurance?',
    answer:
      'I am not in-network with any insurance companies at this time. However, I can provide a superbill (a detailed receipt) that you can submit to your insurance company for potential out-of-network reimbursement. I recommend contacting your insurance provider to understand your out-of-network benefits.',
  },
  {
    question: 'What are your rates?',
    answer:
      'My rate is $150 for a 50-minute individual therapy session. I offer a limited number of sliding scale spots for those who need them. Please reach out to discuss your situation.',
  },
  {
    question: 'Do you have openings?',
    answer:
      'I typically have a few openings each week. The best way to find out about current availability is to reach out via the contact form or give me a call. I\'ll do my best to find a time that works for both of us.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} data-theme="bright">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.titleColumn}>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            {/* FAQ Section Image - Replace with your own */}
            <div className={styles.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80"
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
