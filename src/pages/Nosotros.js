import React from 'react'
import { Link } from 'react-router-dom'

const Nosotros = () => {
  return (
    <>
        <section className='bg-lila-fondo'>
            <div className='container mx-auto pt-10 pb-14 flex flex-col'>
                <div className='flex flex-col'>
                    <div className='flex flex-row text-sm text-gris-80 mb-8'>
                        <Link to='/'>Inicio </Link>/<Link to='/nosotros'> Nosotros</Link>   
                    </div>
                    <div className='text-morado-primario text-4xl mb-4'>
                        Quienes somos
                    </div>
                    <div className='text-verde-secundario text-3xl'>
                        "Simple, Seguro, Sin complicaciones"
                    </div>
                </div>
                <div className='flex justify-center mt-10'>
                    <img src='/nosotros1.png' alt='nosotros' />
                </div>
            </div>
            <div className='relative'>
                <img className='absolute bottom-0 right-4' src='/nosotrosFlotante.png' alt='banner1' />
            </div>
        </section>
        <section>
            <div className='container mx-auto py-24'>
                <div className='flex justify-center text-center text-morado-primario text-3xl font-bold m-12'>
                    ¿Cómo lo hacemos?
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col py-8 px-6 max-w-md border rounded-lg border-verde-claro'>
                        <img className='mb-8' src='/IlustAgilidad.png' alt='Ilustracion Agilidad' />
                        <div className='text-2xl text-morado-primario mb-4 text-center'>Agilidad</div>
                        <div className='text-gris-60'>Nuestra capacidad de obtener información de manera precisa, ordenada y sin excesos.</div>
                    </div>
                    <div className='flex flex-col py-8 px-6 max-w-md border rounded-lg border-verde-claro'>
                        <img className='mb-8' src='/IlustSecurity.png' alt='Ilustracion Seguridad' />
                        <div className='text-2xl text-morado-primario mb-4 text-center'>Seguridad</div>
                        <div className='text-gris-60'>Nuestra garantía de que tu información será resguardada sin filtraciones o adulteraciones.</div>
                    </div>
                    <div className='flex flex-col py-8 px-6 max-w-md border rounded-lg border-verde-claro'>
                        <img className='mb-8' src='/IlustSimple.png' alt='Ilustracion Simple' />
                        <div className='text-2xl text-morado-primario mb-4 text-center'>Simplicidad</div>
                        <div className='text-gris-60'>Nuestro compromiso de ofrecer una solución sin complicaciones o dificultades.</div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Nosotros