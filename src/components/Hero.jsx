import { profile } from '../data/content.js'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="section hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="hero-kicker">
            <span className="hero-marker" aria-hidden="true" />
            01 — HOME / IDENTITAS
          </p>

          <h1 id="hero-title" className="hero-name">
            {profile.identity}
          </h1>

          <p className="hero-headline">{profile.headline}</p>

          <div className="hero-actions">
            <a className="btn btn--primary" href="#projects">
              [VIEW PROJECTS]
            </a>
            <a className="btn" href="#contact">
              [CONTACT ME]
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap reveal">
          <figure className="photo-frame">
            <figcaption className="photo-label">
              <span aria-hidden="true" className="photo-label-dot" />
              PROFILE.JPG
            </figcaption>

            {profile.photo ? (
              <img
                className="photo-img"
                src={profile.photo}
                alt={profile.photoAlt}
                width="480"
                height="480"
              />
            ) : (
              <div className="photo-pending" role="img" aria-label="Photo pending">
                <span className="photo-pending-square" aria-hidden="true" />
                PHOTO PENDING
              </div>
            )}
          </figure>

          <span className="hero-sticker" aria-hidden="true">
            {'</>'}
          </span>
        </div>
      </div>
    </section>
  )
}
