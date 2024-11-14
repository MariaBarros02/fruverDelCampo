import { Link } from "react-router-dom"
import { BsCart2, BsTrash3 } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navegacion = () => {

  const {pathname} = useLocation();


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
    window.scrollTo(0,0);
  }, [pathname]);
  


  //Mostrar carrito o esconder
  const onChangeCarrito = (e) => {
    e.preventDefault();
    setCarritoEstado(!carritoEstado);
  }

  //CARRITO

  const [carrito, setCarrito] = useState([]);

  // Recuperar el carrito de localStorage al montar el componente
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
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
                  <table >
                    <tr className="navegacion-carritoEncabezado">
                      <td className="primera-colCarrito" colSpan="2">Producto</td>
                      <td>Cantidad</td>
                      <td>Subtotal</td>
                    </tr>
                    <tr className="navegacion-carritoProducto">
                      <td><img src="/imagenes/productos/Ajo.webp" /></td>
                      <td>
                        <p>Ajo x 90g</p>
                        <p>$1.900</p>
                      </td>
                      <td className="input-cantidadCarrito">
                        <button>-</button>
                        <input
                          type="number"
                        />
                        <button>+</button>
                      </td>
                      <td >$4500</td>
                      <td><button className="navegacion-carritoEliminar"><BsTrash3 /></button></td>
                    </tr>

                  </table>
                 

                  <div className="navegacion-carritoTotal">
                    <p>Total:</p>
                    <p>$27.500</p>
                  </div>
                  <div className="navegacion-contenedorBotones">
                    <a href="#" className="navegacion-btn navegacion-btnVaciar"> Vaciar Carrito</a>
                    <a href="#" className="navegacion-btn navegacion-btnComprar"> Iniciar Compra</a>
                  </div>



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