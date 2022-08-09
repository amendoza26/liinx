import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../UserContext'

const ValidacionAvanzada = () => {

    const { user, setUser } = useContext(UserContext)
    const [situation, setSituation] = useState("")

    const cambioRadio = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
        setSituation(e.target.value)
    }

    // useEffect(() => {
    //     setTimeout()
    // }, [])
    

  return (
    <>
        <div className='px-24 my-8'>
            <section className='py-6 px-10 border border-gris-30 rounded-lg'>
                <div className='text-4xl font-bold text-morado-hover mb-12'>Validación básica</div>
                <div>
                    <form>
                        <div className='flex space-x-12 mb-16'>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'><span className='text-naranja-primario'>*</span>Dirección</label>
                                <input name='address' value={user.address} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Distrito</label>
                                <input value={user.distrito}className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                            </div>
                        </div>
                        <div className='flex space-x-12 mb-16'>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Documento de Identidad</label>
                                <select className='shadow border border-gris-40 rounded w-full px-3 py-2' name='documento' value={user.documento} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) }>
                                    <option>Elegir Documeto</option>
                                    <option value='DNI'>DNI</option>
                                    <option value='CE'>Carnet de extranjería</option>
                                </select>
                            </div> 
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Correo elctrónico</label>
                                <input type='email' name='email' placeholder='ejemplo@email.com' value={user.email} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2'></input>
                            </div>                           
                        </div>
                        <div className="form-check mb-4 py-4 px-4">
                            <div className='space-x-8'>
                                <label className='space-x-2' htmlFor='dependiente'>
                                    <input className='accent-morado-primario' type='radio' name='situation' value='dependiente' id='dependiente' checked={situation === 'dependiente' ? true : false} onChange={cambioRadio} />
                                    <span>Dependiente</span>
                                </label>
                                <label className='space-x-2' htmlFor='independiente'>
                                    <input className='accent-morado-primario' type='radio' name='situation' value='independiente' id='independiente' checked={situation === 'independiente' ? true : false} onChange={cambioRadio} />
                                    <span>Independiente</span>
                                </label>
                                <label className='space-x-2' htmlFor='independiente'>
                                    <input className='accent-morado-primario' type='radio' name='situation' value='pensionado' id='pensionado' checked={situation === 'pensionado' ? true : false} onChange={cambioRadio} />
                                    <span>Pensionado</span>
                                </label>
                            </div>
                        </div>
                        {situation === 'dependiente' ? 
                        <>
                            <div className='flex space-x-12 mb-16'>
                                <div className='flex flex-1 flex-col'>
                                    <label className='mb-2'><span className='text-naranja-primario'>*</span>Empresa en la que laboras</label>
                                    <input name='company' value={user.company} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                                </div>
                                <div className='flex flex-1 flex-col'>
                                    <label className='mb-2'><span className='text-naranja-primario'>*</span>Actividad económica</label>
                                    <select name='activity' value={user.activity} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow border border-gris-40 rounded w-full px-3 py-2'>
                                        <option>Elegir Actividad</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex space-x-12 mb-16'>
                                <div className='flex flex-1 flex-col'>
                                    <label className='mb-2'><span className='text-naranja-primario'>*</span>Empresa en la que laboras</label>
                                    <input name='company' value={user.company} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                                </div>
                                <div className='flex flex-1 flex-col'>
                                    <label className='mb-2'><span className='text-naranja-primario'>*</span>Actividad económica</label>
                                    <select name='activity' value={user.activity} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow border border-gris-40 rounded w-full px-3 py-2'>
                                        <option>Elegir Actividad</option>
                                    </select>
                                </div>
                            </div>
                        </>
                        : null}
                        {situation === 'independiente' ? 
                            <>
                                <div className='flex space-x-12 mb-16'>
                                    <div className='flex flex-1 flex-col'>
                                        <label className='mb-2'><span className='text-naranja-primario'>*</span>Empresa en la que laboras</label>
                                        <input name='company' value={user.company} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                                    </div>
                                    <div className='flex flex-1 flex-col'>
                                        <label className='mb-2'><span className='text-naranja-primario'>*</span>Actividad económica</label>
                                        <select name='activity' value={user.activity} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow border border-gris-40 rounded w-full px-3 py-2'>
                                            <option>Elegir Actividad</option>
                                        </select>
                                    </div>
                                </div>
                            </> 
                        : null}
                        <div className='flex justify-end'>
                            <button className='text-verde-secundario border-verde-secundario py-2 px-14 border rounded'>Guardar datos</button>
                        </div>
                    </form>
                </div>
                
            </section>
            <div className="form-check mb-4 py-4 px-4">
                <input className=" h-4 w-4 border-4 border-morado-primario rounded-sm bg-white transition duration-200 mt-1 align-top accent-morado-primario float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" required="required" />
                <label className="form-check-label inline-block text-gris-80" for="flexCheckDefault" aria-required="true">
                    Acepto la política de privacidad
                </label>
            </div>
            <div className='flex justify-end'>
                <button className='text-blanco bg-morado-primario py-2 px-14 border rounded'>Siguiente</button>
            </div>
        </div>
    </>
  )
}

export default ValidacionAvanzada