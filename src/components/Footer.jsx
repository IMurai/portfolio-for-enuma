import { footer } from '../data/content.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span className="footer-marker" aria-hidden="true" />
        <p className="footer-text">{footer.copyright}</p>
        <a className="footer-top" href="#home">
          [BACK TO TOP]
        </a>
      </div>
    </footer>
  )
}
