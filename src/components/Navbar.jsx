import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoesContext } from "../context/ShoesProvider";
import { formatNumber } from "./formatNumber";
import { BsPersonCheck } from "react-icons/bs";
import { IoArrowUndoOutline } from "react-icons/io5";

import logo from '../assets/logo.png';

const Navbar = () => {
  const { carrito } = useContext(ShoesContext);


  const total = Array.isArray(carrito)
    ? carrito.reduce((a, { count, price }) => a + price * count, 0)
    : 0;

  return (
    <div className="navbar text-white py-3">
      <div className="container d-block">
        <div className="d-flex justify-content-between">
          <Link to="*" className="logo-nombre mx-1 mb-0">
            <h4> <img src={logo} alt="Logo" style={{ width: '200px', height: '50px' }} /></h4>
          </Link>
          <Link to="/" className="logo-nombre mx-1 mb-0">
            <h4 className="mb-0"><IoArrowUndoOutline /> Volver</h4>
          </Link>
          <Link to="/" className="logo-nombre mx-1 mb-0">
            <h4 className="mb-0"><BsPersonCheck /> Usuario</h4>
          </Link>
          <Link to="/carrito" className="logo-nombre mx-1 mb-0">
            <h4 className="mb-0">
              &#128722; {""} Mi Carrito {formatNumber(total)}
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
