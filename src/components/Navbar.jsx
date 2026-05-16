import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container navbar-inner">
        <a href="#hero" className="navbar-logo" onClick={(e) => handleNavClick(e, '#hero')} aria-label="Kalisetti Tejaswi - Home">
          <span className="logo-text">KT</span>
          <span className="logo-dot" aria-hidden="true"></span>
        </a>

        <ul className="navbar-links" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:sindhutejaswi1@gmail.com"
          className="btn-primary navbar-cta"
        >
          <span>Hire Me</span>
        </a>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mobile-link"
                onClick={(e) => handleNavClick(e, link.href)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:sindhutejaswi1@gmail.com"
              className="btn-primary"
              style={{ marginTop: '1rem', justifyContent: 'center' }}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span>Hire Me</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
