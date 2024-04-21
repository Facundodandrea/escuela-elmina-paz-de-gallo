import Layout from '../../layout/common/Layout'

import './faqs.css'

const Faqs = () => {
  return (
    <Layout>
        <div className="container">
            <div className="faqs">
                <h2 className="faqsTitle">
                    Preguntas frecuentes
                </h2>
                <div className="faqsContent">
                    <div className="question">
                        <h3 className="questionTitle">
                        ¿Dónde está ubicada la escuela?
                        </h3>
                            <p className="questionReply">Nuestra institución está ubicada en Alvarez Condarco 50, en la ciudad de San Miguel de Tucumán, Tucumán.</p>
                    </div>
                    <div className="question">
                        <h3 className="questionTitle">
                        ¿Cuál es el  horario de atención?
                        </h3>
                            <p className="questionReply">El horario de atención al público en general es lunes, miercoles y viernes de 8:00 a 10:00 am y de 14:30 a 16:00 horas.</p>
                    </div>
                    <div className="question">
                        <h3 className="questionTitle">
                        ¿Por qué eligirnos?
                        </h3>
                            <p className="questionReply">
                            Somos una institución con una amplia trayectoria, siempre a la vanguardia del conocimiento, brindando apoyo integral a los niños para su desarrollo.
                            </p>
                    </div>
                    <div className="question">
                        <h3 className="questionTitle">
                        ¿Cuáles son las vías de contacto?
                        </h3>
                            <p className="questionReply">
                            Para contactarse con nuestra institución, puede hacerlo por distintos medios:
                            </p>
                            <p className="questionReply">
                            -Por teléfono, llamando al 381-4286134.
                            </p>
                            <p className="questionReply">
                            -Por e-mail, enviándonos un correo a escuelaelminapazdegallo@yahoo.com.ar
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Faqs