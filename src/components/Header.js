import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <>
        <section className='flex flex-col'>
            <div className='bg-gris-10'>
                <div className='flex justify-between container m-auto py-3' >
                    <div>
                        <Link to='/'><img src='/small.png' alt='Logo' /></Link>
                    </div>
                    <div className='flex items-center'>
                        <ul className='flex flex-row space-x-14 items-center'>
                            <li className='text-morado-hover'><button><Link to='/usuario'>Usuario</Link></button></li>
                            <li className='text-morado-primario'><button><Link to='/empresa'>Empresa</Link></button></li>
                            <li className='text-verde-secundario'><button className='px-4 py-2 rounded border border-verde-secundario'><Link to='/cuenta'>Mi cuenta</Link></button></li>
                            <li className='text-blanco'><button className='px-4 py-2 rounded border border-morado-primario bg-morado-primario'><Link to='/registro'>Registrate</Link></button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='shadow shadow-gris-40'>
                <div className='flex justify-between container m-auto py-3'>
                    <div>
                        <ul className='flex flex-row'>
                            <li className='pr-14 text-morado-primario'><button><HashLink to='/'>Nosotros</HashLink></button></li>
                            <li className='pr-14 text-morado-primario'><button><HashLink smooth to='/#beneficios'>Beneficios</HashLink></button></li>
                            <li className='pr-14 text-morado-primario'><button><HashLink smooth to='/#identidad-digital'>Identidad digital</HashLink></button></li>
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
            <div className='relative'>
                <img className='fixed bottom-0 right-4' src='/nosotrosFlotante.png' alt='banner1' />
            </div>
        </section>
    </>
  )
}

export default Header