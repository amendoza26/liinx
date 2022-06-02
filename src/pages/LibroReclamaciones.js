import React from 'react'
import { Link } from 'react-router-dom'

const LibroReclamaciones = () => {

    const tab = '\u00A0';

  return (
    <>
    <section>
        <div className=' mt-10'>
          <div className='flex flex-col container mx-auto'>
            <div className='flex flex-row text-sm text-gris-80 mb-8'>
              <Link to='/'>Inicio </Link>{tab}/{tab}<Link to='/preguntas-frecuentes'>Preguntas Frecuentes</Link>   
            </div>
            <div className='text-morado-primario text-4xl mb-4'>
              Todo lo que debes saber sobre nuestra seguridad
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
                <div className='flex flex-col border-b border-morado-hover items-center'>
                  <Link to='/libro-reclamaciones'>
                    <img className='max-w-min px-6 pb-2' src='/seguridad4-activo.png' alt='Libro de reclamaciones' />
                    <div className='text-morado-hover pb-2 text-center'>Libro de reclamaciones</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='my-12 flex justify-center'>
        <img src='/Ilustayuda.png' alt='Ilustracion Libro' />
      </section>

      <section className=''>
        <div className='container mx-auto bg-gris-10 py-12 px-12'>
          <div className='text-3xl text-center font-bold text-morado-primario'>Queremos brindarte el mejor servicio</div>
          <div className='text-gris-80 mt-8 text-xl'>
            <div className='mb-4'>Lamentamos cualquier situación que te haya generado un momento incómodo, tu opinión es muy importante para seguir mejorando nuestra atención, así como nuestros servicios.</div>
            <div>Para poder ayudarte mejor, queremos que tengas clara la diferencia entre:</div>
          </div>
          <div className='flex my-8 justify-center'>
            <div className='flex flex-col items-center max-w-sm'>
              <div className='flex flex-row items-center space-x-4'>
                <div>
                  <img src='/sadIcon.png' alt='icono' />
                </div>
                <div className='text-3xl text-morado-primario font-bold'>Queja</div>
              </div>
              <div className='text-base mt-6'>Estás inconforme con la <span className='font-bold'>atención</span> que has recibido por parte de Liinx, no con el producto o servicio.</div>
            </div>
            <div className='flex flex-col border-l border-gris-40 items-center pl-10 max-w-sm'>
              <div className='flex flex-row items-center space-x-4'>
                <div>
                  <img src='/CircleIcon.png' alt='icono' />
                </div>
                <div className='text-3xl text-morado-primario font-bold'>Reclamo</div>
              </div>
              <div className='text-base mt-6'>Estás inconforme con el producto o servico que Liinx te ha brindado.</div>
            </div>
          </div>
          <div className='text-gris-80'>
            <div>Ahora que ya tienes ambos términos claros, puedes:</div>
            <ul className='list-disc list-inside mt-4'>
              <li>Comunicarte con nosotros <span className='font-bold text-naranja-primario'>vía whatsapp</span> para resliver tu caso de manera inmediata.</li>
              <li>Escríbirnos al mail <span className='text-naranja-primario'>atención@liinx.com,</span> un asesor se comunicará contigo y te acompañará hasta resliver tu problema.</li>
              <li>Ir a nuestro Libro de Reclamaciones</li>
            </ul>
          </div>
          <div className='mt-16 space-x-20 flex justify-center'>
            <Link to='/reclamaciones-form'><button className='text-verde-secundario py-2 px-4 border rounded border-verde-secundario'>Libro de Reclamaciones</button></Link>
            <button className='bg-morado-primario px-14 py-2 rounded text-blanco'>Ir a whatsapp</button>
          </div>
        </div>
      </section>

    </>
  )
}

export default LibroReclamaciones