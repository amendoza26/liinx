import { useState } from 'react'
import { Link } from 'react-router-dom';

const Private = () => {

    const Notificaciones = [
        { title: "Bienvenido a tu sitio privado", text: "Revisa nuestras preguntas frecuentes, para que puedas despejar todas tus dudas"},
        { title: "Completa tus datos personales", text: "Para que puedas acceder a nuestro servicio de validación básico. Hazlo aquí"},
        { title: "Realiza tu validación avanzada", text: "Revisa nuestras preguntas frecuentes, para que puedas despejar todas tus dudas"}
    ]

  return (
    
            <div className='my-8 mx-10'>
                <div className='text-morado-primario text-xl font-bold '>Resumen</div>
                <div className='mt-8 flex'>
                    <div className='flex w-2/3 flex-col space-y-10'>
                        <div className='flex flex=row space-x-10 justify-center'>
                            <div className='flex flex-col items-center text-center w-72 border border-verde-secundario rounded-lg py-6'>
                                <div>
                                    <img src='./Pesa.png' alt='pesa' />
                                </div>
                                <div className='text-lg font-bold text-morado-primario mt-6 w-60'>Incrementa tu nivel de verificación</div>
                                <button className='mt-10'>
                                    <img src='./ButtonLink.png' alt='boton' />
                                </button>
                            </div>
                            <div className='flex flex-col items-center text-center w-72  border border-verde-secundario rounded-lg py-6'>
                                <div className=''>
                                    <img src='./actualizar.png' alt='pesa' />
                                </div>
                                <div className='text-lg font-bold text-morado-primario mt-6 w-60'>Actualiza tus datos personales</div>
                                <div className=' flex justify-end'>
                                    <button className='mt-10'>
                                        <img src='./ButtonLink.png' alt='boton' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex=row space-x-10 justify-center'>
                            <div className='flex flex-col items-center text-center w-72 border border-verde-secundario rounded-lg py-6'>
                                <div>
                                    <img src='./descubre.png' alt='pesa' />
                                </div>
                                <div className='text-lg font-bold text-morado-primario mt-6 w-60'>Descubre nuestros nuevos afiliados</div>
                                <button className='mt-10'>
                                    <img src='./ButtonLink.png' alt='boton' />
                                </button>
                            </div>
                            <div className='flex flex-col items-center text-center w-72  border border-verde-secundario rounded-lg py-6 justify-between'>
                                <div className=''>
                                    <img src='./questions.png' alt='pesa' />
                                </div>
                                <div className='text-lg font-bold text-morado-primario mt-6 w-60'>Preguntas frecuentes</div>
                                <button className='mt-10'>
                                    <img src='./ButtonLink.png' alt='boton' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col border border-gris-30 w-1/3 px-8 pt-6 rounded-lg'>
                        <div className='font-bold text-morado-primario text-center w-full mb-4'>Mis notificaciones</div>
                        {Notificaciones.map((noti, i) => (
                            <div className='px-6 py-4 shadow mb-1 flex'>
                                <div className='w-6'>
                                    <img className='' src='./infoCircle.png' alt='circulo' />
                                </div>
                                <div className='flex-1 ml-4'>
                                    <div className='flex flex-row justify-between'><span className='text-gris-oscuro font-bold'>{noti.title}</span><button className='text-gris-60'>X</button></div>
                                    <div className='mt-1'>{noti.text}</div>
                                    <div className='flex justify-end mt-1 text-verde-secundario'><button>Marcar como leído</button></div>
                                </div>
                            </div>
                        ))}
                        <Link to='/private/notificaciones'><div className='mt-6 flex justify-center'><button><img src='./buttonLink.png' alt='boton' /></button></div></Link>
                    </div>
                </div>
            </div>
  )
}

export default Private