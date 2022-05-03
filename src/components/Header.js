import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='flex flex-col'>
            <div className='bg-gris-10'>
                <div className='flex justify-between container m-auto py-3' >
                    <div>
                        <img src='/small.png' alt='Logo' />
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
                            <li className='pr-14 text-morado-primario'><button>Nosotros</button></li>
                            <li className='pr-14 text-morado-primario'><button>Beneficios</button></li>
                            <li className='pr-14 text-morado-primario'><button>Identidad digital</button></li>
                            <li className='pr-14 text-morado-primario'><button>Seguridad</button></li>
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