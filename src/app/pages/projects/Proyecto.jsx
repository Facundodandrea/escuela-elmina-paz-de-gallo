import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../layout/common/Layout';
import { getProjectById } from '../../../core/helpers/projectRoutes';

const Proyecto = () => {
    const [content, setContent] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const fetchProyecto = async () => {
            try {
                const articleData = await getProjectById(id);
                if (articleData) {
                    setContent(articleData.content);
                }
            } catch (error) {
                console.error('Error al cargar el artículo:', error.message);
            }
        };

        fetchProyecto();
    }, [id]);

    return (
        <Layout>
            <div className="container">
                <div className="article">
                    <div className="articleContent" dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </div>
        </Layout>
    );
};

export default Proyecto;
