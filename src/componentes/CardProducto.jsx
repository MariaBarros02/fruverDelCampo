
const CardProducto = ({producto, id, productosDes}) => {
    const formatearDinero = (numero, moneda = 'USD') => {
        return new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: moneda,
          maximumFractionDigits: 0,
        }).format(numero);
      };
      
  return (
    <>
        <div className="Producto_contenedor">
            <img src={`../imagenes/productos/${producto.Producto}.webp`} alt={`imagen_${producto.Producto}`} />
            <div>
                <p>{producto.Producto} x {producto.Tamaño}{producto.Unidad}</p>
                <p>{formatearDinero(producto.ÍtemsTiendas[0].Precio, 'COP')}</p>
            </div>
            <a href="#" className="Producto-btnAnadirCarrito">Añadir al carrito</a>
            </div>
    </>
  )
}

export default CardProducto