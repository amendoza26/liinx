import { useState } from 'react'

const Private = () => {
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

  return (
    <div className='flex'>
        <section className='bg-verde-hover'>
            <div className={` ${open ? "w-80" : "w-20 "} bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
                
                <div className="flex gap-x-4 items-center">
                    <img src="./smalll.png" alt='logo' />
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
                    <img src={`./${Menu.src}.png`} />
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
                        <img src="./menu.png" alt='menu' onClick={() => setOpen(!open)} />
                    </div>
                    <div className='flex space-x-10'>
                        <img src='./support_agent.png' alt='soporte' />
                        <img src='./bell+number.png' alt='notificaciones' />
                        <img src='./account_circle.png' alt='cuenta' />
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
            <div className='my-8 container mx-auto'>
                <div className='text-morado-primario text-xl font-bold '>Resumen</div>
                <div className='mt-8 flex'>
                    <div className='flex space-x-10 flex-wrap'>
                        <div className='my-6 max-w-xs'>
                            <div>
                                <img src='./Pesa.png' alt='pesa' />
                            </div>
                            <div className='text-lg font-bold text-morado-primario'>Incrementa tu nivel de verificación</div>
                            <button>
                                <img src='./ButtonLink.png' alt='boton' />
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className='font-bold text-morado-primario'>Mis notificaciones</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Private