import avatarImg from '../assets/avatar.png';

export default function About() {
  return (
    <section id="about">
      <div className="section-header">
        <h2>About Me</h2>
        <p>A glimpse into who I am, my philosophy, and the drive behind my code.</p>
      </div>

      <div className="about-grid">
        <div className="about-img-container glass-panel">
          <img src={avatarImg} alt="Sahil Manjhi Avatar" className="about-img" />
        </div>

        <div className="about-info">
          <h3>Crafting High-Performance Applications</h3>
          <p className="about-text">
            I am a full-stack software engineer based in India, with a passion for designing and building highly scalable, responsive, and robust applications. My journey started with programming in Java, and evolved into creating interactive frontends using modern frameworks like React.
          </p>
          <p className="about-text">
            I thrive in the intersection of design and technology, crafting user experiences that are not only beautiful but also performant and accessible. Lately, my focus has been expanding into the realm of AI and Machine Learning, integrating intelligent features into standard web services to automate tasks and build smart products.
          </p>
          <p className="about-text">
            Whether you need a dynamic frontend application, a high-throughput Java server, or an AI-powered data processor, I bring a methodical approach to system design, optimization, and clean code principles.
          </p>

          <div className="about-stats">
            <div className="stat-card glass-panel">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat-card glass-panel">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-card glass-panel">
              <span className="stat-number">50k+</span>
              <span className="stat-label">Lines of Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
