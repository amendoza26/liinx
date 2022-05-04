import { Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <>
      <section className='container m-auto flex py-14 justify-evenly'>
          <div className='flex flex-col max-w-lg flex-1 justify-center'>
              <div className='text-4xl text-morado-hover font-bold'>Nada más fácil que compartir tus datos por internet de manera segura y gratuita</div>
              <div className='text-lg'>Somos una plataforma peruana, especializada en servicios de identidad digital</div>
              <div>
                <input className='border' placeholder='Ingresa tu correo'></input>
                <button>Registrate</button>
              </div>
          </div>
          <div className='flex'>
              <img src='/home-banner.png' alt='banner' />
          </div>
      </section>
      <section className='bg-gris-10 text-verde-secundario'>
        <div className='container m-auto py-12 text-center italic text-2xl'>
          “Liinx cuida tus datos personales, es tu llave para ingresar al mundo digital”
        </div>
      </section>

      <section>
        <div className='container m-auto flex flex-row justify-evenly py-20'>
          <div>
            <img src='/PerfilDigital.png' alt='Perfil Digital' />
          </div>
          <div className='flex flex-col justify-center'>
            <div className='text-morado-primario text-3xl pb-6'><span className='text-5xl'>Digitaliza </span>tu identidad por internet</div>
            <div className='text-base pb-10'>En nuestro sitio, el más seguro y ágil para facilitar un onboarding digital</div>
            <div className='text-verde-secundario'>
              <button className='py-2 px-4 border rounded border-verde-secundario'>Te contamos más</button>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-lila-fondo'>
        <div className='container m-auto py-24'>
          <div className='text-morado-primario font-bold text-center'>
            <Typography variant='h4' className='text-'>Beneficios de utilizar Liinx</Typography>
          </div>
          <div className='flex flex-row justify-evenly text-center pt-12'>
            <div>
              <img className='mx-auto' src='/seguridad.png' alt='seguridad' />
              <Typography variant='body1'>Ingresa tus datos una sola vez</Typography>
            </div>
            <div>
              <img className='mx-auto' src='/servicios.png' alt='servicios' />
              <Typography variant='body1'>Digitaliza tu identidad de manera segura</Typography>
            </div>
            <div>
              <img className='mx-auto' src='/evitarFraude.png' alt='fraude' />
              <Typography variant='body1'>Autoriza con quienes compartes tus datos</Typography>
            </div>
            <div>
              <img className='mx-auto' src='/empresas.png' alt='empresas' />
              <Typography variant='body1'>Accede a productos y servicios exclusivos</Typography>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container m-auto py-20 flex justify-evenly'>
          <div className='flex flex-col'>
            <div className='pb-2 text-3xl font-bold text-morado-primario'>¿Quieres crear tu identidad digital? </div>
            <div className='text-2xl text-verde-secundario font-bold'>Sigue estos tres pasos:</div>
            <div className='flex flex-col py-10'>
              <div className='flex flex-row pb-10'>
                <div className='pr-10'>
                  <img src='/icon-check.png' alt='icon check' />
                </div>
                <div className='flex flex-col'>
                  <div className='text-2xl text-verde-secundario font-bold'>Paso 1</div>
                  <div className='text-lg'>Ingresa y valida tu correo electrónico</div>
                </div>
              </div>
              <div className='flex flex-row pb-10'>
                <div className='pr-10'>
                  <img src='/icon-laptop.png' alt='icon laptop' />
                </div>
                <div className='flex flex-col'>
                  <div className='text-2xl text-verde-secundario font-bold'>Paso 2</div>
                  <div className='text-lg'>Completa tus datos personales</div>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='pr-10'>
                  <img src='/icon-like.png' alt='icon like' />
                </div>
                <div className='flex flex-col justify-evenly'>
                  <div className='text-2xl text-verde-secundario font-bold'>Paso 3</div>
                  <div className='text-lg'>Valida tu identidad y ¡conéctate!</div>
                </div>
              </div>
            </div>
            <button className='py-2 px-9 rounded mx-auto text-verde-secundario border border-verde-secundario'>Registrarme</button>
          </div>
          <div className='flex my-auto'>
            <img src='/creaPerfil.png' alt='Ilustracion crear perfil' />
          </div>
        </div>
      </section>

      <section className='bg-lila-fondo'>
        <div className='container mx-auto py-16 text-center'>
          <div className='text-3xl font-bold text-morado-primario pb-2' >Un servicio innovador y parte del mundo digital</div>
          <div className='text-2xl font-bold text-verde-secundario'>Nuestro compromiso, tu privacidad</div>
          <div className='flex flex-col pt-12'>
            <div className='flex flex-row justify-evenly'>
              <div className='flex flex-col max-w-sm'>
                <div className='mx-auto pb-6'><img src='/fingerprint.png' alt='fingerprint' /></div>
                <div className='text-2xl text-morado-primario pb-2'>Validamos tu identidad</div>
                <div className='text-gris-80'>A través de nuestra plataforma validamos tu identidad para que accedas a mayor cantidad de productos y servicios.</div>
              </div>
              <div className='flex flex-col max-w-sm'>
                <div className='mx-auto pb-6'><img src='/lock.png' alt='lock' /></div>
                <div className='text-2xl text-morado-primario pb-2'>Validamos tu identidad</div>
                <div className='text-gris-80'>Resguardamos la información que compartas con nosotros, haciendo uso de altos estándares de seguridad.</div>
              </div>
              <div className='flex flex-col max-w-sm'>
                <div className='mx-auto pb-6'><img src='/share.png' alt='share' /></div>
                <div className='text-2xl text-morado-primario pb-2'>Validamos tu identidad</div>
                <div className='text-gris-80'>Tu información será tratada por nosotros y por aquellas empresas con quienes tú decidas compartir tus datos.</div>
              </div>
            </div>
            <div className='flex flex-row pt-16 justify-evenly'>
              <div className='flex flex-col max-w-sm'>
                <div className='mx-auto pb-6'><img src='/mail.png' alt='mail' /></div>
                <div className='text-2xl text-morado-primario pb-2'>Validamos tu identidad</div>
                <div className='text-gris-80'>A través de nuestra plataforma validamos tu identidad para que accedas a mayor cantidad de productos y servicios.</div>
              </div>
              <div className='flex flex-col max-w-sm'>
                <div className='mx-auto pb-6'><img src='/security.png' alt='security' /></div>
                <div className='text-2xl text-morado-primario pb-2'>Validamos tu identidad</div>
                <div className='text-gris-80'>Resguardamos la información que compartas con nosotros, haciendo uso de altos estándares de seguridad.</div>
              </div>
              <div className='flex flex-col max-w-sm'>
                <div className='mx-auto pb-6'><img src='/connect.png' alt='connect' /></div>
                <div className='text-2xl text-morado-primario pb-2'>Validamos tu identidad</div>
                <div className='text-gris-80'>Tu información será tratada por nosotros y por aquellas empresas con quienes tú decidas compartir tus datos.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto py-10 flex flex-col'>
          <div className='text-2xl italic text-verde-secundario text-center mb-8'>“Regístrate y comienza a gestionar tus datos personales  de manera segura”</div>
          <div className='flex flex-row justify-center'>
            <button className='text-verde-secundario border rounded border-verde-secundario py-2 px-8 mr-16'>Contáctanos</button>
            <button className='text-blanco rounded border border-morado-primario bg-morado-primario py-2 px-8'>Comenzar</button>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Home