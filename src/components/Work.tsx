import { workHistoryHighlights } from '../data/work'

const Work = () => {
  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <div className="work-header">
          <h2>Selected Work</h2>
          <span className="work-duration">2017 &mdash; {new Date().getFullYear()}</span>
        </div>
        <div className="work-timeline">
          {workHistoryHighlights.map((item) => (
            <div className="work-item" key={`${item.year}-${item.company}`}>
              <div className="work-year">{item.year}</div>
              <div className="work-details">
                <h3>{item.title}</h3>
                <p className="company">{item.company}</p>
                <p className="description">{item.description}</p>
                <div className="tech-tags">
                  {item.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
