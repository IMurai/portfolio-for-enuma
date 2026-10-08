import { about } from '../data/content.js'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-marker" aria-hidden="true" />
          <span className="section-number">02</span>
          <h2 id="about-title" className="section-title">
            About Me <span>/ Tentang Saya</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-story card reveal">
            <p className="about-label">// WHO AM I</p>
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="about-stats">
            {about.stats.map((stat) => (
              <li key={stat.marker} className="stat-box reveal">
                <span className="stat-marker" aria-hidden="true">
                  {stat.marker}
                </span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
