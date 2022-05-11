import React from 'react'
import { Link } from 'react-router-dom'

const LibroReclamaciones = () => {
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

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default LibroReclamaciones