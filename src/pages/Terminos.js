import React from 'react'
import { Link } from 'react-router-dom'

const Terminos = () => {

  const tab = '\u00A0';

  return (
    <>
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
      <section className='my-16 mb-24'>
        <div className='container mx-auto'>
          <div className='py-6 text-blanco font-bold bg-morado-primario text-center text-3xl'>Puntos <span className='text-4xl'>principales</span> de nuestros términos y condiciones</div>
          <div className='py-20 pb-36 bg-gris-10'>
            <div className='flex flex-row space-x-24 px-20 mb-16'>
              <div className='flex flex-col items-center'>
                <img src='/Note.png' alt='Nota' />
                <div className='text-morado-primario'>Para <span className='font-bold'>crear una cuenta en LIINX</span> debes leer y aceptar los términos y condiciones de uso de la plataforma.</div>
              </div>
              <div className='flex flex-col items-center'>
                <img src='/Candado.png' alt='Candado' />
                <div className='text-morado-primario'>La información contenida en el sitio web <span className='font-bold'>está protegida por derechos de autor</span> de titularidad de LIINX.</div>
              </div>
              <div className='flex flex-col items-center'>
                <img src='/Autorizar.png' alt='Autorizar' />
                <div className='text-morado-primario'><span className='font-bold'>LIINX es una marca registrada en el Perú</span> y sólo puede ser utilizada por terceros debidamente autorizados.</div>
              </div>
            </div>
            <div className='flex flex-row space-x-24 px-20'>
              <div className='flex flex-col items-center'>
                <img src='/Megafono.png' alt='Megafono' />
                <div className='text-morado-primario'>Para <span className='font-bold'>crear una cuenta en LIINX</span> debes leer y aceptar los términos y condiciones de uso de la plataforma.</div>
              </div>
              <div className='flex flex-col items-center'>
                <img src='/NoComent.png' alt='No Coment' />
                <div className='text-morado-primario'>La información contenida en el sitio web <span className='font-bold'>está protegida por derechos de autor</span> de titularidad de LIINX.</div>
              </div>
              <div className='flex flex-col items-center'>
                <img src='/Legal.png' alt='Legal' />
                <div className='text-morado-primario'><span className='font-bold'>LIINX es una marca registrada en el Perú</span> y sólo puede ser utilizada por terceros debidamente autorizados.</div>
              </div>
            </div>
          </div>
          <div className='py-4 text-blanco bg-morado-primario text-center text-xl'>Para conocer nuestros términos y condiciones completos ingresa <Link to='/terminos-y-condiciones-doc'><span className='font-bold text-2xl'>aquí</span></Link></div>
        </div>
      </section>
    </>
  )
}

export default Terminos