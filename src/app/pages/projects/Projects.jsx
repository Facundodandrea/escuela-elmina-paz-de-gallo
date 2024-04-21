import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuthRedirect from '../../../core/middleware/authService';
import supabase from '../../../supabase/Client';
import Layout from '../../../app/layout/admins/AdminLayout';
import { FiEdit2, FiTrash } from 'react-icons/fi';

const Projects = () => {
    useAuthRedirect('/projects');
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await supabase.from('projects').select('*');
                if (error) {
                    console.error('Error al obtener los proyectos:', error.message);
                } else {
                    setProjects(data);
                }
            } catch (error) {
                console.error('Error al obtener los proyectos:', error.message);
            }
        };

        fetchProjects();
    }, []);

    const handleDeleteProject = async (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este proyecto?')) {
            try {
                const { error } = await supabase.from('projects').delete().eq('id', id);
                if (error) {
                    throw error;
                } else {
                    setProjects(projects.filter(project => project.id !== id));
                }
            } catch (error) {
                console.error('Error al eliminar el proyecto:', error.message);
            }
        }
    };

    const renderImage = (base64String) => {
        const blob = decodeBase64Image(base64String);
        return <img src={URL.createObjectURL(blob)} alt="Project" style={{ width: '100px' }} />;
    };

    const decodeBase64Image = (base64String) => {
        const binaryString = atob(base64String);
        const byteArray = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            byteArray[i] = binaryString.charCodeAt(i);
        }
        return new Blob([byteArray], { type: 'image/png' });
    };

    const handleSelectProject = (project) => {
        setSelectedProject(project);
    };

    const clearSelectedProject = () => {
        setSelectedProject(null);
    };

    return (
        <Layout>
            <div className='projects'>
                <div className="main">
                    <div className="container">
                        <div className="activityTable">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.map(project => (
                                        <tr key={project.id}>
                                            <td onClick={() => handleSelectProject(project)}>{renderImage(project.img_cover)}</td>
                                            <td>
                                                <Link to={`/projects-editor/${project.id}`} onClick={() => console.log('ID del proyecto a editar:', project.id)}><FiEdit2 title="Modificar" /></Link>
                                                <button onClick={() => handleDeleteProject(project.id)}><FiTrash title="Eliminar" /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {selectedProject && (
                <div className="selected-project">
                    <h2>Proyecto Seleccionado</h2>
                    <div>{renderImage(selectedProject.img_cover)}</div>
                    <button onClick={clearSelectedProject}>Cerrar</button>
                </div>
            )}
        </Layout>
    )
}

export default Projects;
