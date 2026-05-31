import { useState, useEffect } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import CanvasBackground from './CanvasBackground';

export default function Hero() {
  const roles = [
    'Full-Stack Developer',
    'Java Specialist',
    'React Developer',
    'AI/ML Enthusiast',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing letters
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(100); // normal speed

        if (displayText === currentRole) {
          // Pause when done typing before backspacing
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Backspacing letters
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50); // faster delete speed

        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-sec">
      <CanvasBackground />

      <div className="hero-content">
        <span className="hero-subtitle">WELCOME TO MY WORLD</span>
        <h1 className="hero-title">
          Hi, I'm <span className="hero-name-gradient">Sahil Manjhi</span>
        </h1>
        <div className="hero-tagline">
          <Terminal size={22} style={{ display: 'inline', marginRight: '10px', color: '#00f2fe', verticalAlign: 'middle' }} />
          <span style={{ verticalAlign: 'middle' }}>a {displayText}</span>
          <span className="cursor"></span>
        </div>
        <p className="hero-desc">
          I build high-performance, responsive web applications and backend architectures. With expertise in Java, React, JavaScript, and AI/ML integrations, I create seamless digital experiences.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => handleScrollTo('projects')}>
            View Work <ArrowRight size={16} />
          </button>
          <button className="btn btn-secondary" onClick={() => handleScrollTo('contact')}>
            Let's Talk
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orbit-container">
          <div className="orbit-circle orbit-circle-1"></div>
          <div className="orbit-circle orbit-circle-2"></div>
          <div className="orbit-circle orbit-circle-3"></div>
          <div className="hero-glow-core"></div>
        </div>
      </div>
    </section>
  );
}
