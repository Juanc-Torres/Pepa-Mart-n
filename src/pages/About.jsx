import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa"
import aboutImage from "../assets/profileimage/pepa-about.jpg"

function About() {
  return (
    <main className="about">
      <div className="about__content">
        <div className="about__image">
          <img src={aboutImage} alt="Pepa Martín" />
        </div>

        <div className="about__info">
          <p>
            Pepa Martín is a Fashion photographer.
            <br />
            <br />
            From editorials, to brand look books to Model tests and Portrait's.
            <br />
            Based mainly between Paris, France & Madrid, Spain.
            <br />
            Contact: bypepamartin@gmail.com
          </p>

        </div>
      </div>
    </main>
  )
}

export default About