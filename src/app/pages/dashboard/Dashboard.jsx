import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuthRedirect from '../../../core/middleware/authService'
import supabase from '../../../supabase/Client'
import { SidebarAdmin } from "../../layout/admins/componets/sidebarAdmin/SidebarAdmin";
import { MenuAdmin } from '../../layout/admins/componets/menuAdmin/MenuAdmin';
import { FiEdit, FiImage, FiUsers, FiUserPlus, FiEdit2, FiTrash } from 'react-icons/fi';
import './dashboard.css';

const Dashboard = () => {
    useAuthRedirect('/dashboard');
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const { data, error } = await supabase.from('articles').select('*');
                if (error) {
                    console.error('Error al obtener los artículos:', error.message);
                } else {
                    setArticles(data);
                }
            } catch (error) {
                console.error('Error al obtener los artículos:', error.message);
            }
        };

        fetchArticles();
    }, []);

    const handleDeleteArticle = async (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este artículo?')) {
            console.log('ID del artículo a eliminar:', id); // Log para verificar la ID del artículo a eliminar
            try {
                const { error } = await supabase.from('articles').delete().eq('id', id);
                if (error) {
                    throw error;
                } else {
                    setArticles(articles.filter(article => article.id !== id));
                }
            } catch (error) {
                console.error('Error al eliminar el artículo:', error.message);
            }
        }
    };

    return (
        <div className='dashboard'>
            <SidebarAdmin />
            <main>
                <MenuAdmin />
                <div className="container">
                    <div className="quickAccess">
                        <div className="access">
                            <Link to={'/editor'}><FiEdit />Nuevo artículo</Link>
                        </div>
                        <div className="access">
                            <Link to={'/gallery-editor'}><FiImage />Galería</Link>
                        </div>
                        <div className="access">
                            <Link to={'/admins'}><FiUsers />Administradores</Link>
                        </div>
                        <div className="access">
                            <Link to={'/sign-up'}><FiUserPlus />Registrar Usuario</Link>
                        </div>
                    </div>

                    <div className="activityTable">
                        <table>
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles.map(article => (
                                    <tr key={article.id}>
                                        <td>{article.title}</td>
                                        <td>
                                            <Link to={`/editor/${article.id}`} onClick={() => console.log('ID del artículo a editar:', article.id)}><FiEdit2 title="Modificar" /></Link>
                                            <button onClick={() => handleDeleteArticle(article.id)}><FiTrash title="Eliminar" /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard;
