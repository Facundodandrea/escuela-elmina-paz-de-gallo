import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuSharp, IoClose, IoLogInOutline } from "react-icons/io5";
import Logo from './../../../../../assets/imgs/logo.png';
import "./header.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    if (!openMenu) {
      setOpenSubmenu(false); // Cerrar el submenú cuando se abre el menú móvil
    }
  };

  const toggleSubmenu = () => {
    setOpenSubmenu(!openSubmenu);
  };

  return (
    <nav>
      <div className="navContainer">
        <div className="logo">
          <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
        </div>
        <div className="menu">
          <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/faqs'>Quiénes somos</Link></li>
            <li onClick={toggleSubmenu} className={openSubmenu ? 'active' : ''}>
              <div className={openSubmenu ? 'active' : ''}>Propuesta educativa</div>
              <ul className={`dropdown ${openSubmenu ? "active" : ""}`}>
                <li><Link to='/'>Nivel Inicial</Link></li>
                <li><Link to='/'>Nivel Primario</Link></li>
                <li><Link to='/proyectos'>Proyectos</Link></li>
              </ul>
            </li>
            <li><Link to='/noticias'>Noticias</Link></li>
            <li><Link to='/galeria'>Galería</Link></li>
            <li><Link to='/'>Documentación</Link></li>
          </ul>
        </div>
        <div className="login">
          <Link to='/login'><IoLogInOutline /></Link>
        </div>
        <button onClick={toggleMenu} className="btn-menu">
          {openMenu ? <IoClose /> : <IoMenuSharp />}
        </button>
      </div>
      <div className={`menu-mobile ${openMenu ? "open" : ""}`}>
        <ul>
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/faqs'>Quiénes somos</Link></li>
          <li onClick={toggleSubmenu} className={openSubmenu ? 'active' : ''}>
            <div className={openSubmenu ? 'active' : ''}>Propuesta educativa</div>
            <ul className={`dropdown ${openSubmenu ? "active" : ""}`}>
              <li><Link to='/'>Nivel Inicial</Link></li>
              <li><Link to='/'>Nivel Primario</Link></li>
              <li><Link to='/proyectos'>Proyectos</Link></li>
            </ul>
          </li>
          <li><Link to='/noticias'>Noticias</Link></li>
          <li><Link to='/galeria'>Galería</Link></li>
          <li><Link to='/'>Documentación</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
