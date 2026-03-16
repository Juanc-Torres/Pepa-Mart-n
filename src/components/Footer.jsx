import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="mailto:bypepamartin@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="footer__text">© Pepa Martín, All rights reserved</p>
    </footer>
  )
}

export default Footer