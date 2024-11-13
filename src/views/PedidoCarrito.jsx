import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ShoesContext } from "../context/ShoesProvider";
import { formatNumber } from "../components/formatNumber";
import PaymentCardForm from "../components/Payment";
import Footer from "./Footer";

const DetallePedido = () => {
  const { carrito, increment, decrement } = useContext(ShoesContext);
  const [isCarritoReady, setIsCarritoReady] = useState(false);


  useEffect(() => {
    if (carrito !== undefined) {
      setIsCarritoReady(true);
    }
  }, [carrito]);

  if (!isCarritoReady) {
    return <h1>Cargando...</h1>;
  }

  // Calcular el total de la compra
  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <>
      <Navbar />
      <div className="carrito p-5">
        <div className="detalles bg-light w-75 m-auto p-5">
          <h5>Detalles del pedido:</h5>
          <div className="p3 bg-white">
            {carrito.length === 0 ? (
              <h6>No hay productos en el carrito</h6>
            ) : (
              carrito.map((producto, i) => (
                <div key={i} className="d-flex justify-content-between py-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <img src={producto.img} width="50" alt={producto.name} />
                    <h6 className="mb-0 text-capitalize p-2">{producto.name}</h6>
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                    <h6 className="mb-0 p-2 text-success">
                      ${formatNumber(producto.price * producto.count)}
                    </h6>
                    <button
                      className="btn btn-danger"
                      onClick={() => decrement(i)} // Decrementar cantidad
                    >
                      -
                    </button>
                    <b className="mx-2">{producto.count}</b>
                    <button
                      className="btn btn-primary"
                      onClick={() => increment(i)} // Incrementar cantidad
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
            <h2 className="my-4">Total: ${formatNumber(total)}</h2>
            <button className="btn btn-info">Ir a Pagar</button>
          </div>
        </div>
        <PaymentCardForm />
      </div>
      <Footer />
    </>
  );
};

export default DetallePedido;
