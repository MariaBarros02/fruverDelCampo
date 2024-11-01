import { Link } from 'react-router-dom'


const CardCategoria = ({ nombre, index }) => {
  return (
    <div className="cardCategoria-contenido">
      <img src={`../imagenes/categoria_${index + 1}.webp`} alt={`imagen-${nombre}`} />
      <Link to="/productos" className='cardCategoria-link'></Link>
      <div >
        <p>{nombre}</p>
      </div>
    </div>
  )
}

export default CardCategoria