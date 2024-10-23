import Cabecera from "../plantillas/Cabecera"
import HeroPrincipal from "../componentes/HeroPrincipal"
import CardCategoria from "../componentes/CardCategoria"
import Footer from "../plantillas/Footer"

const categorias = ['Frutas', 'Verduras', 'Pulpas de fruta', 'Carnes', 'Granos'];

const caracteristicas = [
  {
    titulo: 'Envíos gratis a tu domilicio',
    descripcion: 'Llevamos tu compra hasta la puerta de tu casa de lunes a domingo sin ningún costo',
  },
  {
    titulo: 'Productos frescos y de calidad',
    descripcion: 'Disponemos de productos de alta calidad, seleccionados directamente del campo a tus manos',
  },
  {
    titulo: 'Paga con cualquier metodo de pago',
    descripcion: 'Contraentrega, transferencia, billeteras virtuales y mucho más',
  },
]

const Index = () => {

  return (
    <>
      <Cabecera />
      <HeroPrincipal />

      <div className="index-categoria_contenedor">
        <h3>¡Aqui encontrarás todo lo que necesitas!</h3>
        <div className="index-categoria_contenido">
          {
            categorias.map((categoria, index) => (
              <CardCategoria
                nombre={categoria}
                index={index}
                key={index}
              />
            ))
          }
        </div>
      </div>

      <div className="index-caracteristicas">
        <div className="index-caracteristicas_contenedor">
          {
            caracteristicas.map((caracteristica, index) => (
              <div className="index-caracteristicas_contenido" key={index}>
                <img src={`/imagenes/caracteristica_${index + 1}.webp`} />
                <div>
                  <h3>{caracteristica.titulo}</h3>
                  <p>{caracteristica.descripcion}</p>
                </div>
              </div>
            ))
          }
        </div>






      </div>

      <Footer />
    </>

  )
}

export default Index