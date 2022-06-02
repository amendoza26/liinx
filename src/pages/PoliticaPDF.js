import React from 'react'
import { Link } from 'react-router-dom'

const PoliticaPDF = () => {

  return (
    <>
        <section>
            <div className='container mx-auto mt-24 mb-20'>
                <div className='text-verde-secundario text-4xl font-bold text-center'>Términos y condiciones</div>
                <div className='mt-8 mb-2'>
                       
                        <div className='mb-10'>
                            
                            <div className='mb-6'>Estamos totalmente comprometidos en proteger toda la información que nos compartas, guardando la reserva y su confidencialidad mediante el uso de altos estándares de seguridad.</div>
                            <div>Mediante esta Política te explicamos las finalidades con las que tratamos tu información, quiénes podrán tratarla y tener acceso a ella, qué derechos puedes ejercer, entre otros aspectos, tal como lo establece la Ley N° 29733 y Decreto Supremo N° 003-2013-JUS sobre Protección de Datos Personales.</div>
                        </div>

                        <div className='mb-10'>
                            <div className='text-lg font-bold mb-4'>1). El titular del Banco de Datos y/o encargado del tratamiento es:</div>
                            <div>LIINX, con RUC XXXXXXXXXXXXX, con domicilio en XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX, Lima, Perú.</div>
                            <div>Según corresponda, tu información se almacenará en nuestro Banco de Datos “Clientes” con código de registro XXXXXXXXXXXXXXX o “Potenciales Clientes” con código de registro XXXXXXXXXXXXXXX.</div>          
                        </div>

                        <div className='mb-10'>
                            <div className='text-lg font-bold mb-4'>2). Trataremos tus datos personales:</div>
                            <div className='mb-6'>a). Nosotros, nuestros proveedores, empresas vinculadas, socios y/o aliados comerciales, para poder prestarte el servicio que nos solicites (tratamiento necesario), de acuerdo con lo siguiente:</div>
                            <ul class="list-disc mb-6 list-inside">
                                <li>Para poder preparar, celebrar y/o ejecutar la relación derivada directa o indirectamente de la solicitud y/o contratación de alguno de nuestros productos o servicios.</li>
                                <li>Para poder verificar y validar tu identidad.</li>
                                <li>Para realizar estudios analíticos y/o estadísticos y/o de comportamiento para la evaluación y/o mejora del producto o servicio contratado.</li>
                                <li>Para atender los requerimientos legales o las solicitudes de las autoridades.</li>
                            </ul>
                            <div className='mb-6'>b). Adicionalmente, y siempre que nos hayas otorgado tu consentimiento expreso trataremos tus datos personales con fines de publicidad y/o comerciales, es decir, para enviarte por cualquier medio ofertas, beneficios, productos y/o servicios que nosotros y/o nuestros socios o aliados comerciales tengamos disponibles para ti.</div>        
                            <div>Ten en cuenta que el no otorgarnos tu consentimiento para las finalidades señaladas en b) no impide que puedas contratar nuestros productos o servicios. En ese caso, solo utilizaremos tus datos para las finalidades señaladas en a) ya que sin esa información no podremos otorgarte el servicio o producto contratado.</div>        
                        </div>

                        <div className='mb-10'>
                            <div className='text-lg font-bold mb-4'>3). Transferencia y destinatarios:</div>
                            <div className='mb-6'>Trataremos tus datos personales de manera directa y/o los transferiremos a empresas proveedoras de servicio (terceros) quienes serán los encargados del tratamiento, y/o a empresas vinculadas, socios y/o aliados comerciales, para las finalidades detalladas en a) y/o b) siempre que nos hayas otorgado tu consentimiento de acuerdo con lo señalado allí.</div>
                            <div className='mb-6'>Estas empresas mantendrán la reserva y confidencialidad de tus datos al mismo nivel que nosotros y en estricto cumplimiento de la Ley N° 29733 y Decreto Supremo N° 003-2013-JUS sobre Protección de Datos Personales.</div>          
                            <div className='mb-6'>La transferencia de tus datos personales se podrá realizar en territorio nacional y hacia el extranjero (flujo transfronterizo) en caso alguna de las empresas resida en un país distinto al Perú.</div>          
                            <div className='mb-6'>Puedes acceder al listado de las empresas a quiénes podremos transferir tus datos personales a nivel nacional ingresando aquí: link</div>          
                            <div>De igual forma, puedes consultar el listado de las empresas a quienes podremos transferir tus datos personales fuera del territorio nacional (flujo transfronterizo) ingresando aquí: link</div>          
                        </div>

                        <div className='mb-10'>
                            <div className='text-lg font-bold mb-4'>4). Plazo de conservación de tus datos:</div>
                            <div>Conservaremos tus datos en tanto sea necesario para cumplir una o más de las finalidades detalladas en a) y/o b), hasta por diez (10) años una vez que el contrato mediante el cual adquiriste el servicio o producto haya finalizado. Salvo que en cualquier momento solicites la cancelación, límites la transferencia o revoques el consentimiento para el tratamiento de tus datos personales.</div>          
                        </div>

                        <div className='mb-10'>
                            <div className='text-lg font-bold mb-4'>5). Tus derechos como titular de los datos personales:</div>
                            <div className='mb-6'>Son el de acceder a ellos, conocer su tratamiento, o solicitar su cancelación, actualización, inclusión y/o rectificación. Para ello debes enviarnos una solicitud al correo electrónico XXXXXXXXXXXXXXXXXXXXXXXXXXXX. Los requisitos de cada solicitud y el plazo de atención se encuentran detallados en la Ley N° 29733 y en el Decreto Supremo N° 003-2013-JUS. Puedes revisar la normativa en el siguiente enlace Link</div>
                            <div>Podrás acudir y/o contactarte con la Autoridad Nacional de Protección de Datos Personales, ubicada en Calle Scipión Llona N° 350, Miraflores, Lima, Perú, en caso desees presentar un reclamo.</div>          
                        </div>

                        <div className='mb-10'>
                            <div className='text-lg font-bold mb-4'>6). Política de Cookies:</div>
                            <div className='mb-6'>Nuestra plataforma web utiliza cookies propias y de terceros que te permitirán tener una buena experiencia de navegación y mejorarla. Las cookies son archivos que se almacenan en el computador o dispositivo móvil desde el que hayas accedido a nuestra web. </div>
                            <div>Si quieres conocer más sobre nuestra Política de Cookies accede a Link</div>          
                        </div>

                    
                </div>
                <div className='flex justify-between items-end'>
                    <Link to='/politica-privacidad'><button className='px-12 py-2 border border-verde-secundario text-verde-secundario rounded h-min'>Volver</button></Link>
                    <button className='flex flex-col space-y-4 py-9 px-10 w-44 items-center shadow-xl'>
                        <span>Descargar documento formato PDF</span>
                        <img src='/save_alt.png' alt='save' />
                    </button>
                </div>
            </div>
        </section>
        
        
    </>
  )
}

export default PoliticaPDF