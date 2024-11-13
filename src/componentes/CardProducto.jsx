import { useEffect, useState } from "react";
import { formatearDinero } from "../funciones";
import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {

  //modal-contenido
  const { ID, Producto, Complemento, Marca, Tamaño, Unidad, ÍtemsTiendas } = producto;
  const [mostrarModal, setMostrarModal] = useState(false)

  // inputNumerico
  const [valor, setValor] = useState(1);

  //modal
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

  //modal-contenido
  const abrirModal = () => {
    setMostrarModal(true);
  };
  const cerrarModal = () => {
    setMostrarModal(false)
  }

  // inputNumerico
  const incrementar = () => {
    setValor(prev => prev + 1);
  };

  const decrementar = () => {
    if (valor > 0) {
      setValor(prev => prev - 1);
    }
  };

  const manejarCambio = (e) => {
    const nuevoValor = parseInt(e.target.value, 10);
    if (!isNaN(nuevoValor)) {
      setValor(nuevoValor)
    }
  };

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
            <div className="cardProducto-modal_cerrar"><button onClick={cerrarModal}>x</button></div>
            <div className="cardProducto-modal_informacion">
              <img src={`../imagenes/productos/${Producto}.webp`} alt={`imagen_${Producto}`} />
              <div>
                <p className="cardProducto-modal_id">ID: {ID}</p>
                <p className="cardProducto-modal_nombre">{Producto} {Complemento}  x {Tamaño}{Unidad}</p>
                <p className="cardProducto-modal_marca">Marca: {Marca}</p>
                <p className="cardProducto-modal_precio">{formatearDinero(ÍtemsTiendas[0].Precio, 'COP')}</p>
                <div className="cardProducto-modal_contenedorBtn">
              <div className="inputNumerico">
                <button onClick={decrementar}>-</button>
                <input type="text" value={valor} onChange={manejarCambio} />
                <button onClick={incrementar}>+</button>
              </div>
              <Link to="#" onClick={abrirModal} className="cardProducto-modal_anadirCarrito">Añadir al carrito</Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default CardProducto