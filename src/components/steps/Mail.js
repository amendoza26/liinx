import React, { useState } from 'react'
import Modal from '../Modal';


const Mail = ({ user, setUser, page, setPage }) => {

    const [openModal, setOpenModal] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

  return (
    <div>
        <section>
            <div className='container mx-auto mt-14 mb-44 max-w-md'>
                <div onSubmit={handleSubmit}>
                    <div className='mb-4 text-morado-primario text-3xl font-bold'>Registro</div>
                    <div className='text-gris-80 mb-8'>Tu cuenta gratis en solo tres simples pasos. Tendrás que validar tu email, ten tu bandeja de entrada a la vista. </div>
                    <div className='flex py-4 px-4 items-start bg-gris-10 space-x-4 mb-8'>
                        <img className='object-contain' src='/icon.png' alt='icono' />
                        <div>La privacidad de tu información es nuestro principal compromiso. Para tratar tus datos personales necesitamos tu consentimiento. Tus datos se compartirán solo con quienes tú autorices , el control es tuyo.</div>
                        <div className='text-2xl text-gris-80'>X</div>
                    </div>
                    <div className='mb-8'>
                        <div className='border border-gris-40 rounded-lg py-8 px-8'>
                            <label className=''>Ingresa tu correo electrónico</label>
                            <input type='email' name='email' placeholder='ejemplo@email.com' value={user.email} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='pl-2 appearance-none border-b border-gris-40 rounded w-full mt-8' />
                        </div>
                    </div>
                    <div className="form-check mb-8 bg-gris-10 py-4 px-4">
                        <input className=" h-4 w-4 border-4 border-morado-primario rounded-sm bg-white transition duration-200 mt-1 align-top accent-morado-primario float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" required="required" />
                        <label className="form-check-label inline-block text-gris-80" for="flexCheckDefault" aria-required="true">
                            Acepto la <span className='text-morado-primario'>política de privacidad</span>
                        </label>
                    </div>
                    <div className="form-check mb-8 bg-gris-10 py-4 px-4">
                        <input className="h-4 w-4 border-4 border-morado-primario rounded-sm bg-white transition duration-200 mt-1 align-top accent-morado-primario float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" required="required" />
                        <label className="form-check-label inline-block text-gris-80" for="flexCheckDefault" aria-required="true">
                            Acepto el envío de <span className='text-morado-primario'>comunicaciones comerciales</span>
                        </label>
                    </div>
                    <div className='flex justify-center border rounded border-gris-40 w-60 mx-auto'>
                        <button type='submit' className='py-2 px-16 text-gris-40'>Verificar</button>
                    </div>
                </div>
                {openModal && <Modal setOpenModal={setOpenModal} />}
                
            </div>
        </section>
    </div>
  )
}

export default Mail