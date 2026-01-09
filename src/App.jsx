import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Experience from './components/Experience';
import Challenge from './components/Challenge';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Connect GSAP ScrollTrigger to Lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
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
