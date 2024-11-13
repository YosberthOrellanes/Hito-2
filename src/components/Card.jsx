import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoesContext } from "../context/ShoesProvider";
import { formatNumber } from "./formatNumber";

const Card = ({ shoe }) => {
  const { addToCart } = useContext(ShoesContext);
  const navigate = useNavigate();

  return (
    <div className="col">
      <div className="card">
        <img className="card-img-top" src={shoe.img} alt={shoe.name} />
        <div className="card-body">
          <h4 className="card-title text-capitalize">{shoe.name}</h4>
          <hr />
        </div>
        <h2 className="text-center text-dark pb-3">
          Precio: ${formatNumber(shoe.price)}
        </h2>
        <div className="d-flex justify-content-around mb-4">
          <button
            className="btn btn-info text-white"
            onClick={() => navigate(`/shoes/${shoe.id}`)}
          >
            Ver Más &#128064;
          </button>
          <button
            className="btn btn-danger"
            onClick={() => addToCart(shoe)} // esto lo que hace es agregar al carrito
          >
            Añadir &#128722;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
