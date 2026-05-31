import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import neurosearchImg from '../assets/neurosearch.png';
import taskflowImg from '../assets/taskflow.png';
import javaserverImg from '../assets/javaserver.png';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'react', label: 'React' },
    { id: 'java', label: 'Java' },
    { id: 'ai-ml', label: 'AI/ML' },
  ];

  const projectsData = [
    {
      id: 1,
      title: 'NeuroSearch AI Engine',
      description:
        'A semantic search dashboard that integrates Large Language Models (LLMs) to perform context-aware queries, generate structured answers, and map text relationships from uploaded documents.',
      image: neurosearchImg,
      tags: ['React', 'AI/ML', 'Node.js', 'LLM API'],
      category: 'ai-ml',
      githubLink: 'https://github.com/sahilkumar/neurosearch-ai',
      liveLink: 'https://neurosearch-demo.example.com',
    },
    {
      id: 2,
      title: 'TaskFlow Dashboard',
      description:
        'An interactive project coordination dashboard featuring live charts, interactive Kanban lists, team distribution widgets, and state persistence with seamless theme responsiveness.',
      image: taskflowImg,
      tags: ['React', 'Vite', 'CSS Grid', 'LocalStorage'],
      category: 'react',
      githubLink: 'https://github.com/sahilkumar/taskflow-dashboard',
      liveLink: 'https://taskflow-demo.example.com',
    },
    {
      id: 3,
      title: 'Distributed Java Server',
      description:
        'A high-performance socket server written in Java using advanced concurrency pools, TCP communication pipelines, custom serialization modules, and diagnostic logging scripts.',
      image: javaserverImg,
      tags: ['Java', 'TCP/IP', 'Multithreading', 'Diagnostics'],
      category: 'java',
      githubLink: 'https://github.com/sahilkumar/distributed-java-server',
      liveLink: 'https://github.com/sahilkumar/distributed-java-server', // Fallback to github
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects">
      <div className="section-header">
        <h2>My Projects</h2>
        <p>A selection of recent projects showcasing frontend artistry, backend systems, and AI modules.</p>
      </div>

      <div className="projects-filter">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
            onClick={() => setFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card glass-panel">
            <div className="project-img-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
              <div className="project-overlay">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon-link"
                  title="View GitHub Code"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon-link"
                  title="View Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="project-details">
              <div className="project-tags">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-links-mobile">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
