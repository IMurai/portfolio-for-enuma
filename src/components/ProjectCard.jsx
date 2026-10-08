import './ProjectCard.css'

function Screenshot({ project }) {
  if (project.screenshot) {
    return (
      <img
        className="mock-img"
        src={project.screenshot}
        alt={project.screenshotAlt || `${project.title} screenshot`}
        loading="lazy"
      />
    )
  }

  return (
    <div className="mock-pending" role="img" aria-label="Screenshot pending">
      <span className="mock-pending-square" aria-hidden="true" />
      SCREENSHOT PENDING
    </div>
  )
}

function BrowserMockup({ project }) {
  return (
    <div className="mock-browser">
      <div className="browser-bar">
        <span className="browser-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-url">{project.urlBar}</span>
      </div>
      <div className="browser-body">
        <Screenshot project={project} />
      </div>
    </div>
  )
}

function PhoneMockup({ project }) {
  return (
    <div className="mock-phone">
      <span className="phone-notch" aria-hidden="true" />
      <div className="phone-body">
        <Screenshot project={project} />
      </div>
    </div>
  )
}

export default function ProjectCard({ project }) {
  const isDone = project.status !== 'IN PROGRESS'

  return (
    <article className="project-card">
      <header className="project-head">{project.category}</header>

      <div className="project-media">
        {project.frame === 'phone' ? (
          <PhoneMockup project={project} />
        ) : (
          <BrowserMockup project={project} />
        )}
      </div>

      <div className="project-body">
        <div className="project-title-row">
          <h3 className="project-title">{project.title}</h3>
          <span className={`badge ${isDone ? 'badge--done' : ''}`}>
            {project.status}
          </span>
        </div>

        <p className="project-desc">{project.description}</p>

        <ul className="project-tags">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>

        <div className="project-actions">
          {project.links.map((link) =>
            link.url ? (
              <a
                key={link.label}
                className={`btn ${
                  link.variant === 'primary' ? 'btn--soft' : ''
                }`}
                href={link.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                [{link.label}]
              </a>
            ) : (
              <button
                key={link.label}
                type="button"
                className="btn btn--disabled"
                disabled
                title="Link not added yet — set the URL in src/data/content.js"
              >
                [{link.label}]
              </button>
            ),
          )}
        </div>
      </div>
    </article>
  )
}
