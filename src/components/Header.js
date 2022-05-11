import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='flex flex-col'>
            <div className='bg-gris-10'>
                <div className='flex justify-between container m-auto py-3' >
                    <div>
                        <Link to='/'><img src='/small.png' alt='Logo' /></Link>
                    </div>
                    <div className='flex items-center'>
                        <ul className='flex flex-row'>
                            <li className='pl-14 text-morado-hover'><button><Link to='/usuario'>Usuario</Link></button></li>
                            <li className='pl-14 text-morado-primario'><button><Link to='/empresa'>Empresa</Link></button></li>
                            <li className='pl-14 text-morado-hover'><button><Link to='/cuenta'>Mi cuenta</Link></button></li>
                            <li className='pl-14 text-morado-hover'><button><Link to='/registro'>Registrate</Link></button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-between container m-auto py-3'>
                    <div>
                        <ul className='flex flex-row'>
                            <li className='pr-14 text-morado-primario'><button><Link to='/nosotros'>Nosotros</Link></button></li>
                            <li className='pr-14 text-morado-primario'><button><Link to='/beneficios'>Beneficios</Link></button></li>
                            <li className='pr-14 text-morado-primario'><button><Link to='/identidad-digital'>Identidad digital</Link></button></li>
                            <li className='pr-14 text-morado-primario'><button><Link to='/preguntas-frecuentes'>Seguridad</Link></button></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-row'>
                            <li className='pl-14'><button><img src='/question.png' alt='icono' /></button></li>
                            <li className='pl-14'><button><img src='/notifications.png' alt='icono' /></button></li>
                            <li className='pl-14'><button><img src='/search.png' alt='icono' /></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header