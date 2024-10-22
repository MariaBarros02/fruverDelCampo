import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    const yearActual = new Date().getFullYear(); 
    return (
        <>
            <footer className="footer-contenedor">
                <h3>Encuentranos en: </h3>
                <div>
                    <a href="https://www.instagram.com/" target="_blank"> <FaInstagram /></a>
                    <a href="https://facebook.com/" target="_blank"><FaFacebook /></a>
                    <a href="https://www.whatsapp.com/" target="_blank"><FaWhatsapp /></a>
                </div>
                <p>fruverdelcampo@gmail.com | Tel: (608) 87554566</p>
                <p>Carrera 16 #45 - 05 (Neiva, Huila)</p>
                <p>© Copyright {yearActual}</p>

            </footer>
        </>
    )
}

export default Footer