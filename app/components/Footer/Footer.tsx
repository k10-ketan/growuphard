import styles from './Footer.module.css';
import { contact, navigation, siteInfo } from '@/app/data/siteContent';

export default function Footer() {
  return (
    <footer className={styles.footer} data-theme="white">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <address className={styles.address}>
              <p>{contact.address.street}</p>
              <p>{contact.address.city}, {contact.address.state} {contact.address.zip}</p>
            </address>
            <div className={styles.contactInfo}>
              <a href={`mailto:${contact.email}`} className={styles.link}>
                {contact.email}
              </a>
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`} className={styles.link}>
                {contact.phone}
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Hours</h3>
            <div className={styles.hours}>
              <p>{contact.hours.days}</p>
              <p>{contact.hours.time}</p>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Navigation</h3>
            <nav className={styles.nav}>
              {navigation.footerLinks.map((link) => (
                <a key={link.label} href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {siteInfo.fullTitle}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
