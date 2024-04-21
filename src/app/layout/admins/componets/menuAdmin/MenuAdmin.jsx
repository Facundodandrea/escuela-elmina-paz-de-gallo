import React, { useState, useEffect } from 'react';
import { FiLogOut,  FiHome, FiEdit, FiImage, FiUsers, FiUserPlus } from 'react-icons/fi';
import { PiSlideshowDuotone } from "react-icons/pi"; 
import { GrProjects } from "react-icons/gr";
import { RiPagesLine } from "react-icons/ri";
import supabase from '../../../../../supabase/Client'
import './menuAdmin.css';
import Logo from '../../../../../assets/imgs/logo.png'
import { Link } from 'react-router-dom';

export const MenuAdmin = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: user } = await supabase.auth.getUser();
          setUserName(user.user.user_metadata.full_name);
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error.message);
      }
    };
  
    fetchUserData();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar-admin ${menuOpen ? 'active' : ''}`}>
      <div className='navbar-admin-content'>
        <div className={`person ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <img src={Logo} alt="" />
          {menuOpen && (
            <div className="dropdown">
              <p>{userName}</p>
              <div className="dropdown-content">
                <ul>
                  <li><Link to={'/'}><RiPagesLine /> Página principal</Link></li>
                  <li onClick={() => supabase.auth.signOut()}><FiLogOut /> Cerrar Sesión</li>
                  <div className='mobile'>
                    <hr />
                    <li><Link to={'/dashboard'}><FiHome /> Home</Link></li>
                    <li><Link to={'/editor'}><FiEdit /> Nuevo artículo</Link></li>
                    <li><Link to={'/gallery-editor'}><FiImage /> Galería</Link></li>
                    <li className="projects-dropdown">
                      <span><GrProjects /> Proyectos</span>
                      <div className="dropdown-menu">
                        <ul>
                          <li><Link to="/projects">Ver Proyectos</Link></li>
                          <li><Link to="/projects-editor">Crear Proyecto</Link></li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to={'/carrousel-editor'}><PiSlideshowDuotone /> Carrusel</Link></li>
                    <hr />
                    <li><Link to={'/admins'}><FiUsers /> Administradores</Link></li>
                    <li><Link to={'/sign-up'}><FiUserPlus /> Registrar Usuario</Link></li>
                  </div>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
