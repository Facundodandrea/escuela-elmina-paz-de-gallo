import React, { useState, useEffect } from 'react';
import { FiSettings, FiLogOut } from 'react-icons/fi'; 
import supabase from '../../../../../supabase/Client'
import './menuAdmin.css';

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
          <img src={''} alt="" />
          {menuOpen && (
            <div className="dropdown">
              <p>{userName}</p>
              <div className="dropdown-content">
                <ul>
                  <li><FiSettings /> Editar Información</li>
                  <li onClick={() => supabase.auth.signOut()}><FiLogOut /> Cerrar Sesión</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
