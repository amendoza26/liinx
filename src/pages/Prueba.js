import React from 'react'
import { useParams } from 'react-router-dom';

const Prueba = () => {


    const params = useParams();
    console.log(params)

    return (
        <div>Prueba</div>
    )
}

export default Prueba