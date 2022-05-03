import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className='flex'>
            <div className='flex flex-col justify-evenly'>
                <div><img src='/small.png' alt='logo' /></div>
                <div>Copyright</div>
                <div>iconos</div>
            </div>
            <div className='flex'>
                <ul>
                    <li><button><Link to='quienes-somos'>Quienes somos</Link></button></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul></ul>
                <ul></ul>
            </div>
        </div>
    </>
  )
}

export default Footer