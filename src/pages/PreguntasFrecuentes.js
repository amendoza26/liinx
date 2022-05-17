import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion'

const PreguntasFrecuentes = () => {

  const [activeIndex, setActiveIndex] = useState(1);
  const tab = '\u00A0';
  return (
    <>
      <section>
        <div className=' mt-10'>
          <div className='flex flex-col container mx-auto'>
            <div className='flex flex-row text-sm text-gris-80 mb-8'>
              <Link to='/'>Inicio </Link>{tab}/{tab}<Link to='/preguntas-frecuentes'>Seguridad</Link>   
            </div>
            <div className='text-morado-primario text-4xl mb-4'>
              Todo lo que debes saber sobre nuestra seguridad
            </div>
            <div className='text-gris-oscuro text-xl mb-12'>
              Nuestro compromiso es cuidar tu información, y ser una plataforma segura donde puedas utilizar tu identidad digital con absoluta confianza.
            </div>
            <div className='flex justify-center border-b border-gris-40 pb-8'>
              <div className='flex flex-row space-x-20 max-w-min'>
                <div className='flex flex-col border-b border-morado-primario items-center'>
                  <Link to='/preguntas-frecuentes'>
                    <img className='max-w-min px-6 pb-2' src='/seguridad1-activo.png' alt='Preguntas frecuentes' />
                    <div className='text-morado-primario pb-2 text-center'>Preguntas Frecuentes</div>
                  </Link>
                </div>
                <div className='flex flex-col items-center'>
                  <Link to='/terminos-y-condiciones'>
                    <img className='max-w-min px-6 pb-2' src='/seguridad2.png' alt='Términos y condiciones' />
                    <div className='text-gris-40 pb-2 text-center'>Términos y condiciones</div>
                  </Link>
                </div>
                <div className='flex flex-col items-center'>
                  <Link to='/politica-privacidad'>
                    <img className='max-w-min px-6 pb-2' src='/seguridad3.png' alt='Política de privacidad' />
                    <div className='text-gris-40 pb-2 text-center'>Política de privacidad</div>
                  </Link>
                </div>
                <div className='flex flex-col items-center'>
                  <Link to='/libro-reclamaciones'>
                    <img className='max-w-min px-6 pb-2' src='/seguridad4.png' alt='Libro de reclamaciones' />
                    <div className='text-gris-40 pb-2 text-center'>Libro de reclamaciones</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='flex flex-col mb-24 my-20'>
          <div className='text-naranja-primario text-2xl font-bold container mx-auto mb-8'>
            ¿Quiénes somos?
          </div>
          <div className='flex flex-col'>
            <Accordion 
                title="¿Qué es Liinx?"
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                Liinx es una plataforma peruana especializada en identidad digital    
            </Accordion>

            <Accordion 
                title="¿Qué es Identidad Digital?"
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                Para comprar bienes o servicios digitales, tienes que entregar tus datos personales. Toda esta información, forma tu identidad digital. Liinx facilita este proceso y lo hace de manera segura.    
            </Accordion>

            <Accordion 
                title="¿Quiénes conforman el equipo de Liinx?"
                index={3}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                Jóvenes profesionales, con distintas especialidades y experiencias. Somos un equipo multidisciplinario en la búsqueda de la mejora continua, ofreciendo una solución óptima en la gestión de información.    
            </Accordion>
          </div>

          <div className='text-naranja-primario text-2xl font-bold container mx-auto mt-12 mb-8'>
            ¿Cómo protegemos tus datos?
          </div>

          <div className='flex flex-col'>
            <Accordion 
                title="¿Cómo funciona nuestra plataforma?"
                index={4}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                Liinx solicita tus datos personales según las necesidades del usuario, para luego almacenar y gestionar tu información de manera segura.  
            </Accordion>

            <Accordion 
                title="¿Dónde almacenan mis datos personales?"
                index={5}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                Debe ser respondida por Gino. El espacio queda aquí para cuando tengamos una respuesta a esta pregunta   
            </Accordion>

            <Accordion 
                title="¿Mis datos están seguros?"
                index={6}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                Compartir tus datos en internet tiene diversos riesgos relacionados a filtraciones y/o adulteraciones. Liinx se encarga de la gestión de tu información y la traslada bajo tu consentimiento a sitios que cumplan con nuestras medidas de privacidad.   
            </Accordion>

            <Accordion 
                title="¿Qué pasa con mis datos si decido eliminar mi cuenta?"
                index={7}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                Se almacenará una copia temporal por 30 días en caso cambies de opinión. Luego de este plazo, se te enviará una copia de los mismos y serán removidos de nuestras bases de datos.    
            </Accordion>

            <Accordion 
                title="¿Con quiénes comparten mis datos personales?"
                index={8}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                Tu información será compartida exclusivamente con las organizaciones que tu elijas, las cuales han sido previamente evaluadas por el equipo de Liinx.    
            </Accordion>
          </div>

          <div className='text-naranja-primario text-2xl font-bold container mx-auto mt-12 mb-8'>
            ¿Qué hacen con mis datos personales?
          </div>

          <div className='flex flex-col'>
            <Accordion 
                title="¿Liinx usa mis datos con fines publicitarios?"
                index={9}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                Sólo con tu autorización podremos enviarte comunicaciones comerciales respecto a productos y servicios que podrían ser de tu interés. Tu información únicamente podrá ser compartida para este fin con aquellas empresas que tú decidas. 
            </Accordion>

            <Accordion 
                title="¿Qué niveles de verificación tiene Liinx?"
                index={10}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                Liinx cuenta con tres niveles de verificación gradual (básico - intermedio - avanzado). Mientras más alto tu nivel de verificación, mayor cantidad de bienes y servicios digitales tendrás a tu disposición.
            </Accordion>

            <Accordion 
                title="¿Cómo validan mi identidad?"
                index={11}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                Una vez que entregues tu información, corroboramos que la misma sea legítima con bases de datos internas y externas. Asimismo, recopilamos distintos elementos para la creación de tu identidad digital.   
            </Accordion>
          </div>
            
          
        </div>
      </section>
    </>
  )
}

export default PreguntasFrecuentes