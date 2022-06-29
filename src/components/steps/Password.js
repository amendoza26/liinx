import axios from "axios"
import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../../UserContext"
import Modal2 from "../Modal2"

const Password = () => {

  const { user, setUser } = useContext(UserContext)
  const [shown, setShown] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const switchShown = (e) => {
    e.preventDefault()
    setShown(!shown)
  }

  const params = useParams();
  user.email = params.email

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const link = 'liinx-test.herokuapp.com'
        // liinx-test.herokuapp.com
        // http://localhost:4000
        const { data } = await axios.post(`${link}/api/user/signUp`, {
            ...user,
        })
        
        console.log(data);
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}


  return (
    <>
      <section>
          <div className='container mx-auto mt-14 mb-44 max-w-md'>
              <form onSubmit={handleSubmit}>
                  <div className='mb-4 text-morado-primario text-3xl font-bold'>Registro</div>
                  <div className='text-gris-80 mb-8'>¡Último paso! por favor, crea tu contraseña</div>
                  
                  <div className='mb-8'>
                      <div className='border border-gris-40 rounded-lg py-8 px-8'>
                          <label className=''>{user.email}</label>
                          
                      </div>
                  </div>
                  <div className='mb-8'>
                      <div className='border border-gris-40 rounded-lg py-8 px-8'>
                          <div>
                            <label className=''>¡Último paso! por favor, crea tu contraseña</label>
                            <input type={shown ? 'text' : 'password'} name='password' placeholder='' value={user.password} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='pl-2 appearance-none border-b border-gris-40 rounded w-full mt-8' /> 
                            <button onClick={switchShown}>
                              {shown ? 'Ocultar' : 'Mostrar'}
                            </button>
                          </div>
                          <div className="mt-4">
                            <label className=''>Repite tu contraseña</label>
                            <input type={shown ? 'text' : 'password'} name='password' placeholder='' className='pl-2 appearance-none border-b border-gris-40 rounded w-full mt-8' /> 
                          </div>
                          
                      </div>
                  </div>
                  
                  <div className='flex justify-center border rounded border-gris-40 w-60 mx-auto'>
                      <button onClick={() => setOpenModal(true)} type='submit' className='py-2 px-16 text-gris-40'>Registrarme</button>
                  </div>
              </form>
              { openModal && <Modal2 setOpenModal={setOpenModal} /> }
              
          </div>
      </section>
    </>
  )
}

export default Password