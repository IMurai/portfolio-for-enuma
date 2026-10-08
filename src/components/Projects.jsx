import { projects } from '../data/content.js'
import ProjectCard from './ProjectCard.jsx'
import './Projects.css'

export default function Projects() {
  return (
    <section
      id="projects"
      className="section projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section-head reveal">
          <span className="section-marker" aria-hidden="true" />
          <span className="section-number">04</span>
          <h2 id="projects-title" className="section-title">
            Projects <span>/ Proyek</span>
          </h2>
        </div>

        <ul className="projects-grid">
          {projects.map((project) => (
            <li key={project.id} className="reveal">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
