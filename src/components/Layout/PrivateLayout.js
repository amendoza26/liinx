import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from "react-router-dom"
import { SidebarData } from '../SidebarData';

const PrivateLayout = () => {

  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(true)

//   const Menus = [
//     {
//         title: "Mis datos2", 
//         src: "fact_check", 
//         submenu: true, 
//         submenuItems: [
//             {
//                 title: "Datos Personales",
//                 path: "contact-form"
//             },
//             {
//                 title: "Validación avanzada",
//                 path: "validacion-avanzada"
//             },
//             {
//                 title: "Configuración",
//                 path: "configuracion"
//             }
//         ] 
//     },
//     { 
//         title: "Mi actividad", 
//         src: "launch",
//         submenu: true, 
//         submenuItems: [
//             {
//                 title: "Mis consentimientos",
//                 path: "consentimiento"
//             },
//             {
//                 title: "Mi actividad reciente",
//                 path: "actividad-reciente"
//             },
//             {
//                 title: "Mis afiliaciones",
//                 path: "afiliaciones"
//             }
//         ] 
//     },
//       { title: "Información", src: "content_paste" },
//       { title: "Beneficios ", src: "focus" },
//       { title: "Empresas", src: "store" },
//       { title: "Contáctanos", src: "contact_support" },
//   ];
  
  const [submenuOpen, setSubmenuOpen] = useState(false)

  const showSubMenu = () => setSubmenuOpen(!submenuOpen)

  return (
    <div className='flex'>
        <section className='shadow-xl shadow-gris-40 z-40'>
            <div className={` ${open ? "w-80" : "w-20 "} bg-dark-purple h-screen pt-8 relative duration-300`}>
                
                <div className="flex gap-x-4 items-center px-5 ">
                    <Link to="/"><img src="./small.png" alt='logo' /></Link>
                </div>
                <ul className="pt-6 ">
                {SidebarData.map((menu, index) => (
                    <>
                        <li
                            key={index}
                            className={`flex px-5 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                            ${menu.gap ? "mt-9" : "mt-2"} ${
                                index === 0 && "bg-light-white"
                            } `}
                            >
                            <img src={`./${menu.src}.png`} />
                            <span className={`${!open && "hidden"} origin-left duration-200 `}>
                                {menu.title}
                            </span>
                            {menu.submenuItems 
                                ? <img onClick={menu.submenuItems && showSubMenu} src='' alt='imagen'></img>
                                : ""
                            }
                        </li>
                        {menu.submenuItems && submenuOpen && (
                            <ul className='bg-gris-10 transition-all duration-300'>
                                {menu.submenuItems.map((submenuItem, index) => (
                                    <li key={index} className="text-gris-oscuro px-10 py-2">
                                        <Link to={submenuItem.path}>{submenuItem.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    
                    </>
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