import React from 'react'

const ReclamacionesForm = () => {
  return (
    <>
        <div className='container mx-auto mt-24 mb-16'>
            <section>
                <div className='text-4xl font-bold text-morado-hover text-center mb-12'>Libro de reclamaciones</div>
                <div>
                    <form>
                        <div className='flex space-x-6 mb-16'>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Perfil</label>
                                <select className='shadow border border-gris-40 rounded w-full focus:outline-none focus:shadow-outline'>
                                    <option>Usuario</option>
                                    <option>Empresa</option>
                                </select>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Nombre</label>
                                <input className='shadow appearance-none border border-gris-40 rounded w-full' type='text'></input>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Apellidos</label>
                                <input className='shadow appearance-none border border-gris-40 rounded w-full' type='text'></input>
                            </div>
                        </div>
                        <div className='flex space-x-6 mb-16'>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Razón social</label>
                                <input className='shadow appearance-none border border-gris-40 rounded w-full' type='text'></input>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>RUC</label>
                                <input className='shadow appearance-none border border-gris-40 rounded w-full' type='text'></input>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Correo elctrónico</label>
                                <input className='shadow appearance-none border border-gris-40 rounded w-full' type='text'></input>
                            </div>
                        </div>
                        <div className='flex space-x-6 mb-16'>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Documento de identidad</label>
                                <select className='shadow border border-gris-40 rounded w-full' type='text'>
                                    <option>DNI</option>
                                    <option>Carnet de extranjería</option>
                                    <option>Pasaporte</option>
                                </select>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Número de documento</label>
                                <input className='shadow appearance-none border border-gris-40 rounded w-full' type='text'></input>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Celular</label>
                                <input className='shadow appearance-none border border-gris-40 rounded w-full' type='text'></input>
                            </div>
                        </div>
                        <div className='flex space-x-6 mb-16'>
                            <div className='flex basis-1/3 flex-col'>
                                <label className='mb-2'>Tipo de solicitud</label>
                                <select className='shadow border border-gris-40 rounded w-full' type='text'>
                                    <option>Queja</option>
                                    <option>Reclamo</option>
                                </select>
                            </div>
                            <div className='flex basis-1/3 flex-col'>
                                
                                <input className=' w-full' type='text'></input>
                            </div>
                            <div className='flex basis-1/3 flex-col'>
                                
                                <input className=' w-full' type='text'></input>
                            </div>
                        </div>
                        <div className='flex space-x-6 mb-16'>
                            <div className='flex flex-col w-full'>
                                <label className='mb-2'>Descripción</label>
                                <input className='shadow appearance-none border border-gris-40 rounded w-full h-32' type='text'></input>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <button className='text-gris-40 py-2 px-14 border rounded border-gris-40'>Enviar</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </>
  )
}

export default ReclamacionesForm