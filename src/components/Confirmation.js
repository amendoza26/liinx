import React from 'react'
import { Link } from 'react-router-dom';

const Confirmation = () => {

    
        const showdate = new Date();
        const displayDate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
        const displayHour = showdate.getHours()+':'+showdate.getMinutes()
    

  return (
    <div>
        <div className='text-center text-morado-primario text-2xl mb-3'>¡Hemos recibido tu mensaje!</div>
        <div className='text-naranja-primario mb-4'>Te responderemos en un plazo máximo de 48 horas.</div>
        <div className='text-morado-primario'>Fecha de envío: {displayDate}</div>
        <div className='text-morado-primario mb-10'>Hora: {displayHour}</div>
        <div className='text-morado-primario mb-4'>Te invitamos a conocer:</div>
        <div className='flex justify-between text-morado-primario mb-12'>
            <Link to='/terminos-y-condiciones'><button className='flex flex-row py-6 px-6 shadow space-x-4'><img src='/verified_user.png' alt='usuario verificado' /><span>Términos y condiciones</span></button></Link>
            <Link to='/preguntas-frecuentes'><button className='flex flex-row py-6 px-6 shadow space-x-4'><img src='/help.png' alt='FAQ' /><span>Preguntas frecuentes</span></button></Link>
        </div>
        <div className='flex justify-end'>
            <Link to='/'><button className='text-verde-secundario py-2 px-12 border border-verde-secundario rounded'>Ir al inicio</button></Link>
        </div>
    </div>
  )
}

export default Confirmation