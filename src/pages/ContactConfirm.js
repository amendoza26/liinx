import { useContext, useState } from 'react'
import { UserContext } from '../UserContext'

const ContactConfirm = () => {

    const { user, setUser } = useContext(UserContext)

  return (
    <>
        <div className='px-24 my-8'>
            <section className='py-6 px-10 border border-gris-30 rounded-lg'>
                <div className='text-4xl font-bold text-morado-hover mb-12'>Validación básica</div>
                <div>
                    <form>
                        <div className='flex space-x-12 mb-16'>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Nombres</label>
                                <input name='name' value={user.name} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Apellido Paterno</label>
                                <input name='apPat' placeholder='Apellido Materno' value={user.apPat} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                            </div>
                        </div>
                        <div className='flex space-x-12 mb-16'>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Apellido Materno</label>
                                <input name='apMat' placeholder='Apellido Materno' value={user.apMat} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Correo elctrónico</label>
                                <input type='email' name='email' placeholder='ejemplo@email.com' value={user.email} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2'></input>
                            </div>
                        </div>
                        <div className='flex space-x-12 mb-16'>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Celular</label>
                                <input name='email' placeholder='ejemplo@email.com' value={user.phone} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>País</label>
                                <input className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'>
                                    Perú
                                </input>
                            </div>                            
                        </div>
                        <div className='flex space-x-12 mb-16'>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Ciudad</label>
                                <input className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'>
                                    Lima
                                </input>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Distrito</label>
                                <input className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'>
                                    Miraflores
                                </input>
                            </div>
                        </div>
                        {/* <div class="form-check mb-4 py-4 px-4">
                            <input class=" h-4 w-4 border-4 border-morado-primario rounded-sm bg-white transition duration-200 mt-1 align-top accent-morado-primario float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" required="required" />
                            <label class="form-check-label inline-block text-gris-80" for="flexCheckDefault" aria-required="true">
                                Acepto la política de privacidad
                            </label>
                        </div>
                        <div class="form-check mb-10 py-4 px-4">
                            <input class="h-4 w-4 border-4 border-morado-primario rounded-sm bg-white transition duration-200 mt-1 align-top accent-morado-primario float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" required="required" />
                            <label class="form-check-label inline-block text-gris-80" for="flexCheckDefault" aria-required="true">
                                Acepto el envío de comunicaciones comerciales
                            </label>
                        </div> */}
                        <div className='flex justify-end'>
                            <button className='text-blanco bg-morado-primario py-2 px-14 border rounded'>Validación avanzada</button>
                        </div>
                    </form>
                    
                </div>
            </section>
        </div>
    </>
  )
}

export default ContactConfirm