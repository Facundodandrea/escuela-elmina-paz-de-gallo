import { Link } from "react-router-dom";
import Logo from './../../../../../assets/imgs/logo.png'
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerContent">
          <div className="brand">
            <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
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
              <li><Link to={'/faqs'}>Preguntas</Link></li>
              <li><Link to={'/reseña'}>Reseña</Link></li>
              <li><Link to={'/noticias'}>Noticias</Link></li>
              <li><Link to={'/proyectos'}>Proyectos</Link></li>
              <li><Link to={'/documentacion'}>Documentación</Link></li>
            </ul>
          </div>
          <div className="propuestas">
          <h2>
            Propuesta Educativa
          </h2>
          <ul>
              <li><Link to={'/propuesta/inicial'}>Nivel Inicial</Link></li>
              <li><Link to={'/propuesta/primaria'}>Nivel Primario</Link></li>
            </ul>
          </div>
          <div className="contacto">
          <h2>
            Contacto
          </h2>
          <ul>
              <li><FaPhoneAlt className="icons"/> 381-4286134</li>
              <li><IoIosMail className="icons"/> escuelaelminapazdegallo@yahoo.com.ar</li>
              <li><FaMapMarkerAlt className="icons"/> Alvarez Condarco 50</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer