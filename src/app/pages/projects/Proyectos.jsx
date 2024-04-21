import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Layout from '../../layout/common/Layout'
import supabase from '../../../supabase/Client';

const Proyectos = () => {
    const [projects, setProjects] = useState([]);

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
  
    const decodeBase64Image = (base64String) => {
      const binaryString = atob(base64String);
      const byteArray = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        byteArray[i] = binaryString.charCodeAt(i);
      }
      return new Blob([byteArray], { type: 'image/png' });
    };

  return (
    <Layout>
      <div className="ProjectsSection">
        <div className="container">
        
          <h2 className="ProjectTitle">MISIÓN</h2>
          <p>Nos proponemos brindar al alumnado una educación de calidad, que los forme como individuos competentes y fomente el desarrollo de sus habilidades para mejorar sus condiciones de vida, aprendan a vivir de manera solidaria y democrática, y que sean capaces de transformar su entorno.</p>
          <h2 className="ProjectTitle">VISIÓN</h2>
          <p>Anhelamos ser una institución de referencia pedagógica, que a partir de la planificación de proyectos inclusivos e innovadores potencien las capacidades de los alumnos para adquirir aprendizajes significativos, que les permitan elaborar un proyecto de vida y asumir retos para contribuir a la construcción de una sociedad más justa y solidaria.</p>
          <h2 className="ProjectTitle">Nuestros Proyectos</h2>
          <div className="ProjectContent">
            {projects.map((project) => (
              <Link key={project.id} to={`/proyecto/${project.id}`} className="ProjectSquare">
                <img className="ProjectSquare" src={URL.createObjectURL(decodeBase64Image(project.img_cover))} alt={`Project ${project.id}`} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Proyectos