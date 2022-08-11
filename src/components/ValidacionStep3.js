import {  useState } from "react";
import ModalValidacion from "./ModalValidacion";

const ValidacionStep3 = () => {

    const [openModal, setOpenModal] = useState(false)
    const [video, setVideo] = useState(false)
    const [img, setImg] = useState();

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
      };

    const modalOpen = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }

    const guardarVideo = () => {
        setVideo(true);
    }

  return (
    <>
        <div className='px-24 my-8'>
            <section className='py-6 px-10 border border-gris-30 rounded-lg'>
                <div className='text-lg font-bold text-morado-hover mb-2'>Sube tu Selfie</div>
                <div className='text-sm text-gris-80 mb-8'>Por favor sube una foto tuya, igual a la imagen de muestra. Busca un espacio con buena iluminación, luz natural y toma en cuanta las siguientes indicaciones:</div>
                <div className="text-sm text-gris-80 mb-8">
                    <ul className="list-decimal list-inside">
                        <li>Foto nítida donde podamos ver tu rostro</li>
                        <li>Debes sostener y mostrar tu documento de identidad mostrando la fotografía a la cámara</li>
                        <li>Procura tener una pared blanca o de color claro de fondo</li>
                    </ul>
                </div>
                <div className='flex justify-center gap-x-12 items-center mb-6'>
                    <div className='flex flex-col items-center'>
                        <img src='/bg-Image.png' alt='dni' />
                    </div>
                    <div className='flex flex-col items-center border p-2 border-gris-40 rounded'>
                        <div className='bg-gris-20 flex flex-col px-28 py-16 space-y-4'>
                            <button className='text-verde-secundario border-verde-secundario py-2 px-14 border rounded'>Utilizar mi web cam</button>
                            <button className='text-verde-secundario border-verde-secundario py-2 px-14 border rounded'>Seleccionar archivo</button>
                        </div>
                    </div>
                </div>
                <div className='text-lg font-bold text-morado-hover mb-2'>Envíanos un video</div>
                <div className='text-sm text-gris-80 mb-8'>Envíanos un video en tiempo real de 30 segundos como máximo, diciendo tu nombre completo, número de DNI, fecha de nacimiento y  mostrando tu documento de identidad. </div>
                <div className=" rounded max-w-xl mx-auto">
                    <div className='flex flex-col items-center border p-2 border-gris-40 mb-6'>
                        <div className='bg-gris-20 w-full flex flex-col justify-center items-center py-28'>
                            <img src="/videocam.png" alt="videocam" />
                            <span className="text-gris-60">Grabar mensaje</span>
                        </div>
                    </div>
                    <div className="flex justify-between mb-6">
                        <button className='text-verde-secundario border-verde-secundario py-2 px-14 border rounded'>Volver a grabar</button>
                        <button onClick={guardarVideo} className='text-verde-secundario border-verde-secundario py-2 px-14 border rounded'>Guardar video</button>
                    </div>
                    <div className='space-y-2 mb-6 bg-naranja-fondo p-4 rounded text-sm text-gris-oscuro'>
                        <span className='text-naranja-primario'>Importante</span>
                        <ul>
                            <li className='flex mb-2'><img className='object-contain pr-3' src='/Vector.png' alt='check' />Busca un lugar iluminado.</li>
                            <li className='flex mb-2'><img className='object-contain pr-3' src='/Vector.png' alt='check' />Debes mirar de frente a la cámara, no usar gorra ni lentes de sol.</li>
                            <li className='flex mb-2'><img className='object-contain pr-3' src='/Vector.png' alt='check' />Ubícate a una distancia prudente para que podamos ver todo tu rostro.</li>
                            <li className='flex mb-2'><img className='object-contain pr-3' src='/Vector.png' alt='check' />Pronuncia tus datos de manera clara y muestra tu documento de identidad.</li>
                            <li className='flex mb-2'><img className='object-contain pr-3' src='/Vector.png' alt='check' />Dale clic a “Grabar mensaje” cuando estés listo.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className='flex justify-between mt-10'>
                <button className='text-verde-secundario border-verde-secundario py-2 px-14 border rounded'>Volver</button>
                {video 
                    ? <button onClick={modalOpen} className='text-blanco bg-morado-primario py-2 px-14 border rounded'>Finalizar validación</button>
                    : <button className='text-blanco bg-gris-40 py-2 px-14 border rounded'>Finalizar validación</button>
                }
            </div>
            { openModal && <ModalValidacion setOpenModal={setOpenModal} /> }
        </div>
    </>
  )
}

export default ValidacionStep3