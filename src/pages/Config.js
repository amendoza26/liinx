import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { PeruData } from '../components/PeruData'
import { UserContext } from '../UserContext'

const Config = () => {

    const { user, setUser } = useContext(UserContext)
    const [edit, setEdit] = useState(false)
    const [state, setState] = useState([])

    const editData = (e) => {
        e.preventDefault();
        setEdit(true)
    }

    const handleCountry = (e) => {
        const getCountryId = e.target.value;
        console.log(getCountryId)
        const getStateData = PeruData.find(country => country.nombre === getCountryId).departamentos;
        setState(getStateData)
        setUser({...user, [e.target.name]:e.target.value})
    }

  return (
    <>
        <div className='px-24 my-8'>
            <section className='py-6 px-10 border border-gris-30 rounded-lg'>
                <div className='text-lg font-bold text-morado-hover mb-12'>Datos personales</div>
                <div>
                    <form className='text-sm'>
                        {edit 
                        ?<>
                            <div className='flex space-x-12 mb-16'>
                                <div className='flex flex-1 flex-col'>
                                    <label className='mb-2'>Correo elctrónico</label>
                                    <input name='email' value={user.email} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2'></input>
                                </div>
                                <div className='flex flex-1 flex-col'>
                                    <label className='mb-2'>Celular</label>
                                    <input pattern='[0-9]*' name='phone' value={user.phone} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                                </div>
                            </div>
                            <div className='flex space-x-12 mb-16'>
                                <div className='flex flex-1 flex-col'>
                                    <label className='mb-2'>País</label>
                                    <select className='shadow border border-gris-40 rounded w-full px-3 py-2' name='pais' value={user.pais} onChange={(e) => handleCountry(e) }>
                                        <option>Elegir pais</option>
                                        {PeruData.map(( getCountry, index ) => (
                                            <option value={getCountry.nombre} key={index}>{getCountry.nombre}</option>
                                        ))}
                                    </select>
                                </div>   
                                <div className='flex flex-1 flex-col'>
                                    <label className='mb-2'>Ciudad</label>
                                    <select  className='shadow border border-gris-40 rounded w-full px-3 py-2' name='ciudad' value={user.ciudad} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) }>
                                        <option>Elegir Ciudad</option>
                                        {state.map((getstate, index) => (
                                            <option value={getstate.name} key={index}>{getstate.name}</option>
                                        ))}
                                    </select>
                                </div>                         
                            </div>
                            <div className='flex space-x-12 mb-16'>
                                <div className='flex flex-1 flex-col'>
                                    <label className='mb-2'>Dirección</label>
                                    <input name='address' value={user.address} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                                </div>   
                                <div className='flex flex-1 flex-col'>
                                    <label className='mb-2'>Distrito</label>
                                    <select className='shadow border border-gris-40 rounded w-full px-3 py-2' name='distrito' value={user.distrito} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) }>
                                        <option>Elegir Distrito</option>
                                        <option value="Ate">Ate</option>
                                        <option value="Barranco">Barranco</option>
                                        <option value="Miraflores">Miraflores</option>
                                        <option value="Surquillo">Surquillo</option>
                                        <option value="San Borja">San Borja</option>
                                        <option value="Santiago de Surco">Santiago de Surco</option>
                                        <option value="Surquillo">Surquillo</option>
                                    </select>
                                </div>                         
                            </div>
                            
                            <div className='flex justify-end'>
                                <button className='text-verde-secundario border-verde-secundario py-2 px-14 border rounded'>Guardar datos</button>
                            </div>
                        </>
                        :<>
                            <div className='flex space-x-12 mb-16'>
                                <div className='flex flex-1 flex-col'>
                                    <label className='mb-2'>Correo elctrónico</label>
                                    <input value={user.email} className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2'></input>
                                </div>
                                <div className='flex flex-1 flex-col'>
                                    <label className='mb-2'>Celular</label>
                                    <input value={user.phone} className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                                </div>
                            </div>
                            <div className='flex space-x-12 mb-16'>
                                <div className='flex flex-1 flex-col'>
                                    <label className='mb-2'>País</label>
                                    <input value={user.pais} className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                                </div>   
                                <div className='flex flex-1 flex-col'>
                                    <label className='mb-2'>Ciudad</label>
                                    <input value={user.ciudad} className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                                </div>                         
                            </div>
                            <div className='flex space-x-12 mb-16'>
                                <div className='flex flex-1 flex-col'>
                                    <label className='mb-2'>Dirección</label>
                                    <input  value={user.address} className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                                </div>   
                                <div className='flex flex-1 flex-col'>
                                    <label className='mb-2'>Distrito</label>
                                    <input value={user.distrito} className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                                </div>                         
                            </div>
                            
                            <div className='flex justify-end'>
                                <button onClick={editData} className='text-blanco bg-morado-primario py-2 px-14 border rounded'>Editar datos</button>
                            </div>
                        </> 
                        }
                    </form>
                    
                </div>
            </section>
        </div>
    </>
  )
}

export default Config