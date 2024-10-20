
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
const Cabecera = () => {
    return (
        <>
            <div className="cabecera-contenedor">
                <div>
                    <p>Neiva, Huila | <a href="mailto:">fruverdelcampo@gmail.com</a></p>
                </div>

                <div className="cabecera-iconos">
                    <FaInstagram />
                    <FaFacebook />
                    <FaWhatsapp />
                </div>
            </div>
        </>
    )
}

export default Cabecera