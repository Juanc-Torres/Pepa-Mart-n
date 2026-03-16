import { Link } from "react-router"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="navbar">

      <h1 className="navbar__brand">
        <Link to="/">Pepa Martín</Link>
      </h1>

      <button className="navbar__toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`navbar__menu ${menuOpen ? "active" : ""}`}>

        <Link className="navbar__link" to="/" onClick={() => setMenuOpen(false)}>
          Fashion
        </Link>

        <Link className="navbar__link" to="/video" onClick={() => setMenuOpen(false)}>
          Video
        </Link>

        <Link className="navbar__link" to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>

      </nav>

    </header>
  )
}

export default Navbar