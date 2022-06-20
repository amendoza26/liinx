import { useState } from 'react'
import { StepperContext } from '../context/StepperContext'
import Stepper from '../components/Stepper'
import StepperControl from '../components/StepperControl'
import Checkbox from '../components/steps/Checkbox'
import Mail from '../components/steps/Mail'
import Password from '../components/steps/Password'

const Registro = () => {

    const [currentStep, setCurrentStep] = useState(1)
    const [userData, setUserData] = useState('')
    const [finalData, setFinalData] = useState({})
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const steps = [
        'Email',
        'Checkbox',
        'Contraseña'
    ]

    const displayStep = (step) => {
        switch(step) {
            case 1:
                return <Mail values={values} setValues={setValues} />
            case 2:
                return <Checkbox />
            case 3:
                return <Password />
            default:
        }
    }

    const handleClick = (direction) => {
        let newStep = currentStep;
    
        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
      };

  return (
    <>
        <section>
            <div className='container mx-auto mt-14 mb-44 max-w-md'>
                <Stepper steps={steps} currentStep={currentStep} />
                <div className="my-10 ">
                    <StepperContext.Provider value={{
                        userData,
                        setUserData,
                        finalData,
                        setFinalData
                    }}>
                        {displayStep(currentStep)}
                    </StepperContext.Provider>
                </div>
                <StepperControl />
            </div>
        </section>
    </>
  )
}

export default Registro