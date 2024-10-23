import Cabecera from "../plantillas/Cabecera"
import HeroPrincipal from "../componentes/HeroPrincipal"
import CardCategoria from "../componentes/CardCategoria"
import Footer from "../plantillas/Footer"

const categorias = [
  {
    nombre: 'Frutas',
    imagen: '/imagenes/frutas.jpg',
  },
  {
    nombre: 'Verduras',
    imagen: '/imagenes/verduras.jpg',
  },
  {
    nombre: 'Pulpas de fruta',
    imagen: '/imagenes/pulpas.jpg',
  },
  {
    nombre: 'Carnes',
    imagen: '/imagenes/carnes.jpg',
  },
  {
    nombre: 'Granos',
    imagen: '/imagenes/granos.jpg',
  }

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
                nombre={categoria.nombre}
                imagen={categoria.imagen}
              />

            ))
          }
        </div>

      </div>

      <Footer />
    </>

  )
}

export default Index