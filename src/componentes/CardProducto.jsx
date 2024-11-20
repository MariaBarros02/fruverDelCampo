import { useEffect, useState } from "react";
import { formatearDinero } from "../funciones";
import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {
  const { ID, Producto, Complemento, Marca, Tamaño, Unidad, ÍtemsTiendas } = producto;
  const [mostrarModal, setMostrarModal] = useState(false);
  const [valor, setValor] = useState(1);
  const [alerta, setAlerta] = useState(null);
  const [carrito, setCarrito] = useState([])

  // modal control
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

  useEffect(() => {
    const carritoLocal = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarrito(carritoLocal);

    // Revisamos si el producto ya existe en el carrito
    const productoExistente = carritoLocal.find(item => item.ID === ID);
    if (productoExistente) {
      setValor(productoExistente.Cantidad); // Actualizamos el valor con la cantidad del carrito
    }
  }, [ID]);


  // Función para agregar al carrito
  const agregarAlCarrito = () => {
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoExistente = carritoActual.find((item) => item.ID === ID);

    if (productoExistente) {

      productoExistente.Cantidad += valor;
      productoExistente.Subtotal += valor * ÍtemsTiendas[0].Precio;
    } else {

      carritoActual.push({
        ID,
        Producto,
        Complemento,
        Marca,
        Tamaño,
        Unidad,
        Precio: ÍtemsTiendas[0].Precio,
        Cantidad: valor,
        Subtotal: valor * ÍtemsTiendas[0].Precio
      });
    }

    localStorage.setItem('carrito', JSON.stringify(carritoActual));
    cerrarModal();
    setValor(1);
    setAlerta({ mensaje: 'El producto ha sido agregado al carrito correctamente', tipo: 'success' });

    // Ocultar la alerta después de 3 segundos
    setTimeout(() => {
      setAlerta(null)
    }, 3000);
    
   
  };





  // Funciones del modal y de control de cantidad
  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  const incrementar = () => setValor(prev => prev + 1);
  const decrementar = () => { if (valor > 0) setValor(prev => prev - 1); };
  const manejarCambio = (e) => {
    const nuevoValor = parseInt(e.target.value, 10);
    if (!isNaN(nuevoValor)) setValor(nuevoValor);
  };

  return (
    <>

      {alerta && (
        <div className={`alerta ${alerta.tipo}`}>
          {alerta.mensaje}
        </div>
      )}
      <div className="cardProducto_contenedor" data-id={ID}>
        <img src={`../imagenes/productos/${Producto}${Complemento ? ` ${Complemento}` : ``}.webp`} alt={`imagen_${Producto}`} />
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
              <img src={`../imagenes/productos/${Producto}${Complemento ? ` ${Complemento}` : ``}.webp`} alt={`imagen_${Producto}`} />
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
                  <button onClick={agregarAlCarrito} className="cardProducto-modal_anadirCarrito">Añadir al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


export default CardProducto