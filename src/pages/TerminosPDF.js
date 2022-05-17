import React from 'react'

const TerminosPDF = () => {

    const condiciones = [
        {
            title: 'CONDICIONES GENERALES DE USO',
            text: 'Los Términos y Condiciones que a continuación se describen son de carácter general y resultan aplicables al uso del contenido, productos y/o servicios disponibles bajo el presente sitio web. Al registrarse en este sitio web, declara haber leído, comprendido y aceptado los presentes Términos y Condiciones. Si el usuario no está de acuerdo con la información que aparecen a continuación, deberá abstenerse de realiza su registro en este sitio web.'
        },
        {
            title: 'DERECHOS DE AUTOR: LIINX SE RESERVA TODOS LOS DERECHOS',
            text: 'Este sitio web se encuentra protegido por la normativa vigente sobre derechos de autor. Los derechos de autor correspondiente a las páginas, a las pantallas que se muestran en las páginas, y a la información y a los materiales allí contenidos, así como a la forma en que la información y los materiales están dispuestos, pertenecen a LIINX. Se encuentra expresamente prohibido, el empleo, modificación, reproducción, distribución o cualquier otro acto de disposición de los derechos de autor involucrados sin el consentimiento expreso de LIINX.'
        },
        {
            title: 'DERECHOS DE PROPIEDAD INTELECTUAL - MARCA REGISTRADA',
            text: 'LIINX es una marca registrada en el Perú. En tal sentido, se encuentra expresamente prohibido que dicha marca sea copiada, reproducida, modificada o utilizada de cualquier manera que se afecten los derechos de propiedad intelectual que nuestra representada tiene sobre ellas.'
        },
        {
            title: 'USO DE INFORMACIÓN',
            text: 'La información contenida en este sitio web, así como los presentes Términos y Condiciones, se encuentran sujetos a cambios. LIINX declara que realiza los mayores esfuerzos para brindar la información actualizada y exacta, sin embargo, durante los procesos de actualización de la información de este sitio web, los usuarios mantendrán a su disposición nuestros canales de atención, donde podrán recibir toda la información actualizada de los productos y servicios que LIINX ofrece. Se prohíbe el uso no autorizado de este sitio web, lo cual incluye el uso inapropiado de usuarios y contraseñas de ingreso. La elegibilidad de cualquier persona natural o jurídica como usuario de los productos y/o servicios mencionados en este sitio web está sujeta a la determinación final de LIINX.'
        },
        {
            title: 'RESPONSABILIDAD DEL USUARIO',
            text: 'Para el ingreso a la zona privada, es obligatorio completar el formulario de registro en todos sus campos con datos válidos para poder crear una cuenta en este sitio web. El usuario asume el compromiso de actualizar los datos personales conforme resulte necesario. Los usuarios garantizan y responden, en cualquier caso, por la veracidad, exactitud, vigencia y autenticidad de los datos personales proporcionados. El usuario accederá a su cuenta personal mediante el ingreso de su nombre de usuario y contraseña, los cuales se obliga a mantener bajo confidencialidad. La cuenta generada es personal, única e intransferible. El usuario será el único responsable por el manejo de su cuenta, pues el acceso a la misma está restringido al ingreso y uso de su contraseña, la cual deberá ser de su conocimiento exclusivo. LIINX brinda el servicio de identificación digital en base a la información proporcionada por el usuario, sin embargo, es el usuario quién en uso de su cuenta controla el manejo de sus datos personales.'
        },
        {
            title: 'ENLACES',
            text: 'Este sitio web puede contener enlaces a otros sitios web controlados u ofrecidos por terceras personas, no relacionadas con LIINX. LIINX declara que no se hace responsable en relación a ninguna información, materiales, productos o servicios que aparezcan o que se ofrezcan en cualquiera de los sitios pertenecientes a terceras personas con enlaces a este sitio Web. Al crear un enlace al sitio web de una tercera persona, LIIMX no apoya ni recomienda ningún producto o servicio que ésta ofrezca, ni tampoco ninguna información que ésta contenga. Tales sitios web pueden tener unos Términos y Condiciones y una Política de Privacidad distinta a la de LIINX, así como proveer menos seguridad de la que ofrece el sitio web ofrece.'
        },
        {
            title: 'TÉRMINOS ADICIONALES',
            text: 'Ciertas secciones de este sitio web pueden contener términos y/o condiciones que sean adicionales a lo dispuesto por el presente documento. En caso de conflicto, dichos términos y condiciones adicionales prevalecerán en las secciones donde aparezcan. En el supuesto que alguna de las disposiciones contenidas en los presentes Términos y Condiciones sea declarado ilegal, inválido o nulo, el resto de términos quedara vigente y aplicable para cualquier supuesto.'
        },
        {
            title: 'LAS LEYES QUE RIGEN',
            text: 'El uso de este sitio web se regirá por todas las leyes aplicables de la República del Perú.'
        },
    ]

  return (
    <>
        <section>
            <div className='container mx-auto'>
                <div className='text-naranja-primario text-4xl font-bold text-center'>Términos y condiciones</div>
                <div className='mt-8 mb-2'>
                    {condiciones.map((condiciones,index) =>     
                        <div className='mb-10' key={`${condiciones.index}`}>
                            <div className='text-lg font-bold mb-4'>{condiciones.title}</div>
                            <div >{condiciones.text}</div>
                        </div>
                    )}
                </div>
                <div className=''>
                    <button className='px-4 py-2 border border-verde-secundario'>Regresar</button>
                    <button className='flex flex-col space-y-4 py-9 px-9 border-gris-80 border'>
                        <span>Descargar documento en formato PDF</span>
                        <img src='/save_alt.png' alt='save' />
                    </button>
                </div>
            </div>
        </section>
        
        
    </>
  )
}

export default TerminosPDF