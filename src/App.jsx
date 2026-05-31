import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add scroll reveal animations using Intersection Observer
    const revealElements = document.querySelectorAll('section');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // If the element is a child section or container, trigger its child reveals
            const childReveals = entry.target.querySelectorAll('.reveal');
            childReveals.forEach((child) => child.classList.add('active'));
          }
        });
      },
      {
        threshold: 0.1, // trigger when 10% of the section is visible
        rootMargin: '0px 0px -50px 0px', // slightly offset for better timing
      }
    );

    revealElements.forEach((el) => {
      // Add initial reveal styles dynamically or via CSS class
      el.classList.add('reveal');
      revealObserver.observe(el);
    });

    return () => {
      revealElements.forEach((el) => revealObserver.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
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

export default App;
