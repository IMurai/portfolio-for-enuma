import { contact } from '../data/content.js'
import './Contact.css'

export default function Contact() {
  return (
    <section
      id="contact"
      className="section contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="section-head reveal">
          <span className="section-marker" aria-hidden="true" />
          <span className="section-number">06</span>
          <h2 id="contact-title" className="section-title">
            Contact <span>/ Social Media</span>
          </h2>
        </div>

        <div className="contact-box card reveal">
          <p className="contact-label">// LET'S WORK TOGETHER</p>
          <p className="contact-line">{contact.line}</p>

          <a
            className="btn btn--primary contact-email"
            href={`mailto:${contact.email}`}
          >
            [EMAIL ME] {contact.email}
          </a>

          <ul className="social-list">
            {contact.socials.map((social) => (
              <li key={social.label}>
                <a
                  className="btn social-btn"
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  [{social.label}]
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
