import { Link } from "react-router-dom"
import { BsStarFill,BsCart2 } from "react-icons/bs";


const Navegacion = () => {
  return (
    <>
      <div className="navegacion-contenedor">
        <BsStarFill className="navegacion-logo"/>
        <div>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/garantias">Garantias</Link>
          </nav>
          <BsCart2 className="navegacion-iconoCarrito"/>
        </div>
      </div>
    </>
  )
}

export default Navegacion