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
            <section className='shadow-xl shadow-gris-40 z-40'>
                <div className={` ${open ? "w-80" : "w-20 "} bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
                    
                    <div className="flex gap-x-4 items-center">
                        <Link to="/"><img src="../small.png" alt='logo' /></Link>
                    </div>
                    <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                        key={index}
                        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                        ${Menu.gap ? "mt-9" : "mt-2"} ${
                            index === 0 && "bg-light-white"
                        } `}
                        >
                        <img src={`../${Menu.src}.png`} />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            {Menu.title}
                        </span>
                        </li>
                    ))}
                    </ul>
                </div>
            </section>
            <section className='w-full'>
                <div className="container mx-auto mt-4">
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <img src="../menu.png" alt='menu' onClick={() => setOpen(!open)} />
                        </div>
                        <div className='flex space-x-10'>
                            <img src='../support_agent.png' alt='soporte' />
                            <img src='../bell+number.png' alt='notificaciones' />
                            <img src='../account_circle.png' alt='cuenta' />
                        </div>
                    </div>
                </div>
                { show &&
                <div className='bg-verde-claro px-8 py-6 flex justify-between'>
                    <div className='text-verde-secundario'>¡Bienvenido a tu zona privada! Aquí puedes actualizar y editar tu información, así como conocer sobre las instituciones con las que puedes compartir tus datos, siempre y cuando TÚ lo autorices.</div>
                    <button className='w-6 h-6 bg-verde-secundario rounded-full text-blanco' onClick={() => setShow(false)}>
                        {/* <img src='./cancel.png' alt='cancelar' /> */}
                        X
                    </button>
                </div>
                }
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