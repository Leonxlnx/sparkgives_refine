import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Experience from './components/Experience';
import Challenge from './components/Challenge';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add scrolled class to header
  useEffect(() => {
    const header = document.querySelector('.header');
    if (header) {
      if (scrolled) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }, [scrolled]);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Experience />
        <Challenge />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
