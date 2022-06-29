import { useState } from 'react'
import Modal from '../Modal'

const Checkbox = ({user, setUser}) => {

    const [openModal, setOpenModal] = useState(true)

  return (
    <>
        <section>
            <div className='container mx-auto mt-14 mb-44 max-w-md'>
                <form >
                    <div className='mb-4 text-morado-primario text-3xl font-bold'>Registro</div>
                    <div className='text-gris-80 mb-8'>Tu cuenta gratis en solo tres simples pasos. Tendrás que validar tu email, ten tu bandeja de entrada a la vista. </div>
                    <div className='flex py-4 px-4 items-start bg-gris-10 space-x-4 mb-8'>
                        <img className='object-contain' src='/icon.png' alt='icono' />
                        <div className='text-xs text-gris-80'>La privacidad de tu información es nuestro principal compromiso. Para tratar tus datos personales necesitamos tu consentimiento. Tus datos se compartirán solo con quienes tú autorices , el control es tuyo.</div>
                        {/* <div className='text-2xl text-gris-80'>X</div> */}
                    </div>
                    <div className='mb-8'>
                        <div className='border border-gris-40 rounded-lg py-8 px-8'>
                            <label className=''>Ingresa tu correo electrónico</label>
                            <input type='email' name='email' placeholder='ejemplo@email.com' value={user.email} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='pl-2 appearance-none border-b border-gris-40 rounded w-full mt-8' />
                        </div>
                    </div>
                    <div class="form-check mb-8 bg-gris-10 py-4 px-4">
                        <input class=" h-4 w-4 border-4 border-morado-primario rounded-sm bg-white transition duration-200 mt-1 align-top accent-morado-primario float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" required="required" checked="checked" />
                        <label class="form-check-label inline-block text-gris-80" for="flexCheckDefault" aria-required="true">
                            Acepto la política de privacidad
                        </label>
                    </div>
                    <div class="form-check mb-8 bg-gris-10 py-4 px-4">
                        <input class="h-4 w-4 border-4 border-morado-primario rounded-sm bg-white transition duration-200 mt-1 align-top accent-morado-primario float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" required="required" checked="checked" />
                        <label class="form-check-label inline-block text-gris-80" for="flexCheckDefault" aria-required="true">
                            Acepto el envío de comunicaciones comerciales
                        </label>
                    </div>
                    <div className='bg-lila-claro rounded-lg p-4'>
                      <div className='text-sm text-gris-oscuro'>Te hemos enviado un correo electrónico, para confirmar que eres tú ingresa y dale clic a la opción de validar.</div>
                    </div>
                </form>
                { openModal && <Modal setOpenModal={setOpenModal} /> }
                
            </div>
        </section>
    </>
  )
}

export default Checkbox