import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../../../supabase/Client';
import { stripHtmlTags } from '../../../core/helpers/utils';

import Layout from '../../layout/common/Layout';
import Carousel from '../../components/carousel/Carousel';
import GalleryCarousel from '../../components/galleryCarousel/GalleryCarousel';

import { FaCalendarAlt, FaCheck } from 'react-icons/fa';

import './home.css';

const Home = () => {
  const email = 'https://formsubmit.co/facundodandrea01@gmail.com';
  const [latestArticles, setLatestArticles] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase.from('projects').select('*').limit(8);

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

  const decodeBase64Image = (base64String) => {
    const binaryString = atob(base64String);
    const byteArray = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      byteArray[i] = binaryString.charCodeAt(i);
    }
    return new Blob([byteArray], { type: 'image/png' });
  };

  useEffect(() => {
    const fetchLatestArticles = async () => {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(4);

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
      <section className="CarouselSection">
        <Carousel />
      </section>

      <section className="ProjectSection">
        <div className="container">
          <h2 className="ProjectTitle">Nuestros Proyectos</h2>
          <div className="ProjectContent">
            {projects.map((project) => (
              <Link key={project.id} to={`/proyecto/${project.id}`} className="ProjectSquare">
                <img className="ProjectSquare" src={URL.createObjectURL(decodeBase64Image(project.img_cover))} alt={`Project ${project.id}`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="NewsSection">
        <h2 className="NewsTitle">Últimas <span>Noticias</span></h2>
        <div className="NewsContent">
          {latestArticles.map((article) => (
            <Link key={article.id} to={`/articulo/${article.id}`} className="NewsComponents">
              <h3 className="NewsTitle">{article.title}</h3>
              <p className="NewsDescription">{stripHtmlTags(article.content)}</p>
              <span className="NewsDate">
                <FaCalendarAlt className="NewsIcon" />
                {new Date(article.created_at).toLocaleDateString()}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="GallerySection">
        <h2 className="GalleryTitle">Galería de fotos</h2>
        <GalleryCarousel />
      </section>

      <section className="InfoSection">
        <div className="background-image"></div>
        <div className="InfoContainer">
          <div className="FAQS">
            <h3 className="FAQSTitlte">Preguntas frecuentes</h3>
            <Link to={'/faqs'}>
              <FaCheck className="icon" />
              ¿Dónde está ubicada la escuela?
            </Link>
            <Link to={'/faqs'}>
              <FaCheck className="icon" />
              ¿Cuál es el  horario de atención?
            </Link>
            <Link to={'/faqs'}>
              <FaCheck className="icon" />
              ¿Por qué elegirnos?
            </Link>
            <Link to={'/faqs'}>
              <FaCheck className="icon" />
              ¿Cuáles son las vías de contacto?
            </Link>
          </div>
          <div className="Contact">
            <h3 className="ContactTitle">Dejanos tu mensaje</h3>
            <form action={email} method="POST">
              <input type="email" name="email" placeholder="Correo" required />
              <input type="text" name="name" placeholder="Nombre" required />
              <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje..." required></textarea>
              <button>Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
