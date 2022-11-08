import React, { useContext, useState, useEffect } from 'react'
import axios from "axios"
import { UserContext } from '../UserContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const { user, setUser } = useContext(UserContext)
    const [shown, setShown] = useState(false)
    const [logIn, setLogIn] = useState(false)
    const [msg, setMsg] = useState({})

    const switchShown = (e) => {
        e.preventDefault()
        setShown(!shown)
    }

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const link = 'https://liinx-back.herokuapp.com'
            // https://liinx-back.herokuapp.com
            // http://localhost:4000
            const data = await axios.post(`${link}/api/user/signIn`, {
                ...user,
            })

            console.log(data);
            console.log(user);
            await setLogIn(true);

            if (data.status = 200) {
                await navigate("/private", { replace: true });
            }

        } catch (error) {
            console.log(error.response.data);
            setMsg(error.response.data)
            console.log(msg)
        }
    }

    

  return (
    <>
        <section className='container mx-auto my-24'>
            <div className='flex flex-row'>
                <form onSubmit={handleSubmit}>
                    <div><img src='/small.png' alt='Logo' /></div>
                    <div>Bienvenido a tu zona privada</div>
                    <select>
                        <option value="usuario">Soy Usuario</option>
                        <option value="empresa">Soy Empresa</option>
                    </select>
                    <input type='email' name='email' placeholder='ejemplo@email.com' value={user.email} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='pl-2 appearance-none border-b border-gris-40 rounded w-full mt-8' />
                    <input type={shown ? 'text' : 'password'} name='password' placeholder='' value={user.password} onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='pl-2 appearance-none border-b border-gris-40 rounded w-full mt-8 mb-4' /> 
                    
                    <div className='flex justify-center border rounded border-gris-40 w-60 mx-auto'>
                      <button type='submit' className='py-2 px-16 text-gris-40'>Iniciar Sesión</button>
                  </div>
                </form>
                <div><img src='./IlustDobleVLarge.png' alt='ilust' /></div>
            </div>
        </section>
    </>
  )
}

export default Login