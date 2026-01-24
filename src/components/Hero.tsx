const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-header">
            <a
              href="https://www.linkedin.com/in/charalampos-kavalikas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
            >
              <img
                src="/profile-sm.webp"
                alt="Harry Kavalikas - Software Engineer"
                className="hero-avatar"
                width="128"
                height="128"
                decoding="async"
              />
            </a>
            <span className="portfolio-label">PORTFOLIO / {new Date().getFullYear()}</span>
          </div>
          <h1 className="hero-name">
            <span className="first-name">Harry</span>
            <span className="last-name">Kavalikas</span>
          </h1>
          <div className="hero-description">
            <p>
              Founding Software Engineer specializing in <strong>backend systems</strong>,{' '}
              <strong>Node.js</strong>, <strong>Spring Boot</strong>, and{' '}
              <strong>AWS architecture</strong>. Building scalable solutions with a foundation in
              Computer Science (BSc, King’s College London)
            </p>
            <div className="status">
              <span className="location">London, UK</span>
            </div>
          </div>
        </div>
        <div className="hero-sidebar">
          <div className="currently">
            <h2>CURRENTLY</h2>
            <p>Founding Software Engineer</p>
            <p>@ Hyper</p>
            <span className="duration">June 2023 — Present</span>
          </div>
          <div className="focus">
            <h2>FOCUS</h2>
            <div className="tech-tags">
              <span>Java 8+</span>
              <span>Spring Boot</span>
              <span>AWS</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>Terraform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
