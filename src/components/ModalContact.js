import { Link } from "react-router-dom"


const ModalContact = ({ setOpenModal, setconfirm }) => {

    const onclick = () => {
      setOpenModal(false)
      setconfirm(false)
    }

    return (
        <div className="bg-gris-oscuro bg-opacity-60 justify-center items-center flex  fixed inset-0 z-30">
          <div className="bg-blanco relative w-auto p-8 mx-auto max-w-md flex flex-col rounded-lg">
            <button className="flex justify-end" onClick={() => setOpenModal(false)}><img src="/clear.png" alt="clear" /></button>
            <div className="flex justify-center font-bold"><img src="/error_outline.png" alt="signo" />Tus datos se guardaron correctamente</div>
            <div className="text-sm mt-4 text-gris-80">
                Tu validación básica se ha completado
            </div>
            <button onClick={onclick} className="bg-morado-primario rounded justify-center mx-auto text-blanco text-sm mt-6 py-1 px-2">Entendido</button>
          </div>
        </div>
        
    )
  }
  
  export default ModalContact