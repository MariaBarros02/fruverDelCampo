import Cabecera from "../plantillas/Cabecera"
import Footer from "../plantillas/Footer"
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react"

const RealizarPedido = () => {

  const [datosFormulario, setDatosFormulario] =useState({
    cedula: "",
    nombreCompleto: "",
    direccion: "",
    celular: "",
    correoElectronico: "",
    datosAdicionales: "",
    notas: "",
  });

  const [errores, setErrores] = useState({});

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatosFormulario({ ...datosFormulario, [name]: value});
  };

  const validarFormulario = () => {
    let nuevosErrores = {};

    if (!datosFormulario.cedula || datosFormulario.cedula.length < 5) {
      nuevosErrores.cedula = "La cedula o NIT debe tener al menos 5 digitos.";
    }

    if(!datosFormulario.nombreCompleto.trim()) {
      nuevosErrores.nombreCompleto = "Por favor, ingresa tu nombre completo.";
    }

    if(!datosFormulario.direccion.trim()) {
      nuevosErrores.direccion = "Por favor, ingresa una direccion válida.";
    }

    if(!datosFormulario.celular || datosFormulario.celular.length < 7 || datosFormulario.celular.length > 10) {
      nuevosErrores.celular = "El número de celular debe tener entre 7 y 10 dígitos.";
    }

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!datosFormulario.correoElectronico || !correoRegex.test(datosFormulario.correoElectronico)){
      nuevosErrores.correoElectronico = "Por favor, ingresa un correo electronico válido.";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;

  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      console.log("Formulario válido. Enviar datos: ", datosFormulario)
    }
  } 

  return (
    <>
      <Cabecera />
      <div className="realizarPedido-contenedor">
        <div>
          <div className="realizarPedido-contenedor_titulo">
            <Link to="/Productos"><BsArrowLeftCircle className="realizarPedido-contenedor_titulo_iconoVolver" /></Link>
            <h2>Detalles de compra</h2>
          </div>
          <form className="realizarPedido-contenedor_formulario" onSubmit={manejarEnvio}>
            <div>
              <label>Cedula o Nit sin digito de verificacion</label>
              <input type="number" name="cedula" value={datosFormulario.cedula} onChange={manejarCambio}/>
              {errores.cedula && <p className="error">{errores.cedula}</p>}
            </div>
            <div>
              <label>Nombres y Apellidos completos</label>
              <input name="nombreCompleto" value={datosFormulario.nombreCompleto} onChange={manejarCambio}/>
              {errores.nombreCompleto && <p className="error">{errores.nombreCompleto}</p>}
            </div>
            <div>
              <label>Direccion</label>
              <input 
              name="direccion"
              placeholder="Direccion con nomenclatura completa (casa o unidad, bloque y # apto, barrio-localidad)" 
              value={datosFormulario.direccion}
              onChange={manejarCambio} 
              />
              {errores.direccion && <p className="error">{errores.direccion}</p>}
            </div>
            <div>
              <label>No. Celular</label>
              <input type="number" name="celular" value={datosFormulario.celular} onChange={manejarCambio} />
              {errores.celular && <p className="error">{errores.celular}</p>}
            </div>
            <div>
              <label>Direccion de correo electronico</label>
              <input name="correoElectronico" value={datosFormulario.correoElectronico} onChange={manejarCambio} />
              {errores.correoElectronico && <p className="error">{errores.correoElectronico}</p>}
            </div>
            <div>
              <label>Datos adicionales de tu direccion (opcional)</label>
              <input 
              name="datosAdicionales"
              placeholder="Habitacion, referencias, etc. (Opcional)" 
              value={datosFormulario.datosAdicionales}
              onChange={manejarCambio}
              />
            </div>
            <div>
              <label>Notas del pedido (opcional)</label>
              <textarea 
              name="notas"
              placeholder="Notas sobre tu pedido, por ejemplo, notas especiales para la entrega" 
              value={datosFormulario.notas}
              onChange={manejarCambio}
              />
            </div>
            <button type="submit">Realizar compra</button>

          </form>

        </div>

        
      </div>



      <Footer />

    </>
  )
}

export default RealizarPedido