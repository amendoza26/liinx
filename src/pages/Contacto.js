import React, { useState } from 'react'
import Confirmation from '../components/Confirmation'
import Form from '../components/Form'

const Contacto = () => {

  const [page, setPage] = useState(0)

  const PageDisplay = () => {
    if (page === 0) {
      return <Form />
    } else {
      return <Confirmation />
    }
  }

  const renderButton = () => {
    if (page === 0) {
      return (
        <button className='mt-8 py-2 px-10 border border-gris-40 text-gris-40 hover:text-gris-oscuro' onClick={() => {setPage((currPage) => currPage + 1)}}>Enviar</button>
      )
    }
  }

  return (
    <>
        <section>
            <div className='container mx-auto mt-16 mb-20'>
              <div className='flex flex-row items-center'>
                <div className='flex-1'>
                  <img src='/IlustEmail.png' alt='Contacto' />
                </div>
                <div className='flex-1 max-w-lg'>
                  <div><PageDisplay /></div>
                  <div className='text-center'>{renderButton()}</div>
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Contacto