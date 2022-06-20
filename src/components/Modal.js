

const Modal = ({ setOpenModal }) => {
  return (
    <div>
        <button onClick={() => setOpenModal(true)}>X</button>
        <div>Ejemplo</div>
    </div>
  )
}

export default Modal