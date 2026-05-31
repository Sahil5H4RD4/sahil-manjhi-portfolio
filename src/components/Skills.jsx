import { useEffect, useRef, useState } from 'react';
import { Code2, Layout, BrainCircuit, Wrench } from 'lucide-react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillsData = [
    {
      title: 'Languages',
      icon: <Code2 className="category-icon" size={24} />,
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      title: 'Frontend Engineering',
      icon: <Layout className="category-icon" size={24} />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Responsive Web Design', level: 90 },
        { name: 'Vite & Build Tools', level: 85 },
      ],
    },
    {
      title: 'AI & Backend Systems',
      icon: <BrainCircuit className="category-icon" size={24} />,
      skills: [
        { name: 'Node.js & Express', level: 80 },
        { name: 'Java Spring Boot', level: 70 },
        { name: 'AI LLM API Integration', level: 85 },
        { name: 'TensorFlow & PyTorch Basics', level: 60 },
      ],
    },
    {
      title: 'Developer Tools',
      icon: <Wrench className="category-icon" size={24} />,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker Containers', level: 70 },
        { name: 'REST APIs & Postman', level: 85 },
        { name: 'Linux / Unix Shell', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" ref={sectionRef}>
      <div className="section-header">
        <h2>My Skills</h2>
        <p>A comprehensive overview of my technical capabilities and coding strengths.</p>
      </div>

      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className={`skills-category glass-panel ${isVisible ? 'active' : ''}`}
          >
            <h3 className="category-title">
              {category.icon}
              {category.title}
            </h3>
            <div className="skills-list">
              {category.skills.map((skill, sIndex) => (
                <div key={sIndex} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{
                        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                        transitionDelay: `${sIndex * 150}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
