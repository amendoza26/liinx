import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import { UserContext } from '../UserContext'

const ValidacionStep2 = () => {

    const { user, setUser } = useContext(UserContext)
    const [img, setImg] = useState();

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
      };

  return (
    <>
        <div className='px-24 my-8'>
            <section className='py-6 px-10 border border-gris-30 rounded-lg'>
                <div className='text-lg font-bold text-morado-hover mb-2'>Foto documento nacional de identidad (DNI)</div>
                <div className='text-sm text-gris-80 mb-8'>Por favor toma una foto a tu documento de identidad, por el frente y por el reverso. Ambas fotos deben ser nítidas y la información debe leerse claramente.  Sólo aceptamos formato PNG, JPG y PDF, tamaño máximo de 3MB.</div>
                <div className='flex justify-center gap-x-12'>
                    <div className='flex flex-col items-center'>
                        <div className='border p-2 border-gris-40 rounded mb-2'>
                            <img src='/dni.png' alt='dni' />
                        </div>
                        <span className='text-xs text-gris-80'>DNI foto frente</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='border p-2 border-gris-40 rounded mb-2'>
                            <img src='/dni2.png' alt='dni' />
                        </div>
                        <span className='text-xs text-gris-80'>DNI foto reverso</span>
                    </div>
                </div>
                <div className='text-sm bg-naranja-fondo p-4 rounded max-w-xl mx-auto'>
                    <div className='space-y-2 mb-6'>
                        <span className='text-naranja-primario'>Importante</span>
                        <ul>
                            <li className='flex mb-2'><img className='object-contain pr-3' src='/Vector.png' alt='check' />Tu DNI debe encontrarse vigente</li>
                            <li className='flex mb-2'><img className='object-contain pr-3' src='/Vector.png' alt='check' />Los nombres, apellidos y número de documento debes ser legibles</li>
                            <li className='flex mb-2'><img className='object-contain pr-3' src='/Vector.png' alt='check' />La foto no debe incluir elementos ajenos al documento (stickers, dibujos, otros)</li>
                            <li className='flex mb-2'><img className='object-contain pr-3' src='/Vector.png' alt='check' />El DNI no debe estar roto ni adulterado</li>
                            <li className='flex mb-2'><img className='object-contain pr-3' src='/Vector.png' alt='check' />El DNI no debe estar roto ni adulterado</li>
                        </ul>
                    </div>
                    <div className='flex w-4/5'>
                        <input type='checkbox' className='accent-morado-primario' />
                        <label className='text-gris-80 pl-2 inline-block'>Declaro que el documento adjunto me pertenece, se encuentra dentro de mi posesión y no registra adulteración de ningún tipo.</label>
                    </div>
                </div>
            </section>
        </div>
        <div className='px-24 my-8'>
            <section className='py-6 px-10 border border-gris-30 rounded-lg'>
                <div className='text-lg font-bold text-morado-hover mb-2'>Validación domiciliaria</div>
                <div className='text-sm text-gris-80 mb-8'>Debes adjuntar cualquiera de los documentos que te solicitamos, con una antigüedad no mayor a 6 meses (Formato JPG, PNG, PDF - TAMAÑO MÁXIMO 2MB) Debe verse la imagen completa del documento elegido.</div>
                <div className='flex justify-between space-x-8'>
                    <div className='flex flex-col items-center'>
                        <div className='border p-2 border-gris-40 rounded mb-2 '>
                            <input type='file' name='myImage' onChange={onImageChange} />
                            <img src={img} alt='img' className='max-h-40' />
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='border p-2 border-gris-40 rounded mb-2'>
                            <input type='file' name='myImage' onChange={onImageChange} />
                            <img src={img} alt='img'  className='max-h-40' />
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='border p-2 border-gris-40 rounded mb-2'>
                            <input type='file' name='myImage' onChange={onImageChange} />
                            <img src={img} alt='img'  className='max-h-40' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between space-x-8'>
                    <div className='flex flex-col items-center'>
                        <div className='border p-2 border-gris-40 rounded mb-2 '>
                            <input type='file' name='myImage' onChange={onImageChange} />
                            <img src={img} alt='img' className='max-h-40' />
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='border p-2 border-gris-40 rounded mb-2'>
                            <input type='file' name='myImage' onChange={onImageChange} />
                            <img src={img} alt='img'  className='max-h-40' />
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='border p-2 border-gris-40 rounded mb-2'>
                            <input type='file' name='myImage' onChange={onImageChange} />
                            <img src={img} alt='img'  className='max-h-40' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between space-x-8'>
                    <div className='flex flex-col items-center'>
                        <div className='border p-2 border-gris-40 rounded mb-2 '>
                            <input type='file' name='myImage' onChange={onImageChange} />
                            <img src={img} alt='img' className='max-h-40' />
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='border p-2 border-gris-40 rounded mb-2'>
                            <input type='file' name='myImage' onChange={onImageChange} />
                            <img src={img} alt='img'  className='max-h-40' />
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='border p-2 border-gris-40 rounded mb-2'>
                            <input type='file' name='myImage' onChange={onImageChange} />
                            <img src={img} alt='img'  className='max-h-40' />
                        </div>
                    </div>
                </div>

                
            </section>
            <div className="form-check mb-4 py-4">
                <input className=" h-4 w-4 border-4 border-morado-primario rounded-sm bg-white transition duration-200 mt-1 align-top accent-morado-primario float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" required="required" />
                <label className="form-check-label inline-block text-gris-80" for="flexCheckDefault" aria-required="true">
                    Acepto la política de privacidad
                </label>
            </div>
            <div className='flex justify-between'>
                <button className='text-verde-secundario border-verde-secundario py-2 px-14 border rounded'>Volver</button>
                <Link to='/private/validacion-step3'><button className='text-blanco bg-morado-primario py-2 px-14 border rounded'>Siguiente</button></Link>
            </div>
        </div>
    </>
  )
}

export default ValidacionStep2