import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from "react-router-dom"

const PrivateLayout = () => {

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
        <section className='shadow-xl shadow-gris-40 z-40'>
            <div className={` ${open ? "w-80" : "w-20 "} bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
                
                <div className="flex gap-x-4 items-center">
                    <Link to="/"><img src="./small.png" alt='logo' /></Link>
                </div>
                <ul className="pt-6">
                {Menus.map((Menu, index) => (
                    <Link to='contact-form'>
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
                    </Link>
                ))}
                </ul>
            </div>
        </section>
        <section className='w-full'>
            <div className="container mx-auto my-4">
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
            <Outlet />
        </section>
    </div>
  )
}

export default PrivateLayout