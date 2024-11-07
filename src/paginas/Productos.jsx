import HeroPrincipal from "../componentes/HeroPrincipal"
import Cabecera from "../plantillas/Cabecera"
import Footer from "../plantillas/Footer"
import CardProducto from "../componentes/CardProducto"
import { useState, useEffect } from "react"

const Productos = () => {


  const [productos, setProductos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(6)

  useEffect(() => {
    const obtenerProductos = async () => {

      const url = `https://losprecios.co/tienda/detalles?ID=6&MunicipioID=1&ClaveAPI=nfJrn941ba90fn2x&Categor%C3%ADa=frutas%20y%20verduras&P%C3%A1gina=${paginaActual}`
      try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado.Datos.Ítems)
        setProductos(resultado.Datos.Ítems);
      } catch (error) {
        console.error('Error al obtener los productos', error);
      }

    };
    obtenerProductos();
  }, [paginaActual]);

  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  }

  return (
    <>

      <Cabecera />
      <HeroPrincipal />
      <div className="productos-contenedor">

        <div className="productos-productos_contenedor">
          {
            productos.map((producto, index) => (
              <CardProducto
                key={index}
                producto={producto}
              />
            ))
          }
        </div>
        <div className="productos-paginacion">
          {Array.from({ length: totalPaginas }, (_, i) => (
            <button
              key={i}
              onClick={() => cambiarPagina(i + 1)}
              className={paginaActual === i + 1 ? 'activo' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>

      </div>
      <Footer />

    </>
  )
}

export default Productos