import './About.css';

export default function About() {
  return (
    <section id="about" className="section about" aria-label="About me">
      <div className="container about-container">
        <div className="about-image-col reveal-left">
          <div className="about-image-wrapper">
            <div className="about-image" role="img" aria-label="Alex Rivera portrait">
              <img src="/profile.jpg" alt="Kalisetti Tejaswi" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div className="about-image-decoration" aria-hidden="true">
              <div className="deco-ring ring-1"></div>
              <div className="deco-ring ring-2"></div>
            </div>
          </div>

          <div className="about-social">
            <a href="https://github.com/sindhutej-6" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub profile">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/tejaswi-kalisetti-7163302a2/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn profile">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
          </div>
        </div>

        <div className="about-text-col">
          <p className="section-label reveal">About Me</p>
          <h2 className="section-title reveal stagger-1">Turning ideas into<br /><span className="gradient-text">digital reality</span></h2>
          <div className="divider reveal stagger-2" style={{width:'60px',height:'3px',background:'linear-gradient(90deg,var(--accent),transparent)',borderRadius:'2px',marginBottom:'2rem'}}></div>

          <div className="about-bio reveal stagger-2">
            <p>
              I'm Kalisetti Tejaswi, a 4th-year B.Tech student with a CGPA of 9.13. I specialize in data engineering and full-stack development, and I'm deeply passionate about building scalable data pipelines and robust web applications.
            </p>
            <p>
              I previously worked as a Data Engineer at T-Hub (2025-2026), where I honed my skills in data integration, building event-driven architectures, and optimizing backend systems.
            </p>
            <p>
              Currently, I'm focused on contributing to open source, exploring AI-powered tools, and developing intelligent systems that solve real-world problems.
            </p>
          </div>

          <div className="about-highlights reveal stagger-3">
            <div className="highlight">
              <span className="highlight-icon" aria-hidden="true">🎓</span>
              <div>
                <strong>B.Tech</strong>
                <span>CGPA: 9.13</span>
              </div>
            </div>
            <div className="highlight">
              <span className="highlight-icon" aria-hidden="true">💼</span>
              <div>
                <strong>Data Engineer</strong>
                <span>T-Hub, 2025–2026</span>
              </div>
            </div>
            <div className="highlight">
              <span className="highlight-icon" aria-hidden="true">🚀</span>
              <div>
                <strong>Currently building</strong>
                <span>Data-driven systems & AI tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
