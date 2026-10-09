import { skills } from '../data/content.js'
import './Skills.css'

export default function Skills() {
  return (
    <section
      id="skills"
      className="section skills"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className="section-head reveal">
          <span className="section-marker" aria-hidden="true" />
          <span className="section-number">04</span>
          <h2 id="skills-title" className="section-title">
            Skills <span>/ Keahlian</span>
          </h2>
        </div>

        <ul className="skills-grid">
          {skills.map((group) => (
            <li key={group.id} className="skill-card reveal">
              <h3 className="skill-card-title">{group.title}</h3>
              <div className="skill-card-body">
                <ul className="tool-list">
                  {group.tools.map((tool) => (
                    <li key={tool} className="tool-tag">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
