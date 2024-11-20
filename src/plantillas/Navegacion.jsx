import { Link } from "react-router-dom"
import { BsCart2, BsTrash3 } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { formatearDinero } from "../funciones";

const Navegacion = () => {

  const { pathname } = useLocation();
  const [carrito, setCarrito] = useState([])

  //Estado de la navegacion (estatico o movil)
  const [claseEstadoNav, setClaseEstadoNav] = useState('navegacion_hero');

  //Estado del div carrito (visible 0 no visible)
  const [carritoEstado, setCarritoEstado] = useState(false);

  //Establecer el estado de la navegación según el scroll
  const ajustarNavegacion = () => {
    const posicionScroll = window.scrollY;
    setClaseEstadoNav(posicionScroll < 39 ? 'navegacion_hero' : 'navegacion_movil');
  };

  useEffect(() => {
    window.addEventListener('scroll', ajustarNavegacion);
  }, []);

  //Modificar cambio de pestaña
  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [pathname]);



  //Mostrar carrito o esconder
  const onChangeCarrito = (e) => {
    e.preventDefault();
    setCarritoEstado(!carritoEstado);
  }


  // Cargar carrito desde localStorage al montar el componente
  useEffect(() => {
    const carritoLocal = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoLocal);
  }, [carrito]);

  // Vaciar el carrito
  const vaciarCarrito = (e) => {
    e.preventDefault();
    setCarrito([]);
    localStorage.setItem("carrito", JSON.stringify([]));
  };


  const manejarCambioCantidad = (e, index) => {
    const nuevoCarrito = [...carrito];
    let cantidad = parseInt(e.target.value, 10);

    if (isNaN(cantidad) || cantidad < 1) {
      // Si la cantidad es inválida o menor a 1, eliminar el producto
      nuevoCarrito.splice(index, 1); // Eliminar el producto del carrito
    } else {
      // Si la cantidad es válida, actualizar el producto
      nuevoCarrito[index].Cantidad = cantidad;
      nuevoCarrito[index].Subtotal = cantidad * nuevoCarrito[index].Precio; // Recalcular el subtotal
    }

    // Actualizar el estado y localStorage con el carrito modificado
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  // Función para eliminar un producto
  const eliminarProducto = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index); // Eliminar el producto por índice
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito)); // Actualizar localStorage
  };

  const calcularTotal = () => {
    return carrito.reduce((acumulador, producto) => acumulador + producto.Subtotal, 0);
  };



  return (
    <>
      <div className={`navegacion-contenedor ${claseEstadoNav}`}>
        <img src="/imagenes/logo.png" className="navegacion-logo" />
        <div className="navegacion-contenido">
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/productos/Frutas">Productos</Link>
            <Link to="/garantias">Garantias</Link>
          </nav>
          <div className="navegacion-carritoContenedor">
            <a href="#" onClick={onChangeCarrito} className="navegacion-iconoCarrito"><BsCart2 /></a>
            {
              carritoEstado ? (
                <div className="navegacion-carritoContenido">
                  <a href="#" className="btn-cerrarCarrito" onClick={onChangeCarrito}>x</a>
                  <table>
                    <tbody>
                      <tr className="navegacion-carritoEncabezado">
                        <td className="primera-colCarrito" colSpan="2">Producto</td>
                        <td className="cantidad">Cantidad</td>
                        <td className="subtotal">Subtotal</td>
                      </tr>

                      {carrito.length > 0 ? (
                        carrito.map((producto, index) => {
                          const { Producto, Complemento, Unidad, Tamaño, Precio, Cantidad } = producto;
                          return (
                            <tr className="navegacion-carritoProducto" key={Producto + Tamaño}>
                              <td><img src={`/imagenes/productos/${Producto}${Complemento ? ` ${Complemento}` : ``}.webp`} /></td>
                              <td>
                                <p>{Producto} x {Tamaño}{Unidad}</p>
                                <p>{formatearDinero(Precio, 'COP')}</p>
                              </td>
                              <td className="input-cantidadCarrito">
                                <button onClick={() => manejarCambioCantidad({ target: { value: Math.max(Cantidad - 1, 0) } }, index)}>-</button>
                                <input
                                  type="number"
                                  value={Cantidad}
                                  onChange={(e) => manejarCambioCantidad(e, index)} // Manejamos el cambio de cantidad
                                />
                                <button onClick={() => manejarCambioCantidad({ target: { value: Cantidad + 1 } }, index)}>+</button>
                              </td>
                              <td className="subtotal">{formatearDinero((Precio * Cantidad), 'COP')}</td>
                              <td><button onClick={() => eliminarProducto(index)} className="navegacion-carritoEliminar"><BsTrash3 /></button></td>
                            </tr>
                          );
                        })
                      ) : null
                      }
                    </tbody>
                  </table>
                  {carrito.length === 0 && (
                    <p className="navegacion-carritoVacio">El carrito de compras está vacío.</p>
                  )}

                  {carrito.length > 0 && (
                    <>
                      <div className="navegacion-carritoTotal">
                        <p>Total:</p>
                        <p>{formatearDinero(calcularTotal(), 'COP')}</p>
                      </div>
                      <div className="navegacion-contenedorBotones">
                        <a href="#" onClick={vaciarCarrito} className="navegacion-btn navegacion-btnVaciar">Vaciar Carrito</a>
                        <Link to="/realizarPedido" className="navegacion-btn navegacion-btnComprar">Iniciar Compra</Link>
                      </div>
                    </>
                  )}
                </div>
              ) : null
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Navegacion