import { useState, useEffect } from 'react';
import Layout from '../../../app/layout/admins/AdminLayout'
import supabase from '../../../supabase/Client';
import useAuthRedirect from '../../../core/middleware/authService';
import { FiTrash } from 'react-icons/fi';

import './admin.css'

function Admins() {
    useAuthRedirect('/admins');

    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const { data: { users }, error } = await supabase.auth.admin.listUsers();
                if (error) {
                    console.error('Error al obtener los administradores:', error.message);
                } else {
                    const adminsWithRoles = await Promise.all(users.map(async (admin) => {
                        const { data: userData, error } = await supabase
                            .from('user')
                            .select('role')
                            .eq('id', admin.id)
                            .single();
                        if (error) {
                            console.error('Error al obtener el rol del usuario:', error.message);
                        }
                        return {
                            ...admin,
                            role: userData ? userData.role : 'Sin rol' // Si no se encuentra el rol, se asigna 'Sin rol'
                        };
                    }));
                    setAdmins(adminsWithRoles);
                }
            } catch (error) {
                console.error('Error al obtener los administradores:', error.message);
            }
        };    
        fetchAdmins();
    }, []);

    const handleDeleteAdmin = async (userId) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este administrador?')) {
            try {
                const { error } = await supabase.auth.admin.deleteUser(userId);
                if (error) {
                    console.error('Error al eliminar el administrador:', error.message);
                } else {
                    console.log('Administrador eliminado exitosamente');
                    // Actualizar la lista de administradores después de eliminar
                    const updatedAdmins = admins.filter(admin => admin.id !== userId);
                    setAdmins(updatedAdmins);
                }
            } catch (error) {
                console.error('Error al eliminar el administrador:', error.message);
            }
        }
    };

    return (
            <Layout>                
        <div>
                <div className="container">
                    <div className="activityTable">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Correo Electrónico</th>
                                    <th>Control</th>
                                </tr>
                            </thead>
                            <tbody>
                                {admins.map(admin => (
                                    <tr key={admin.id}>
                                        <td>{admin.user_metadata.full_name}</td>
                                        <td>{admin.email}</td>
                                        <td>
                                            <button onClick={() => handleDeleteAdmin(admin.id)}><FiTrash title="Eliminar" /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
            </Layout>
    );
}

export default Admins;
