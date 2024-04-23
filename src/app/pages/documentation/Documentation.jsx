import Layout from '../../layout/common/Layout'
import './documentation.css'

const Documentation = () => {
  return (
    <Layout>
        <div className="container">
            <div className="documentation">
            <h2 className='documentTitle'>MATRÍCULA 2024</h2>

            <p>Para realizar la matriculación de su hijo/a deberán presentar:</p>
            <span className='documentSpan'>NIVEL INICIAL  5 años</span>
             <ol>
                <li className='documentList'>D.N.I. original y fotocopia</li>
                <li className='documentList'>Acta de Nacimiento actualizada</li>
                <li className='documentList'>Carnet de vacunas</li>
                <li className='documentList'>Ficha médica (solicitar en secretaría)</li>
             </ol>
            <span className='documentSpan'>NIVEL PRIMARIO de 1° a 6° grado</span>
             <ol>
                <li className='documentList'>D.N.I. original y fotocopia</li>
                <li className='documentList'>Acta de Nacimiento actualizada</li>
                <li className='documentList'>Carnet de vacunas</li>
                <li className='documentList'>Ficha médica para 1er grado (solicitar en secretaría)</li>
                <li className='documentList'>Certificado de salud (solicitar en secretaría)</li>
             </ol>
        </div>
            </div>
    </Layout>
  )
}

export default Documentation