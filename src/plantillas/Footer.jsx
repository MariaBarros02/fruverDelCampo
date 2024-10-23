import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const yearActual = new Date().getFullYear(); 

const Footer = () => {
    return (
        <>
            <footer className="footer-contenedor">
                <h3>Encuentranos en: </h3>
                <div>
                    <a href="https://www.instagram.com/" target="_blank"> <FaInstagram color="#FF7A00" /></a>
                    <a href="https://facebook.com/" target="_blank"><FaFacebook color="blue"/></a>
                    <a href="https://www.whatsapp.com/" target="_blank"><FaWhatsapp color="green"/></a>
                </div>
                <p>fruverdelcampo@gmail.com | Tel: (608) 87554566</p>
                <p>Carrera 16 #45 - 05 (Neiva, Huila)</p>
                <p>© Copyright {yearActual}</p>

            </footer>
        </>
    )
}

export default Footer