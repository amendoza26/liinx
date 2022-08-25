import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { PeruData } from '../components/PeruData'
import { UserContext } from '../UserContext'

const Config = () => {

    const { user, setUser } = useContext(UserContext)
    const [edit, setEdit] = useState(false)
    const [state, setState] = useState([])
    const [img, setImg] = useState({});
    const [preview, setPreview] = useState(false)
    const fileInputRef = useRef();

    const onImageChange = (e) => {
        fileInputRef.current.click();
        const [file] = e.target.files;
        // setImg({...img, [e.target.name]:e.target.value})
        setImg(URL.createObjectURL(file));
        setPreview(true)
        console.log(img)
        console.log(file)
    };

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

    const changePassword = (e) => {
        e.preventDefault()
        setUser(user.password === "123")
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
                                <button className='text-verde-secundario border-verde-secundario py-2 px-14 border rounded'>Guardar cambios</button>
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
                                <button className='text-verde-secundario border-verde-secundario py-2 px-14 border rounded'>Editar datos</button>
                            </div>
                        </> 
                        }
                    </form>
                    
                </div>
                
            </section>
            <section className='flex mt-6 space-x-6'>
                <div className='w-1/2 py-6 px-10 border border-gris-30 rounded-lg'>
                    <div className='text-lg font-bold text-morado-hover mb-12'>Cambio de contraseña</div>
                    <div>
                        <form onSubmit={changePassword}>
                            <div className='flex space-y-4 flex-col mb-16'>
                                <div className='flex flex-col'>
                                    <input type='password' name='password' value={user.password} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2'></input>
                                </div>
                                <div className='flex flex-col'>
                                    <input type='password' name='newPassword' onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' placeholder='Escribe tu nueva contraseña'></input>
                                </div>
                                <div className='flex flex-col'>
                                    <input type='password' name='confirmPassword' onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' placeholder='Repite tu nueva contraseña'></input>
                                </div>
                            </div>
                            {user.newPassword === user.confirmPassword ?
                            <div className='flex flex-col w-auto mt-10'>
                                <button type='submit' className='text-verde-secundario border-verde-secundario py-2 px-14 border rounded mx-auto'>Cambiar contraseña</button>
                            </div>
                            :
                            <div className='flex flex-col w-auto mt-10'>
                                <button className='text-gris-40 border-gris-40 py-2 px-14 border rounded mx-auto'>Cambiar contraseña</button>
                            </div>
                            }
                            
                        </form>
                    </div>
                </div>
                <div className='w-1/2 py-6 px-10 border border-gris-30 rounded-lg'>
                    <div className='text-lg font-bold text-morado-hover mb-12'>Foto de perfil</div>
                    <div>
                        <form>
                            <div className='flex space-y-4 flex-col mb-16'>
                                {preview ? 
                                    <img src={img} alt='img' className='max-h-40 mx-auto' />
                                :
                                <>
                                <button className='mx-auto' onClick={(e) => {
                                    e.preventDefault();
                                    fileInputRef.current.click();
                                }}>
                                        <div className='py-7 px-4 border border-dotted border-gris-40 mx-auto w-auto mb-4'>
                                            <div className='mb-4'>+</div>
                                            <div className='text-gris-40 text-sm'>Upload</div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <span>Formato PNG, JPG o PDF</span>
                                            <span>Medida 180x180 px</span>
                                            <span>Tamaño máximo 2MB</span>
                                        </div>
                                </button>
                                <input type='file' name='reciboLuz' className='hidden' onChange={onImageChange} ref={fileInputRef} />
                                </>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Config