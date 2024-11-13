import { Link } from "react-router-dom";
import Carrousel from "./Carrousel";
import NavbarHome from "../components/NavbarHome";
import Footer from "./Footer";

const NotFound = () => {
  return (
    <>
      <NavbarHome />
      <Carrousel />
      <div className="notFound text-center">
        <h1>
          Bienvenido a RunShoes  <br />
          Encuentra las mejores botas para correr de las marcas top. Nuestra selección combina diseño y tecnología para darte confort. <br /> ¡Descubre la bota perfecta para ti y lleva tu entrenamiento al siguiente nivel! </h1>

        <Link className="volver-inicio" to="/">
          Click para ir al Inicio
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;