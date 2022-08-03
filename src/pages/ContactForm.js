import { useState } from 'react'
import ModalContact from '../components/ModalContact'

const ContactForm = () => {

    const [openModal, setOpenModal] = useState(false)

    const modalOpen = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }

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
                                <input className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Apellido Paterno</label>
                                <input className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                            </div>
                        </div>
                        <div className='flex space-x-12 mb-16'>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Apellido Materno</label>
                                <input className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Correo elctrónico</label>
                                <input className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                            </div>
                        </div>
                        <div className='flex space-x-12 mb-16'>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Celular</label>
                                <input className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>País</label>
                                <select className='shadow border border-gris-40 rounded w-full px-3 py-2' type='text'>
                                    <option>Perú</option>
                                    <option>Argentina</option>
                                    <option>Colombia</option>
                                    <option>Chile</option>
                                </select>
                            </div>                            
                        </div>
                        <div className='flex space-x-12 mb-16'>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Ciudad</label>
                                <select className='shadow border border-gris-40 rounded w-full px-3 py-2' type='text'>
                                    <option>Lima</option>
                                    <option>Arequipa</option>
                                </select>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Distrito</label>
                                <select className='shadow border border-gris-40 rounded w-full px-3 py-2' type='text'>
                                    <option>Ate</option>
                                    <option>Barranco</option>
                                    <option>Miraflores</option>
                                    <option>Surquillo</option>
                                    <option>San Borja</option>
                                    <option>Santiago de Surco</option>
                                    <option>Surquillo</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-check mb-4 py-4 px-4">
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
                        </div>
                        <div className='flex justify-end'>
                            <button onClick={modalOpen} className='text-blanco bg-morado-primario py-2 px-14 border rounded'>Guardar datos</button>
                        </div>
                    </form>
                    { openModal && <ModalContact setOpenModal={setOpenModal} /> }
                </div>
            </section>
        </div>
    </>
  )
}

export default ContactForm