import { Link } from "react-router-dom"
import { BsStarFill,BsCart2 } from "react-icons/bs";
import { useEffect , useState} from "react";

const Navegacion = () => {

  //
  const [claseEstadoNav, setClaseEstadoNav] = useState('navegacion_hero'); 

  const ajustarNavegacion = () => {
    const posicionScroll = window.scrollY;
    setClaseEstadoNav(posicionScroll < 39 ? 'navegacion_hero' : 'navegacion_movil');
  };

  useEffect(() => {
    window.addEventListener('scroll', ajustarNavegacion);
    
    return () => {
      window.removeEventListener('scroll', ajustarNavegacion);
    };
  }, []); 

  return (
    <>
      <div className={`navegacion-contenedor ${claseEstadoNav}`}>
        <BsStarFill className="navegacion-logo"/>
        <div>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/garantias">Garantias</Link>
          </nav>
          <BsCart2 className="navegacion-iconoCarrito"/>
        </div>
      </div>
    </>
  )
}

export default Navegacion