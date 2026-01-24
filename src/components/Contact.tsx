const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-main">
            <h2>Let's Connect</h2>
            <p>
              Always open to discussing and learning more about innovative backend solutions, cloud
              architecture patterns, or just chatting about the latest in tech.
            </p>
          </div>
          <div className="contact-sections">
            <div className="contact-section-item">
              <h3>CONTACT DETAILS</h3>
              <div className="contact-links">
                <a href="mailto:hello@kavalikas.com" className="contact-link">
                  <span className="link-title">Email</span>
                  <span className="link-handle">hello@kavalikas.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/charalampos-kavalikas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="link-title">LinkedIn</span>
                  <span className="link-handle">charalampos-kavalikas</span>
                </a>
                <a
                  href="https://github.com/hkavalikas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="link-title">GitHub</span>
                  <span className="link-handle">@hkavalikas</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <span>&copy; {new Date().getFullYear()} Harry Kavalikas. All rights reserved.</span>
        </footer>
      </div>
    </section>
  )
}

export default Contact
