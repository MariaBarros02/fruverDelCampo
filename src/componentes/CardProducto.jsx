import { formatearDinero } from "../funciones";
import { Link} from "react-router-dom";

const CardProducto = ({ producto }) => {
  const {ID, Producto, Tamaño, Unidad, ÍtemsTiendas } = producto;
  return (
    <div className="cardProducto_contenedor" data-id={ID}>
      <img src={`../imagenes/productos/${Producto}.webp`} alt={`imagen_${Producto}`} />
      <div>
        <p>{Producto} x {Tamaño}{Unidad}</p>
        <p>{formatearDinero(ÍtemsTiendas[0].Precio, 'COP')}</p>
      </div>
      <Link to="" className="cardProducto-btnAnadirCarrito">Añadir al carrito</Link>
    </div>
  )
}

export default CardProducto