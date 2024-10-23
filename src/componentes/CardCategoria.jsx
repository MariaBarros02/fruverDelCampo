import React from 'react'
import { Link } from 'react-router-dom'

const CardCategoria = ({ nombre, imagen }) => {
  return (
    <>
      
      <div className={`cardCategoria-contenido `}>
        <img src={imagen} alt={`imagen-${nombre}`} />
        <Link to="" className='cardCategoria-link'></Link>
        <div >
          <p>{nombre}</p>
        </div>
      </div>

    </>
  )
}

export default CardCategoria