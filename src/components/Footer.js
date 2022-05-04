import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='bg-gris-20'>
        <div className='container mx-auto flex text-morado-primario justify-between py-14'>
            <div className='flex flex-1 flex-col justify-between'>
                <div><img src='/small.png' alt='logo' /></div>
                <div className='flex flex-col'>
                    <div>Copyright © 2021 Liinx.</div>
                    <div>Todos los derechos reservados</div>
                </div>
                <div className='flex flex-row'>
                    <img src="/instagram.png" alt="instagram" />
                    <img src="/facebook.png" alt="facebook" />
                    <img src="/twitter.png" alt="twitter" />
                </div>
            </div>
            <div className='flex flex-1 justify-evenly'>
                <ul>
                    <li><button className='text-xl font-bold mb-6'><Link to='quienes-somos'>Quienes somos</Link></button></li>
                    <li><button className='mb-3'><Link to='nuestra-historia'>Nuestra historia</Link></button></li>
                    <li><button className='mb-3'><Link to='identificacion-digital'>Identificación digital</Link></button></li>
                    <li><button className='mb-3'><Link to='blog'>Blog</Link></button></li>
                </ul>
                <ul>
                    <li><button className='text-xl font-bold mb-6'><Link to='legal'>Legal</Link></button></li>
                    <li><button className='mb-3'><Link to='terminos-y-condiciones'>Términos y condiciones</Link></button></li>
                    <li><button className='mb-3'><Link to='politica-privacidad'>Política de privacidad</Link></button></li>
                </ul>
                <ul>
                    <li className='text-xl font-bold mb-6'>Alguna duda?</li>
                    <li><button className='mb-6'><Link to='contactanos'>Contáctanos</Link></button></li>
                    <li><img src='/libroReclamaciones.png' alt='libro de reclamaciones' /></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer