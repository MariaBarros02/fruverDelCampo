import { useEffect, useState } from "react";
import { formatearDinero } from "../funciones";
import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {

  const { ID, Producto, Complemento, Marca, Tamaño, Unidad, ÍtemsTiendas } = producto;
  const [mostrarModal, setMostrarModal] = useState(false)

  useEffect(() => {
    if (mostrarModal) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [mostrarModal]);

  const abrirModal = () => {
    setMostrarModal(true);
  };
  const cerrarModal = () => {
    setMostrarModal(false)
  }

  return (
    <>
      <div className="cardProducto_contenedor" data-id={ID}>
        <img src={`../imagenes/productos/${Producto}.webp`} alt={`imagen_${Producto}`} />
        <div>
          <p>{Producto} {Complemento}  x {Tamaño}{Unidad}</p>
          <p className="cardProducto-marca">{Marca}</p>
          <p>{formatearDinero(ÍtemsTiendas[0].Precio, 'COP')}</p>
        </div>
        <Link to="#" onClick={abrirModal} className="cardProducto-btnAnadirCarrito">Añadir al carrito</Link>
      </div>

      {mostrarModal && (
        <div className="cardProducto-modal">
          <div className="cardProducto-modal_contenido">
            <img src={`../imagenes/productos/${Producto}.webp`} alt={`imagen_${Producto}`} />
            <div>
            <p>ID: {ID}</p>
            <p>{Producto} {Complemento}  x {Tamaño}{Unidad}</p>
            <p>{formatearDinero(ÍtemsTiendas[0].Precio, 'COP')}</p>
            <p className="cardProducto-marca">Marca: {Marca}</p>
            <button onClick={cerrarModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default CardProducto