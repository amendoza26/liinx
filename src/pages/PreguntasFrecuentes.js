import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion'

const PreguntasFrecuentes = () => {

  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <>
      <section>
        <div className=' mt-10'>
          <div className='flex flex-col container mx-auto'>
            <div className='flex flex-row text-sm text-gris-80 mb-8'>
              <Link to='/'>Inicio </Link>/<Link to='/preguntas-frecuentes'>Preguntas Frecuentes</Link>   
            </div>
            <div className='text-morado-primario text-4xl mb-4'>
              Todo lo que debes saber sobre nuestra seguridad
            </div>
            <div className='text-gris-oscuro text-xl mb-12'>
              Nuestro compromiso es cuidar tu información, y ser una plataforma segura donde puedas utilizar tu identidad digital con absoluta confianza.
            </div>
            <div className=''>
              <div className='flex flex-row'>
                <div className='flex flex-col border-b border-morado-primario'>
                  <img src='/seguridad1-activo.png' alt='Preguntas frecuentes' />
                  <div className='text-morado-primario pb-2'>Preguntas Frecuentes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='flex flex-col mb-24'>
          <div className='text-naranja-primario text-2xl font-bold container mx-auto'>
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
          </div>
        </div>
      </section>
    </>
  )
}

export default PreguntasFrecuentes