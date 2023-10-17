import React from 'react';
import { useNavigate } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css'
import './Error.css'

export default function Error() {
  const volverHome = useNavigate()

  return (
    <div className='estilo-error'>
      <h1>🤔</h1>
      <h1 className='fs-1 text-light'>Error 404</h1>
      <span className=' fw-4 fs-3 text-light '>No ha sido posible encontrar su petición 🤕</span>
      <p><button onClick={() => volverHome('/')} className='bg-success'>Ir a 🏡</button></p>
    </div>
  )
}
