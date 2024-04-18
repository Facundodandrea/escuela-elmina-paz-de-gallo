// sidebarAdmin.jsx

import React, { useState, useEffect } from 'react';
import './sidebarAdmin.css';
import { Link } from 'react-router-dom';
import { FiSettings, FiLogOut, FiHome, FiEdit, FiImage, FiUsers, FiUserPlus } from 'react-icons/fi'; 
import supabase from '../../../../../supabase/Client'

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
          <img src={''} alt="" />
          <div className="dropdown">
            <p>{userName}</p>
            <div className="dropdown-content">
              <ul>
                <li><FiSettings /> Editar Información</li>
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
            <li><Link to={'/admins'}><FiUsers /> Administradores</Link></li>
            <li><Link to={'/sign-up'}><FiUserPlus /> Registrar Usuario</Link></li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
