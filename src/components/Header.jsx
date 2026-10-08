import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/content.js'
import { useScrollSpy } from '../hooks/useScrollSpy.js'
import './Header.css'

const NAV_IDS = navLinks.map((link) => link.id)

export default function Header() {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(NAV_IDS)

  // Close the mobile menu when the viewport grows or Escape is pressed.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)')
    const handleChange = (event) => {
      if (event.matches) setOpen(false)
    }
    mq.addEventListener('change', handleChange)

    const handleKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKey)

    return () => {
      mq.removeEventListener('change', handleChange)
      window.removeEventListener('keydown', handleKey)
    }
  }, [])

  const handleNavClick = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner container">
        {/* Left: brand */}
        <a className="brand" href="#home" onClick={handleNavClick}>
          <span className="brand-name">{profile.greeting}</span>
          <span className="brand-role">{profile.role}</span>
        </a>

        {/* Center: nav */}
        <nav
          id="mobile-nav"
          className={`nav ${open ? 'nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${
                    active === link.id ? 'nav-link--active' : ''
                  }`}
                  aria-current={active === link.id ? 'page' : undefined}
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: terminal badge + hamburger */}
        <div className="header-right">
          <span className="status-badge" aria-label="Available for work">
            <span className="status-dot" aria-hidden="true" />
            <span className="status-text">{profile.status}</span>
          </span>

          <button
            type="button"
            className={`burger ${open ? 'burger--open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Purple line under the header */}
      <div className="header-line" aria-hidden="true" />
    </header>
  )
}
