import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../layout/common/Layout';
import { getArticleById } from '../../../core/helpers/articleRoutes';
import './article.css';

const Article = () => {
    const [content, setContent] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const articleData = await getArticleById(id);
                if (articleData) {
                    setContent(articleData.content);
                }
            } catch (error) {
                console.error('Error al cargar el artículo:', error.message);
            }
        };

        fetchArticle();
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

export default Article;
