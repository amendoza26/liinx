import { Link } from "react-router-dom"

const ModalValidacion = ({ setOpenModal }) => {

    const onclick = (e) => {
        setOpenModal(false)
    }

    return (
        <div className="bg-gris-oscuro bg-opacity-60 justify-center items-center flex  fixed inset-0 z-30">
          <div className="bg-blanco relative w-auto p-8 mx-auto max-w-md flex flex-col rounded-lg">
            <div className="flex justify-between font-bold">
                <img src="/error_outline.png" alt="signo" />
                <span>Se completó tu Validación avanzada</span>
                <button className="flex justify-end" onClick={() => setOpenModal(false)}><img src="/clear.png" alt="clear" /></button>
            </div>
            <div className="text-sm mt-4 text-gris-80">
                ¡Gracias por ser parte de la comunidad Liinx! Te invitamos a seguir navegando por tu zona privada y descubrir todo lo que tenemos para ti.
            </div>
            <div className="flex flex-row justify-end">
                <Link to='/private'>
                    <button onClick={onclick} className="bg-morado-primario rounded text-blanco text-sm mt-6 py-1 px-2">Entendido</button>
                </Link>
            </div>
          </div>
        </div>
        
    )
  }
  
  export default ModalValidacion