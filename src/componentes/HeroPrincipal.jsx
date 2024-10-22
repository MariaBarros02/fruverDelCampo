import Navegacion from "../plantillas/Navegacion"


const heros = [
  {
    img: '/imagenes/hero_1.webp',
    titulo: 'Sabores Frescos y Autenticos',
    parrafo: 'Frutas, verduras y pulpas 100% puras al mejor precio'
  },
  {
    img: '/imagenes/hero_2.webp',
    titulo: 'Disfruta de la frescura del campo',
    parrafo: 'Nuestras frutas y verduras seleccionadas con amor'
  },
  {
    img: '../imagenes/hero_3.webp',
    titulo: 'El sabor auténtico de la naturaleza',
    parrafo: 'Directo a tu mesa: productos frescos y de calidad'
  },
  {
    img: '../imagenes/hero_4.webp',
    titulo: '¡La frescura no tiene precio!',
    parrafo: 'Ven y descubre nuestras pulpas naturales, perfectas para cada ocasión'
  },
  {
    img: '../imagenes/hero_5.webp',
    titulo: 'Frutas y verduras de la mejor calidad',
    parrafo: 'Precios irresistibles, lo agradecerán tu salud y tu bolsillo'
  }
]

const HeroPrincipal = () => {

  return (
    <>
      <div className='heroPrincipal-contenedor'>
        <Navegacion />
        {heros.map((hero, index) => (
          <div key={index} className='heroPrincipal-contenido'>
            <img src={hero.img} alt="hero" />
            <div className="heroPrincipal-sombreado"></div>
            <div className='heroPrincipal-texto'>
              <h2>{hero.titulo}</h2>
              <p>{hero.parrafo}</p>
            </div>
          </div>
        ))

        }
      </div>

    </>
  )
}

export default HeroPrincipal