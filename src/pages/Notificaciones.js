import { useState } from 'react';
import { Link } from 'react-router-dom'

const Notificaciones = () => {

    const [open, setOpen] = useState(true);
    const [show, setShow] = useState(true)

    const Menus = [
        { title: "Mis datos", src: "fact_check" },
        { title: "Mi actividad", src: "launch" },
        { title: "Información", src: "content_paste" },
        { title: "Beneficios ", src: "focus" },
        { title: "Empresas", src: "store" },
        { title: "Contáctanos", src: "contact_support" },
    ];

    const Notificaciones = [
        { title: "Bienvenido a tu sitio privado", text: "Revisa nuestras preguntas frecuentes, para que puedas despejar todas tus dudas"},
        { title: "Completa tus datos personales", text: "Para que puedas acceder a nuestro servicio de validación básico. Hazlo aquí"},
        { title: "Realiza tu validación avanzada", text: "Revisa nuestras preguntas frecuentes, para que puedas despejar todas tus dudas"}
    ]

    return (
        <div className='flex'>
            
            <section className='w-full'>
                <div className='my-8 mx-10'>
                    <div className='mt-8 flex justify-center'>
                        
                        <div className='flex flex-col border border-gris-30 w-1/3 px-8 pt-6 rounded-lg'>
                            <div className='font-bold text-morado-primario text-center w-full mb-4'>Mis notificaciones</div>
                            {Notificaciones.map((noti, i) => (
                                <div className='px-6 py-4 shadow mb-1 flex'>
                                    <div className='w-6'>
                                        <img className='' src='../infoCircle.png' alt='circulo' />
                                    </div>
                                    <div className='flex-1 ml-4'>
                                        <div className='flex flex-row justify-between'><span className='text-gris-oscuro font-bold'>{noti.title}</span><button className='text-gris-60'>X</button></div>
                                        <div className='mt-1'>{noti.text}</div>
                                        <div className='flex justify-end mt-1 text-verde-secundario'><button>Marcar como leído</button></div>
                                    </div>
                                </div>
                            ))}
                            <Link to='/private/notificaciones'><div className='mt-6 flex justify-center'><button><img src='../buttonLink.png' alt='boton' /></button></div></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      )
}

export default Notificaciones