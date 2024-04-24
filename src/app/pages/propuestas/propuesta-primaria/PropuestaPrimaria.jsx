import Layout from '../../../layout/common/Layout'
import '../../propuestas/propuesta.css'

import primario1 from '../../../../assets/imgs/Primario1.jpeg'
import primario2 from '../../../../assets/imgs/Primario2.jpeg'

const PropuestaPrimaria = () => {
  return (
    <Layout>
        <div className="container">
            <div className="proposed">
            <h2 className="proposedTitle">
                NIVEL PRIMARIO
            </h2>
            <h3 className="proposedSubTitle">OBJETIVOS</h3>
            <p>La educación en el nivel primario es obligatoria y constituye una unidad pedagógica y organizativa, destinada a la formación integral de niñas y niños a partir de los 6 hasta los 11 años de edad. La misma garantiza el acceso a saberes , prácticas y experiencias culturales relevantes para que puedan intervenir progresivamente de diferentes maneras, participar en una sociedad democrática, promover el desarrollo de la personalidad, el pensamiento crítico, la solidaridad social y  el juicio moral autónomo de los alumnos incrementando su capacidad de conocerse y cambiar, de conocer el mundo e influir en él, garantizar el dominio por parte de todos los alumnos de las herramientas necesarias para continuar su aprendizaje más allá de la educación básica.  Además, contamos con espacios de participación como “la radio escolar”, “mediación escolar”, “patrulla ambiental”.</p>
            <img src={primario1} alt="" />
            <h3 className="proposedSubTitle">ORGANIZACIÓN ESCOLAR</h3>
            <p>El Nivel Primario se organiza por ciclos:</p>
            <p>1er ciclo: 1°,2° y 3° grado con tres divisiones de 1° grado en el turno mañana, las demás con dos divisiones</p>
            <p>2do ciclo: 4°, 5° y 6° grado con tres divisiones en 6° grado en el turno tarde, las demás con dos divisiones.</p>
            <p>Desarrollando una propuesta educativa según los siguientes espacios curriculares: Matemática, Lengua, Ciencias Naturales, Ciencias Sociales, Tecnología, Educación Plástica, Educación Musical, Educación Física, Lengua Extranjera (inglés) y Religión, respondiendo a los diseños jurisdiccionales y a los Núcleos de Aprendizajes Prioritarios (NAP), definidos por el Ministerio de Educación de la Nación y de la provincia.</p>
            <img src={primario2} alt="" />
            </div>
        </div>
    </Layout>
  )
}

export default PropuestaPrimaria