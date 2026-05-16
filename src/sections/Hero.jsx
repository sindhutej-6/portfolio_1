import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const ROLES = ['Data Engineer', 'Full Stack Developer', 'Open Source Contributor'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const parallaxRef = useRef(null);
  const heroRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse parallax for orbs
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;

      const orbs = heroRef.current.querySelectorAll('.hero-orb');
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.5;
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleViewWork = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="hero" className="hero" ref={heroRef} aria-label="Introduction">
      {/* Parallax background layer */}
      <div className="hero-parallax" ref={parallaxRef} aria-hidden="true">
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>
        <div className="hero-orb orb-3"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge reveal">
          <span className="badge-dot" aria-hidden="true"></span>
          <span>Available for hire</span>
        </div>

        <h1 className="hero-title reveal stagger-1">
          <span className="hero-greeting">Hi, I'm</span>
          <br />
          <span className="hero-name">Kalisetti Tejaswi</span>
        </h1>

        <div className="hero-role reveal stagger-2" aria-live="polite" aria-atomic="true">
          <span className="role-text">{displayed}</span>
          <span className="cursor-blink" aria-hidden="true">|</span>
        </div>

        <p className="hero-description reveal stagger-3">
          I am a <em>Data Engineer and Full Stack Developer</em> passionate about building data pipelines, 
          intelligent systems, and scalable web applications. Currently a 4th-year B.Tech student exploring 
          the intersection of data and software engineering.
        </p>

        <div className="hero-actions reveal stagger-4">
          <a href="#projects" className="btn-primary" onClick={handleViewWork}>
            <span>View My Work</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <button className="btn-outline" onClick={handleDownloadResume}>
            Download Resume
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 3v8M4 8l4 4 4-4M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="hero-stats reveal stagger-5">
          <div className="stat">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat-divider" aria-hidden="true"></div>
          <div className="stat">
            <span className="stat-number">20+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider" aria-hidden="true"></div>
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator reveal stagger-6" aria-label="Scroll down">
        <div className="scroll-mouse" aria-hidden="true">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
