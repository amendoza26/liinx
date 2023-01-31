import { useContext, useState } from 'react'
import { StepperContext } from '../context/StepperContext'
import Stepper from '../components/Stepper'
import StepperControl from '../components/StepperControl'
import Checkbox from '../components/steps/Checkbox'
import Mail from '../components/steps/Mail'
import Password from '../components/steps/Password'
import axios from 'axios'
import Modal from '../components/Modal'
import { UserContext } from '../UserContext'

const Registro = () => {

    // const [currentStep, setCurrentStep] = useState(1)
    // const [userData, setUserData] = useState('')
    // const [finalData, setFinalData] = useState({})
    const [page, setPage] = useState(0)
    const { user, setUser } = useContext(UserContext)

    const steps = [
        'Email',
        'Checkbox',
        'Contraseña'
    ]

    const PageDisplay = () => {
        if (page === 0) {
            return <Mail user={user} setUser={setUser} page={page} setPage={setPage} />
        } else {
            return <Checkbox user={user} setUser={setUser} />
        } 
    }

    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     setValues({...values, [e.target.value]: value})
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const link = '161.132.171.150:5000'
            // https://liinx-back.herokuapp.com
            // http://localhost:4000
            const { data } = await axios.post(`${link}/api/user/email`, {
                ...user,
            })
            setPage((currPage) => currPage + 1)
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
                    {PageDisplay()} 
                </form>
            </div>
        </section>
    </>
  )
}

export default Registro