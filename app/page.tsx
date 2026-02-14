import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Specialties from './components/Specialties/Specialties';
import Support from './components/Support/Support';
import AboutMe from './components/AboutMe/AboutMe';
import FAQ from './components/FAQ/FAQ';
import Background from './components/Background/Background';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Support />
        <AboutMe />
        <FAQ />
        <Background />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
