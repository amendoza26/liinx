import React from 'react'

const Form = () => {
  return (
    <div>
        <div className='text-center text-morado-primario text-2xl mb-2'>¿Tienes alguna duda?</div>
        <div className='text-center text-naranja-primario mb-6'>Tus consultas son muy importantes para nosotros, por favor déjanos tu mensaje y nos pondremos en contacto contigo.</div>
        <form className='space-y-8'>
            <div className='flex flex-col space-y-2'>
                <label>Tus nombres y apellidos</label>
                <input className='py-2 px-3 border border-gris-40 rounded-sm' required placeholder='Necesitamos tu nombre completo'></input>
            </div>
            <div className='flex flex-col space-y-2'>
                <label>Tu correo electrónico</label>
                <input className='py-2 px-3 border border-gris-40 rounded-sm' required placeholder='micorreo@gmail.com'></input>
            </div>
            <div className='flex flex-col space-y-2'>
                <label>Tu mensaje</label>
                <input className='py-2 px-3 border border-gris-40 rounded-sm' required={true} placeholder='Escribe tu mensaje aquí'></input>
            </div>
        </form>
    </div>
  )
}

export default Form