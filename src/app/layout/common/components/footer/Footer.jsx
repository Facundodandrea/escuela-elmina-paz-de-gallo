import { Link } from "react-router-dom";

import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerContent">
          <div className="brand">
            <h2>
            <Link to={'/'}>Escuela Elmina Paz de Gallo</Link>
            </h2>
          </div>
          <div className="links">
            <h2>
            Links
            </h2>
            <ul>
              <li><Link to={'/'}>Inicio</Link></li>
              <li><Link to={'/'}>Quienes Somos</Link></li>
              <li><Link to={'/'}>Noticias</Link></li>
              <li><Link to={'/'}>Proyectos</Link></li>
              <li><Link to={'/'}>Documentación</Link></li>
            </ul>
          </div>
          <div className="propuestas">
          <h2>
            Propuesta Educativa
          </h2>
          <ul>
              <li><Link to={'/'}>Nivel Inicial</Link></li>
              <li><Link to={'/'}>Nivel Primario</Link></li>
            </ul>
          </div>
          <div className="contacto">
          <h2>
            Contacto
          </h2>
          <ul>
              <li><FaPhoneAlt className="icons"/> 381-4286134</li>
              <li><FaMapMarkerAlt className="icons"/> escuelaelminapazdegallo@yahoo.com.ar</li>
              <li><IoIosMail className="icons"/> Alvarez Condarco 50</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer