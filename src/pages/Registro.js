import React from 'react'

const Registro = () => {
  return (
    <>
        <section>
            <div className='container mx-auto mt-14 mb-44 max-w-md'>
                <div className='flex justify-center mb-20'>
                    <img src='/progress-bar.png' alt='barra progreso' />
                </div>
                <div>
                    <div className='mb-4 text-morado-primario text-3xl font-bold'>Registro</div>
                    <div className='text-gris-80 mb-8'>Tu cuenta gratis en solo tres simples pasos. Tendrás que validar tu email, ten tu bandeja de entrada a la vista. </div>
                    <div className='flex py-4 px-4 items-start bg-gris-10 space-x-4 mb-8'>
                        <img className='object-contain' src='/icon.png' alt='icono' />
                        <div>La privacidad de tu información es nuestro principal compromiso. Para tratar tus datos personales necesitamos tu consentimiento. Tus datos se compartirán solo con quienes tú autorices , el control es tuyo.</div>
                        <div className='text-2xl text-gris-80'>X</div>
                    </div>
                    <div className='mb-8'>
                        <div className='border border-gris-40 rounded-lg py-8 px-8'>
                            <label className=''>Ingresa tu correo electrónico</label>
                            <input type='text' placeholder='ejemplo@email.com' className='pl-2 appearance-none border-b border-gris-40 rounded w-full mt-8'></input>
                        </div>
                    </div>
                    <div class="form-check mb-8 bg-gris-10 py-4 px-4">
                        <input class=" h-4 w-4 border border-morado-primario rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-morado-primario float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label inline-block text-gris-80" for="flexCheckDefault">
                            Acepto la política de privacidad
                        </label>
                    </div>
                    <div class="form-check mb-8 bg-gris-10 py-4 px-4">
                        <input class="h-4 w-4 border border-morado-primario rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label inline-block text-gris-80" for="flexCheckDefault">
                            Acepto el envío de comunicaciones comerciales
                        </label>
                    </div>
                    <div className='flex justify-center border rounded border-gris-40 w-60 mx-auto'>
                        <button className='py-2 px-16 text-gris-40'>Verificar</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Registro