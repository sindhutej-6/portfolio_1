import './Projects.css';

const PROJECTS = [
  {
    id: 1,
    title: 'E-commerce Offline Chatbot',
    description: 'An intelligent offline chatbot for e-commerce, allowing users to query products and get recommendations without internet access. Built for robust edge performance.',
    tags: ['Python', 'LLMs', 'Chatbot', 'Edge AI'],
    github: 'https://github.com/sindhutej-6/e-commerce_offline_chatbot',
    demo: null,
    featured: true,
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.05))',
    borderColor: 'rgba(124, 58, 237, 0.3)',
    icon: '🤖',
    label: 'AI & Edge',
  },
  {
    id: 2,
    title: 'LLM Powered Prompt Router',
    description: 'A dynamic request routing system that uses LLMs to intelligently direct user prompts to specialized models or processing pipelines based on intent.',
    tags: ['Python', 'LLM Routing', 'AI Architecture', 'FastAPI'],
    github: 'https://github.com/sindhutej-6/LLM_powered_prompt_router',
    demo: null,
    featured: true,
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(236,72,153,0.04))',
    borderColor: 'rgba(245, 158, 11, 0.25)',
    icon: '🔀',
    label: 'Architecture',
  },
  {
    id: 3,
    title: 'Event Driven Change Data Capture',
    description: 'A high-performance CDC pipeline capturing database changes in real-time, built on event-driven architecture to reliably sync state across microservices.',
    tags: ['Kafka', 'CDC', 'Data Engineering', 'Event-Driven'],
    github: 'https://github.com/sindhutej-6/Event_Driven_Change_Data_Capture',
    demo: null,
    featured: false,
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.08), rgba(124,58,237,0.04))',
    borderColor: 'rgba(6, 182, 212, 0.25)',
    icon: '⚡',
    label: 'Data Pipeline',
  },
  {
    id: 4,
    title: 'Data Synchronization Pipeline',
    description: 'A robust data synchronization pipeline designed for cross-platform integration, ensuring data consistency and minimal latency across diverse systems.',
    tags: ['Python', 'Data Engineering', 'ETL', 'Sync'],
    github: 'https://github.com/sindhutej-6/data_synchronization_pipeline',
    demo: null,
    featured: false,
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.08), rgba(245,158,11,0.04))',
    borderColor: 'rgba(236, 72, 153, 0.25)',
    icon: '🔄',
    label: 'Data Sync',
  },
];

function ProjectCard({ project, index }) {
  const delay = index * 0.15;
  return (
    <article
      className={`project-card reveal ${project.featured ? 'project-featured' : ''}`}
      style={{
        transitionDelay: `${delay}s`,
        background: project.gradient,
        borderColor: project.borderColor,
      }}
      aria-label={`Project: ${project.title}`}
    >
      <div className="project-card-inner">
        <div className="project-header">
          <div className="project-icon" aria-hidden="true">{project.icon}</div>
          <span className="badge">{project.label}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tags" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`View ${project.title} on GitHub`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-primary"
              aria-label={`View live demo of ${project.title}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15,3 21,3 21,9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects" aria-label="Projects">
      <div className="container">
        <div className="projects-header reveal">
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">Selected <span className="gradient-text">Projects</span></h2>
          <p className="projects-subtitle">
            A selection of projects I've designed and built — each one a new problem to solve
            and a new skill to develop.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="projects-cta reveal">
          <a
            href="https://github.com/sindhutej-6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
