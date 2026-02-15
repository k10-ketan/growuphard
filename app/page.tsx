import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Specialties from './components/Specialties/Specialties';
import Support from './components/Support/Support';
import AboutMe from './components/AboutMe/AboutMe';
import FAQ from './components/FAQ/FAQ';
import Background from './components/Background/Background';
import OurOffice from './components/OurOffice/OurOffice';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import styles from './page.module.css';

/* Reusable organic wave SVG */
function WaveDivider({ className }: { className: string }) {
  return (
    <div className={`${styles.waveDivider} ${className}`}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Animated floating gradient orbs */}
        <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb3}`} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb4}`} aria-hidden="true" />

        {/* Content layer — sits above orbs */}
        <div className={styles.contentLayer}>
          <Hero />
          <About />
          <Specialties />
          <WaveDivider className={styles.waveWarmToRose} />
          <Support />
          <WaveDivider className={styles.waveRoseToWarm} />
          <AboutMe />
          <FAQ />
          <Background />
          <OurOffice />
          <WaveDivider className={styles.waveWarmToDark} />
        </div>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
