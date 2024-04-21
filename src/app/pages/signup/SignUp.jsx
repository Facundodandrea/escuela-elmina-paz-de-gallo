import React, { useState, useEffect } from 'react';
import { SidebarAdmin } from '../../layout/admins/componets/sidebarAdmin/SidebarAdmin';
import { MenuAdmin } from '../../layout/admins/componets/menuAdmin/MenuAdmin';
import supabase from '../../../supabase/Client';
import useAuthRedirect from '../../../core/middleware/authService';

import './sign-up.css';

const SignUp = () => {
  useAuthRedirect('/sign-up');

  const [token, setToken] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'usuario' // Valor por defecto para el rol
  });

  useEffect(() => {
    // Verificar si hay un usuario autenticado al cargar la aplicación
    const session = supabase.auth.getUser();
    if (session) {
      setToken(session.access_token);
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            role: formData.role // Asignar el rol seleccionado al registrar
          }
        }
      });
      if (error) throw error;
      alert('Check your email for verification link');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className='sign-up'>
      <SidebarAdmin />
      <main>
        <MenuAdmin token={token} />
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              placeholder='Fullname'
              name='fullName'
              onChange={handleChange}
            />
            <input
              placeholder='Email'
              name='email'
              onChange={handleChange}
            />
            <input
              placeholder='Password'
              name='password'
              type="password"
              onChange={handleChange}
            />
            <button type='submit'>
              Guardar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
