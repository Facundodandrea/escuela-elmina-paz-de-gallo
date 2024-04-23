import Layout from '../../layout/common/Layout'
import './reseña.css'

const Reseña = () => {
  return (
    <Layout>
        <div className="container">
            <div className="review">
            <h2 className='titleReview'>Reseña</h2>
            <p className='paragraphReview'>La escuela Elmina Paz de Gallo fue creada durante el gobierno del Dr. Ernesto Padilla en el año 1915 entre los meses de septiembre y octubre bajo el nombre de “Villa 9 de Julio”.</p>
            <p className='paragraphReview'>La vida escolar se inició en el año 1916, entre los meses de abril y mayo, el Dr. Padilla, autorizó el cambio del nombre de la escuela, por el de Elmina Paz de Gallo en homenaje a tan bondadosa y protectora mujer.</p>
            <p className='paragraphReview'>En julio de 1937, durante el gobierno del Dr. Miguel Campero es trasladada a su actual local sito en Álvarez Condarco 50.</p>
            <p className='paragraphReview'>Nuestra escuela busca que sus alumnos/as se inserten en la escolaridad primaria, de manera paulatina, respetando sus características evolutivas e intereses, para ello se articulan diversas actividades con el Nivel Inicial, brindándoles experiencias significativas que les permitan descubrirse como personas a partir del compartir con otros.</p>
            <p className='paragraphReview'>Pedagógicamente nos proponemos crear las condiciones necesarias para que los niños y niñas puedan potenciar sus capacidades para adquirir aprendizajes significativos y tecnológicos, que les permitan elaborar un proyecto de vida, para la construcción de una sociedad más justa y solidaria.</p>
            <p className='paragraphReview'>Actualmente se llevan a cabo proyectos interdisciplinarios con acciones pensadas para dar respuestas a las necesidades e inquietudes de los alumnos/as, adaptando estrategias y actividades para cada caso.  Estos Proyectos surgen del diagnóstico anual de cada comienzo de ciclo escolar. teniendo en cuenta lo trabajado y transitado años anteriores. Cabe destacar el trabajo que se realiza junto a las familias de alumnos que se encuentran en un período de riesgo pedagógico y/o con promoción acompañada.</p>
            <p className='paragraphReview'>Se  trabaja por áreas desde el 3er grado y, en el turno mañana tienen inglés también desde 3er grado.</p>
            <p className='paragraphReview'>Al finalizar la escolaridad primaria, se articulan acciones y contenidos con escuelas secundarias de la zona para priorizar un tránsito seguro al nivel siguiente.</p>
            <p className='paragraphReview'>El desafío actual de nuestra institución consiste en mejorar la capacidad pedagógica para que todo el alumnado que asiste a ella pueda aprender, afianzar sus conocimientos, sobre todo los tecnológicos y fortalecer sus trayectorias educativas como parte importante para sus vidas.</p>

            <h3 className='titleReview'>Ficha Técnica</h3>
            <span className='spanReview'>Escuela: <p>Elmina Paz de Gallo</p></span>
            <span className='spanReview'>Domicilio: <p>Álvarez Condarco 50</p></span>
            <span className='spanReview'>Localidad: <p>San Miguel de Tucumán</p></span>
            <span className='spanReview'>Departamento: <p>Capital</p></span>
            <span className='spanReview'>Teléfono: <p>4286134</p></span>
            <span className='spanReview'>Modalidad: <p>Jornada Simple</p></span>
            <span className='spanReview'>Niveles: <p>Inicial y Primario</p></span>
            <span className='spanReview'>Zona de Supervisión N°: <p>29</p></span>
            <span className='spanReview'>Supervisor/a: <p>Prof. Rosa del Valle Guerra</p></span>
            <span className='spanReview'>Teléfono: <p>3814199558</p></span>
            <span className='spanReview'>Director/a: <p>Patricia Albornoz</p></span>
            <span className='spanReview'>Teléfono: <p>381 6048497</p></span>
            <span className='spanReview'>Vice-Director/a: <p>Cecilia Graciela Inés</p></span>
            <span className='spanReview'>Teléfono: <p>381 5823212</p></span>
            <span className='spanReview'>Matrícula Nivel Primario Turno Mañana: <p>345</p></span>
            <span className='spanReview'>Matrícula Nivel Primario Turno Tarde: <p>295</p></span>
            <span className='spanReview'>Nivel Primario Totales: <p>619</p></span>
            <span className='spanReview'>Nivel Inicial Totales: <p>66</p></span>
            <span className='spanReview'>Nivel Secundario Totales:    ----</span>
            <table>
    <thead>
        <tr>
            <th className='tableHead' colspan="4">Planta Orgánica Funcional</th>
        </tr>
    </thead>
    <thead>
        <tr>
            <th colspan="2">Turno Mañana</th>
            <th colspan="2">Turno Tarde</th>
        </tr>
        <tr>
            <th>Cargo</th>
            <th>Cantidad</th>
            <th>Cargo</th>
            <th>Cantidad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Director</td>
            <td>1</td>
            <td>Vice-Director</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Secretarios</td>
            <td>2</td>
            <td>Secretarios</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Maestros de NI</td>
            <td>2</td>
            <td>Maestros de NI</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Maestros de grado</td>
            <td>13</td>
            <td>Maestros de grado</td>
            <td>13</td>
        </tr>
        <tr>
            <td>Personal auxiliar</td>
            <td>5</td>
            <td>Personal auxiliar</td>
            <td>3</td>
        </tr>
        <tr>
            <td>Otros</td>
            <td>13</td>
            <td>Otros</td>
            <td>14</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th colspan="3">Total POF</th>
            <th>71</th>
        </tr>
    </tfoot>
</table>
            <span className='spanReview'>Comparte edificio con:  Esc. Nocturna Manuel Estrada</span>
        </div>
            </div>
    </Layout>
  )
}

export default Reseña