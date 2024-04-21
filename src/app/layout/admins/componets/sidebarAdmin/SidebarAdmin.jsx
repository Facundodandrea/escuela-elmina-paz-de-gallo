import React, { useState, useEffect } from 'react';
import './sidebarAdmin.css';
import { Link } from 'react-router-dom';
import { FiLogOut, FiHome, FiEdit, FiImage, FiUsers, FiUserPlus } from 'react-icons/fi';
import { PiSlideshowDuotone } from "react-icons/pi"; 
import { GrProjects } from "react-icons/gr";
import { RiPagesLine } from "react-icons/ri";
import supabase from '../../../../../supabase/Client'
import Logo from '../../../../../assets/imgs/logo.png'

export const SidebarAdmin = () => {
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

  return (
    <aside className="sidebarAdmin">
      <div className="asideContainer">
        <div className="asideTitle">
          <h2>Panel<span>Admin</span></h2>
        </div>
        <div className="person">
          <img src={Logo} alt="" />
          <div className="dropdown">
            <p>{userName}</p>
            <div className="dropdown-content">
              <ul>
                <li><Link to={'/'}><RiPagesLine /> Página principal</Link></li>
                <li  onClick={() => supabase.auth.signOut()}>
                        <FiLogOut /> Cerrar Sesión
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="menu">
          <ul>
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
          </ul>
        </div>
      </div>
    </aside>
  );
};
