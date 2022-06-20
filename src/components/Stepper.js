import { useState, useEffect, useRef} from "react"

const Stepper = ({steps, currentStep}) => {

    const [newStep, setNewStep] = useState([])
    const stepRef = useRef()

    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps]
        let count = 0;

        while(count < newSteps.length) {
            if(count === stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true,
                }
                count++;
            } else if(count < stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true,
                }
                count++;
            } else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false,
                }
                count++;
            }
        }
        return newSteps
    }

    useEffect(() => {
        const stepState = steps.map((step, index) =>
            Object.assign({}, {
                desciption: step,
                completed: false,
                highlighted: index === 0 ? true : false,
                selected: index === 0 ? true : false
            })
        );

        stepRef.current = stepState;
        const current = updateStep(currentStep -1, stepRef.current);
        setNewStep(current);
    }, [steps, currentStep])
    

    const displaySteps = newStep.map((step,index) => {
        return (
            <div key={index} className={
                index !== newStep.length - 1 ? "w-full flex justify-between items-center space-x-4" : "flex items-center"
            }  >
                <div className="relative flex flex-row items-center text-gris-oscuro space-x-2">
                    <div className={`rounded-full transition duration-500 ease-in-out border border-morado-primario h-6 w-6 flex items-center justify-center py-3 ${
                        step.selected
                            ? 'bg-blanco border-morado-primario' 
                            : ''
                    } ${step.highlighted ? 'bg-blanco' : 'bg-morado-primario text-blanco'}`}>
                        {/* Numero */}
                        {step.completed ? (
                            <span className="text-morado-primario font-bold">&#10003;</span>
                        ) : (
                            index + 1
                        )}
                    </div>
                    <div className={`text-center ${step.highlighted ? 'text-gris-oscuro' : 'text-gris-40'}`}>
                        {step.desciption}
                    </div>
                </div>
                <div className={`flex-auto border-t border-gris-40 transition duration-500 ease-in-out ${step.completed ? 'border-morado-primario' : ''}`}></div>
            </div>
        )
    }) 

  return (
    <div className="flex justify-between items-center space-x-4">
        {displaySteps}
    </div>
  )
}

export default Stepper