

const Modal = ({ setOpenModal }) => {
  return (
      <div className="bg-gris-oscuro bg-opacity-60 justify-center items-center flex  fixed inset-0 z-30">
        <div className="bg-blanco relative w-auto p-8 mx-auto max-w-md flex flex-col rounded-lg">
          <button className="flex justify-end" onClick={() => setOpenModal(false)}><img src="/clear.png" alt="clear" /></button>
          <div className="flex justify-center font-bold"><img src="/error_outline.png" alt="signo" />Comunicaciones Comerciales</div>
          <div className="text-sm mt-4 text-gris-80">
            Autorizo a LIINX el uso de mis datos personales para fines publicitarios y/o comerciales, es decir para que me envíen por cualquier medio, ofertas, promociones, información de productos y/o servicios, o similares
          </div>
         <button onClick={() => setOpenModal(false)} className="bg-morado-primario rounded justify-center mx-auto text-blanco text-sm mt-6 py-1 px-2">Acepto</button>
        </div>
      </div>
      
  )
}

export default Modal