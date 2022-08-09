import React, { useContext } from 'react'

import { UserContext } from '../UserContext'

const ValidacionStep2 = () => {

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
                        
                    </form>
                    
                </div>
            </section>
        </div>
    </>
  )
}

export default ValidacionStep2