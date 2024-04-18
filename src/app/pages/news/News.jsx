import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import supabase from '../../../supabase/Client';
import Layout from '../../layout/common/Layout';
import { stripHtmlTags } from '../../../core/helpers/utils';

import './news.css';

const News = () => {
  const [latestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    const fetchLatestArticles = async () => {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) {
          console.error('Error al obtener los últimos artículos:', error.message);
        } else {
          setLatestArticles(data);
        }
      } catch (error) {
        console.error('Error al obtener los últimos artículos:', error.message);
      }
    };

    fetchLatestArticles();
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="News">
          {latestArticles.map((article) => (
            <Link key={article.id} to={`/articulo/${article.id}`} className="NewsComponent">
              <h3 className="NewsTitle">{article.title}</h3>
              <p className="NewsDescription">{stripHtmlTags(article.content)}</p>
              <span className="NewsDate">
                <FaCalendarAlt className="NewsIcon" />
                {new Date(article.created_at).toLocaleDateString()}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default News;
