import { useState } from "react"

const Password = ({ values, setValues }) => {

  const [shown, setShown] = useState(false)

  const switchShown = (e) => {
    e.preventDefault()
    setShown(!shown)
  }

  return (
    <>
      <section>
          <div className='container mx-auto mt-14 mb-44 max-w-md'>
              <form>
                  <div className='mb-4 text-morado-primario text-3xl font-bold'>Registro</div>
                  <div className='text-gris-80 mb-8'>¡Último paso! por favor, crea tu contraseña</div>
                  {/* <div className='flex py-4 px-4 items-start bg-gris-10 space-x-4 mb-8'>
                      <img className='object-contain' src='/icon.png' alt='icono' />
                      <div>La privacidad de tu información es nuestro principal compromiso. Para tratar tus datos personales necesitamos tu consentimiento. Tus datos se compartirán solo con quienes tú autorices , el control es tuyo.</div>
                      <div className='text-2xl text-gris-80'>X</div>
                  </div> */}
                  <div className='mb-8'>
                      <div className='border border-gris-40 rounded-lg py-8 px-8'>
                          <label className=''>asdfasdf</label>
                          
                      </div>
                  </div>
                  <div className='mb-8'>
                      <div className='border border-gris-40 rounded-lg py-8 px-8'>
                          <div>
                            <label className=''>¡Último paso! por favor, crea tu contraseña</label>
                            <input type={shown ? 'text' : 'password'} name='password' placeholder='' className='pl-2 appearance-none border-b border-gris-40 rounded w-full mt-8' /> 
                            <button onClick={switchShown}>
                              {shown ? 'Ocultar' : 'Mostrar'}
                            </button>
                          </div>
                          <div className="mt-4">
                            <label className=''>Repite tu contraseña</label>
                            <input type={shown ? 'text' : 'password'} name='password' placeholder='' className='pl-2 appearance-none border-b border-gris-40 rounded w-full mt-8' /> 
                          </div>
                          
                      </div>
                  </div>
                  
                  <div className='flex justify-center border rounded border-gris-40 w-60 mx-auto'>
                      <button type='submit' className='py-2 px-16 text-gris-40'>Registrarme</button>
                  </div>
              </form>
              
              
          </div>
      </section>
    </>
  )
}

export default Password