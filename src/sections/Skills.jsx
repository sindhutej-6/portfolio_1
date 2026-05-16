import { useEffect, useRef, useState } from 'react';
import './Skills.css';

const SKILLS = [
  { name: 'React / Next.js', level: 92, color: '#61dafb' },
  { name: 'Node.js / Express', level: 85, color: '#68d391' },
  { name: 'TypeScript', level: 88, color: '#3b82f6' },
  { name: 'Python / Django', level: 75, color: '#f6e05e' },
  { name: 'PostgreSQL / MongoDB', level: 80, color: '#f6ad55' },
  { name: 'Docker / CI/CD', level: 70, color: '#fc8181' },
];

const TECH_TAGS = [
  { name: 'React', emoji: '⚛️' },
  { name: 'TypeScript', emoji: '🔷' },
  { name: 'Node.js', emoji: '🟢' },
  { name: 'Next.js', emoji: '◆' },
  { name: 'Tailwind CSS', emoji: '🎨' },
  { name: 'GraphQL', emoji: '◉' },
  { name: 'PostgreSQL', emoji: '🐘' },
  { name: 'MongoDB', emoji: '🍃' },
  { name: 'Docker', emoji: '🐳' },
  { name: 'AWS', emoji: '☁️' },
  { name: 'Git', emoji: '🌿' },
  { name: 'Python', emoji: '🐍' },
  { name: 'Redis', emoji: '🔴' },
  { name: 'Figma', emoji: '🖌️' },
  { name: 'Jest', emoji: '🃏' },
  { name: 'Linux', emoji: '🐧' },
];

function SkillBar({ name, level, color, index, animated }) {
  return (
    <div className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div className="skill-track" role="progressbar" aria-valuenow={level} aria-valuemin="0" aria-valuemax="100" aria-label={`${name}: ${level}%`}>
        <div
          className="skill-fill"
          style={{
            width: animated ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            transitionDelay: `${index * 0.1}s`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills" ref={sectionRef} aria-label="Skills">
      <div className="skills-bg" aria-hidden="true">
        <div className="skills-orb"></div>
      </div>

      <div className="container">
        <div className="skills-header reveal">
          <p className="section-label">What I Know</p>
          <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
          <p className="skills-subtitle">
            A curated toolkit built through years of shipping products — from pixel-perfect UIs to scalable backends.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skills-bars reveal-left stagger-1">
            <h3 className="skills-col-title">Proficiency</h3>
            {SKILLS.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} index={i} animated={animated} />
            ))}
          </div>

          <div className="skills-tags-col reveal-right stagger-2">
            <h3 className="skills-col-title">Tech Stack</h3>
            <div className="skills-tags" role="list" aria-label="Technologies">
              {TECH_TAGS.map((tech, i) => (
                <div
                  key={tech.name}
                  className="tech-tag"
                  role="listitem"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <span className="tech-emoji" aria-hidden="true">{tech.emoji}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>

            <div className="skills-cta reveal stagger-3">
              <div className="currently-learning">
                <span className="learning-label">Currently Exploring</span>
                <div className="learning-tags">
                  <span className="badge">🤖 LLM APIs</span>
                  <span className="badge">🦀 Rust</span>
                  <span className="badge">📱 React Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
