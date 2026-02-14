import styles from './Footer.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} data-theme="white">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <address className={styles.address}>
              <p>123 Example Road</p>
              <p>Minneapolis, MN 55401</p>
            </address>
            <div className={styles.contactInfo}>
              <a href="mailto:email@example.com" className={styles.link}>
                email@example.com
              </a>
              <a href="tel:+15555555555" className={styles.link}>
                (555) 555-5555
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Hours</h3>
            <div className={styles.hours}>
              <p>Monday – Friday</p>
              <p>10:00am – 6:00pm</p>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Navigation</h3>
            <nav className={styles.nav}>
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Lilac Template. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
