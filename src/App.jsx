import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

export default function App() {
  useScrollReveal();
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let raf;
    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.1;
      curY += (mouseY - curY) * 0.1;
      cursor.style.left = curX + 'px';
      cursor.style.top = curY + 'px';
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" ref={cursorRef} aria-hidden="true"></div>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
