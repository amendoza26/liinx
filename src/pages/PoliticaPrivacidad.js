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
              Nuestro compromiso es <span className='font-bold'>cuidar tu información</span> y ser una plataforma segura donde puedas utilizar tu identidad digital con absoluta confianza.
            </div>
            <div className='flex justify-center border-b border-gris-40 pb-8'>
              <div className='flex flex-row space-x-20 max-w-min'>
                <div className='flex flex-col items-center'>
                  <Link to='/preguntas-frecuentes'>
                    <img className='max-w-min px-6 pb-2' src='/seguridad1.png' alt='Preguntas frecuentes' />
                    <div className='text-gris-40 pb-2 text-center'>Preguntas Frecuentes</div>
                  </Link>
                </div>
                <div className='flex flex-col items-center'>
                  <Link to='/terminos-y-condiciones'>
                    <img className='max-w-min px-6 pb-2' src='/seguridad2.png' alt='Términos y condiciones' />
                    <div className='text-gris-40 pb-2 text-center'>Términos y condiciones</div>
                  </Link>
                </div>
                <div className='flex flex-col items-center border-b border-verde-secundario'>
                  <Link to='/politica-privacidad'>
                    <img className='max-w-min px-6 pb-2' src='/seguridad3-activo.png' alt='Política de privacidad' />
                    <div className='text-verde-secundario pb-2 text-center'>Política de privacidad</div>
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

      <section className='my-16 mb-24'>
        <div className='container mx-auto'>
          <div className='py-6 text-blanco font-bold bg-verde-secundario text-center text-3xl'>Nuestra Política de privacidad en <span className='text-4xl'>6 puntos importantes</span></div>

          <div className='flex flex-col bg-gris-10'>
            <div className='flex flex-row my-8 mx-20 justify-between items-center'>
              <img src='/numberIcon1.png' alt='icono 1' />
              <div className='text-xl'>Protegeremos la información que compartas con nosotros, haciendo uso de altos estándares de seguridad.</div>
              <img className='h-min' src='/IlustProtegemos.png' alt='protegemos' />
            </div>
          </div>
          
          <div className='flex flex-col bg-gris-20'>
            <div className='flex flex-row-reverse my-8 mx-20 justify-between items-center'>
              <img src='/numberIcon2.png' alt='icono 1' />
              <div className='text-xl'>Protegeremos la información que compartas con nosotros, haciendo uso de altos estándares de seguridad.</div>
              <img className='h-min' src='/IlustCompartir.png' alt='protegemos' />
            </div>
          </div>

          <div className='flex flex-col bg-gris-10'>
            <div className='flex flex-row my-8 mx-20 justify-between items-center'>
              <img src='/numberIcon3.png' alt='icono 1' />
              <div className='text-xl'>Protegeremos la información que compartas con nosotros, haciendo uso de altos estándares de seguridad.</div>
              <img className='h-min' src='/IlustComercio.png' alt='protegemos' />
            </div>
          </div>

          <div className='flex flex-col bg-gris-20'>
            <div className='flex flex-row-reverse my-8 mx-20 justify-between items-center'>
              <img src='/numberIcon4.png' alt='icono 1' />
              <div className='text-xl'>Protegeremos la información que compartas con nosotros, haciendo uso de altos estándares de seguridad.</div>
              <img className='h-min' src='/IlustContacto.png' alt='protegemos' />
            </div>
          </div>

          <div className='flex flex-col bg-gris-10'>
            <div className='flex flex-row my-8 mx-20 justify-between items-center'>
              <img src='/numberIcon5.png' alt='icono 1' />
              <div className='text-xl'>Protegeremos la información que compartas con nosotros, haciendo uso de altos estándares de seguridad.</div>
              <img className='h-min' src='/IlustOfertas.png' alt='protegemos' />
            </div>
          </div>

          <div className='flex flex-col bg-gris-20'>
            <div className='flex flex-row-reverse my-8 mx-20 justify-between items-center'>
              <img src='/numberIcon6.png' alt='icono 1' />
              <div className='text-xl'>Protegeremos la información que compartas con nosotros, haciendo uso de altos estándares de seguridad.</div>
              <img className='h-min' src='/IlustTuInfo.png' alt='protegemos' />
            </div>
          </div>

          <div className='py-4 text-blanco bg-verde-secundario text-center text-xl'>Para conocer nuestros términos y condiciones completos ingresa <Link to='/politicas-privacidad-doc'><span className='font-bold text-2xl'>aquí</span></Link></div>
        </div>
      </section>

    </div>
  )
}

export default PoliticaPrivacidad