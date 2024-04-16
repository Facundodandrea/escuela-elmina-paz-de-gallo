import { Link } from 'react-router-dom'

import Layout from '../../layout/common/Layout'
import Carousel from '../../components/carousel/Carousel'
import GalleryCarousel from '../../components/galleryCarousel/GalleryCarousel'

import Slide1 from '../../../assets/imgs/Slide1.png'
import Slide2 from '../../../assets/imgs/Slide2.png'
import { FaCalendarAlt, FaCheck } from "react-icons/fa";

import './home.css'

const slides = [
  {
    image: Slide1,
    link: "/page1"
  },
  {
    image: Slide2,
    link: "/page2"
  },
];

const images = [
  {
    image: Slide1,
  },
  {
    image: Slide2,
  },
  {
    image: Slide1,
  },
  {
    image: Slide2,
  }, 
  {
    image: Slide1,
  },
  {
    image: Slide2,
  },
  {
    image: Slide1,
  },
  {
    image: Slide2,
  },
];

const Home = () => {
  return (
    <Layout>
      <Carousel  slides={slides}/>

      <section className="ProjectSection">
        <div className="container">
            <h2 className="ProjectTitle">
              Nuestros Proyectos
            </h2>
          <div className="ProjectContent">
            <div className="ProjectSquare"></div>
            <div className="ProjectSquare"></div>
            <div className="ProjectSquare"></div>
            <div className="ProjectSquare"></div>
            <div className="ProjectSquare"></div>
            <div className="ProjectSquare"></div>
            <div className="ProjectSquare"></div>
            <div className="ProjectSquare"></div>
          </div>
        </div>
      </section>

      <section className="NewsSection">
        <h2 className="NewsTitle">
          Últimas <span>Noticias</span>
        </h2>
          <div className="NewsContent">
              <Link to={'/articulo'}>
                <div className="NewsComponents">
                  <h3 className="NewsTitle">
                  Lorem ipsum dolor sit amet consectetur adipiscing eli
                  </h3>
                  <p className="NewsDescription">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, suspendisse porta porttitor sociis urna torquent platea fusce, nam habitant accumsan ultrices risus inceptos. Cursus habitant nunc lectus libero condimentum sociis, purus parturient nostra felis torquent bibendum enim, rutrum feugiat lacinia nec aenean...
                  </p>
                  <span className="NewsDate"><FaCalendarAlt className='NewsIcon'/>Lunes 1 de abril de 2024</span>
                </div>
              </Link>
              <Link to={'/articulo'}>
                <div className="NewsComponents">
                  <h3 className="NewsTitle">
                  Lorem ipsum dolor sit amet consectetur adipiscing eli
                  </h3>
                  <p className="NewsDescription">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, suspendisse porta porttitor sociis urna torquent platea fusce, nam habitant accumsan ultrices risus inceptos. Cursus habitant nunc lectus libero condimentum sociis, purus parturient nostra felis torquent bibendum enim, rutrum feugiat lacinia nec aenean...
                  </p>
                  <span className="NewsDate"><FaCalendarAlt className='NewsIcon'/>Lunes 1 de abril de 2024</span>
                </div>
              </Link>
              <Link to={'/articulo'}>
                <div className="NewsComponents">
                  <h3 className="NewsTitle">
                  Lorem ipsum dolor sit amet consectetur adipiscing eli
                  </h3>
                  <p className="NewsDescription">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, suspendisse porta porttitor sociis urna torquent platea fusce, nam habitant accumsan ultrices risus inceptos. Cursus habitant nunc lectus libero condimentum sociis, purus parturient nostra felis torquent bibendum enim, rutrum feugiat lacinia nec aenean...
                  </p>
                  <span className="NewsDate"><FaCalendarAlt className='NewsIcon'/>Lunes 1 de abril de 2024</span>
                </div>
              </Link>
              <Link to={'/articulo'}>
                <div className="NewsComponents">
                  <h3 className="NewsTitle">
                  Lorem ipsum dolor sit amet consectetur adipiscing eli
                  </h3>
                  <p className="NewsDescription">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, suspendisse porta porttitor sociis urna torquent platea fusce, nam habitant accumsan ultrices risus inceptos. Cursus habitant nunc lectus libero condimentum sociis, purus parturient nostra felis torquent bibendum enim, rutrum feugiat lacinia nec aenean...
                  </p>
                  <span className="NewsDate"><FaCalendarAlt className='NewsIcon'/>Lunes 1 de abril de 2024</span>
                </div>
              </Link>
          </div>
      </section>

      <section className="GallerySection">
        <h2 className="GalleryTitle">
          Galería de fotos
        </h2>

      <GalleryCarousel images={images} />
      </section>

      <section className="InfoSection">
        <div className="background-image"></div>
        <div className="InfoContainer">
          <div className="FAQS">
            <h3 className='FAQSTitlte'>
              Preguntas frecuentes
            </h3>
            <Link to={'/'}><FaCheck className='icon'/>¿Dónde está ubicada la escuela?</Link>
            <Link to={'/'}><FaCheck className='icon'/>¿Cuál es el  horario de atención?</Link>
            <Link to={'/'}><FaCheck className='icon'/>¿Por qué eligirnos?</Link>
            <Link to={'/'}><FaCheck className='icon'/>¿Cuáles son las vías de contacto?</Link>
          </div>
          <div className="Contact">
            <h3 className="ContactTitle">
            Dejanos tu mensaje
            </h3>
            <form>
              <input type="text"  placeholder='Correo'/>
              <input type="text"  placeholder='Asunto'/>
              <textarea name="" id="" cols="30" rows="10" placeholder='Mensaje...'></textarea>
              <button>Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home