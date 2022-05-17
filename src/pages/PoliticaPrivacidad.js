import React from 'react'
import { Link } from 'react-router-dom'

const PoliticaPrivacidad = () => {

  const tab = '\u00A0';

  return (
    <div>
      <section>
        <div className=' mt-10'>
          <div className='flex flex-col container mx-auto'>
            <div className='flex flex-row text-sm text-gris-80 mb-8'>
              <Link to='/'>Inicio </Link>{tab}/{tab}<Link to='/preguntas-frecuentes'>Seguridad</Link>{tab}/{tab}<Link to='terminos'>Términos y condiciones</Link>
            </div>
            <div className='text-morado-primario text-4xl mb-4'>
              Términos y condiciones
            </div>
            <div className='text-gris-oscuro text-xl mb-12'>
              Nuestro compromiso es cuidar tu información, y ser una plataforma segura donde puedas utilizar tu identidad digital con absoluta confianza.
            </div>
            <div className='flex justify-center border-b border-gris-40 pb-8'>
              <div className='flex flex-row space-x-20 max-w-min'>
                <div className='flex flex-col items-center'>
                  <Link to='/preguntas-frecuentes'>
                    <img className='max-w-min px-6 pb-2' src='/seguridad1.png' alt='Preguntas frecuentes' />
                    <div className='text-gris-40 pb-2 text-center'>Preguntas Frecuentes</div>
                  </Link>
                </div>
                <div className='flex flex-col items-center border-b border-naranja-primario'>
                  <Link to='/terminos-y-condiciones'>
                    <img className='max-w-min px-6 pb-2' src='/seguridad2-activo.png' alt='Términos y condiciones' />
                    <div className='text-naranja-primario pb-2 text-center'>Términos y condiciones</div>
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
    </div>
  )
}

export default PoliticaPrivacidad