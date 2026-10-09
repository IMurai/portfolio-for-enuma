import { education } from '../data/content.js'
import './Education.css'

export default function Education() {
  return (
    <section
      id="education"
      className="section education"
      aria-labelledby="education-title"
    >
      <div className="container">
        <div className="section-head reveal">
          <span className="section-marker" aria-hidden="true" />
          <span className="section-number">03</span>
          <h2 id="education-title" className="section-title">
            Education Journey <span>/ Jejak Pendidikan</span>
          </h2>
        </div>

        <p className="education-subtitle reveal">{education.subtitle}</p>

        <ol className="education-timeline">
          {education.entries.map((entry, index) => (
            <li key={entry.id} className="education-item reveal">
              <span className="education-marker" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>

              <article className="education-card">
                <h3 className="education-school">{entry.school}</h3>
                <p className="education-desc">{entry.description}</p>

                <ul className="education-topics" aria-label="Topics covered">
                  {entry.topics.map((topic) => (
                    <li key={topic} className="education-tag">
                      {topic}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
