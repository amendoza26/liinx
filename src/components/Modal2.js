import { Link } from "react-router-dom"


const Modal2 = ({ setOpenModal }) => {
    return (
        <div className="bg-gris-oscuro bg-opacity-60 justify-center items-center flex  fixed inset-0 z-30">
          <div className="bg-blanco relative w-auto p-8 mx-auto max-w-md flex flex-col rounded-lg">
            <button className="flex justify-end" onClick={() => setOpenModal(false)}><img src="/clear.png" alt="clear" /></button>
            <div className="flex font-bold"><img src="/check_circle_outline.png" alt="check" />Se completó tu registro</div>
            <div className="text-sm mt-4 text-gris-80">
                ¡Gracias por ser parte de la comunidad Liinx! Te invitamos a navegar por tu zona privada y descubrir todo lo que tenemos para ti.
            </div>
           <div className="flex justify-center space-x-6">
                <button onClick={() => setOpenModal(false)} className="border border-verde-secundario rounded  text-verde-secundario text-sm mt-6 py-1 px-2">Salir</button>
                <Link to="/private">
                  <button onClick={() => setOpenModal(false)} className="bg-morado-primario rounded  text-blanco text-sm mt-6 py-1 px-2">Ver zona privada</button>
                </Link>
           </div>
          </div>
        </div>
        
    )
  }
  
  export default Modal2