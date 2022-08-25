import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ModalContact from '../components/ModalContact'
import { PeruData } from '../components/PeruData'
import { UserContext } from '../UserContext'

const ContactForm = () => {

    const [confirm, setconfirm] = useState(true)
    const { user, setUser } = useContext(UserContext)
    const [openModal, setOpenModal] = useState(false)

    const [countryId, setcountryId] = useState('')
    const [state, setState] = useState([])

    const modalOpen = (e) => {
        e.preventDefault()
        setOpenModal(true)
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
        {confirm 
        ? <div className='px-24 my-8'>
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
                                <input name='phone' placeholder='999555111'  value={user.phone} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='tel'></input>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>País</label>
                                <select className='shadow border border-gris-40 rounded w-full px-3 py-2' name='pais' value={user.pais} onChange={(e) => handleCountry(e) }>
                                    <option>Elegir pais</option>
                                    {PeruData.map(( getCountry, index ) => (
                                        <option value={getCountry.nombre} key={index}>{getCountry.nombre}</option>
                                    ))}
                                </select>
                            </div>                            
                        </div>
                        <div className='flex space-x-12 mb-16'>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Ciudad</label>
                                <select  className='shadow border border-gris-40 rounded w-full px-3 py-2' name='ciudad' value={user.ciudad} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) }>
                                    <option>Elegir Ciudad</option>
                                    {state.map((getstate, index) => (
                                        <option value={getstate.name} key={index}>{getstate.name}</option>
                                    ))}
                                </select>
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
                    { openModal && <ModalContact setOpenModal={setOpenModal} setconfirm={setconfirm} /> }
                </div>
            </section>
        </div>
        
        :   <div className='px-24 my-8'>
            <section className='py-6 px-10 border border-gris-30 rounded-lg'>
                <div className='text-4xl font-bold text-morado-hover mb-12'>Validación básica</div>
                <div>
                    <form>
                        <div className='flex space-x-12 mb-16'>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Nombres</label>
                                <input className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text' value={user.name}></input>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className='mb-2'>Apellidos</label>
                                <input value={user.apPat + ' ' + user.apMat} className='shadow appearance-none border border-gris-40 rounded w-full px-3 py-2' type='text'></input>
                            </div>
                        </div>
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
                            
                            <div className='flex w-1/2 flex-col'>
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
                            <div className='w-1/2'></div>
                            
                        </div>
                        
                        <div className='flex justify-end'>
                            <Link to='/private/validacion-avanzada'><button className='text-blanco bg-morado-primario py-2 px-14 border rounded'>Validación avanzada</button></Link>
                        </div>
                    </form>
                    
                </div>
            </section>
        </div>
        }
    </>
    )
}

export default ContactForm