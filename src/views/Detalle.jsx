import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ShoesContext } from "../context/ShoesProvider";
import Footer from "./Footer";

const Detalle = () => {
  const [shoeDetail, setShoeDetail] = useState({});
  const { shoes, addToCart } = useContext(ShoesContext);
  const { id } = useParams();

  const obtenerDatos = () => {
    const datosShoes = shoes.find((shoe) => shoe.id === id);
    setShoeDetail(datosShoes || {});
  };

  useEffect(() => {
    obtenerDatos();
  }, [shoes]);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="card mb-3 estilos">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={shoeDetail.img}
                className="img-fluid estilos rounded-start"
                alt={shoeDetail.name}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title text-capitalize">
                  {shoeDetail.name}
                </h5>
                <p className="card-text">{shoeDetail.desc}</p>
                <ul>
                  {shoeDetail.ingredients?.map((ingredient, i) => (
                    <li key={i}>&#127829; {ingredient}</li>
                  ))}
                </ul>
                <div className="d-flex justify-content-around">
                  <h4>Precio: ${shoeDetail.price}</h4>

                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => addToCart(shoeDetail)}
                >
                  Añadir &#128722;
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Detalle;


































// import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import { shoesContext } from "../context/ShoesProvider";

// const Detalle = () => {
//   const [pizzaDetail, setPizzaDetail] = useState({});
//   const { shoes, addToCart } = useContext(shoesContext);
//   const { id } = useParams();

//   const obtenerDatos = () => {
//     const datosPizza = shoes.find((shoes) => shoes.id === id);

//     setPizzaDetail(datosPizza || {});
//   };

//   useEffect(() => {
//     obtenerDatos();
//   }, [shoes]);

//   return (
//     <>
//       <Navbar />
//       <div className="container mt-5">
//         <div className="card mb-3 estilos">
//           <div className="row g-0">
//             <div className="col-md-6">
//               <img
//                 src={pizzaDetail.img}
//                 className="img-fluid estilos rounded-start"
//                 alt={pizzaDetail.name}
//               />
//             </div>
//             <div className="col-md-6">
//               <div className="card-body">
//                 <h5 className="card-title text-capitalize">
//                   {pizzaDetail.name}
//                 </h5>
//                 <p className="card-text">{pizzaDetail.desc}</p>
//                 <ul>
//                   {pizzaDetail.ingredients?.map((ingredient, i) => (
//                     <li key={i}>&#127829; {ingredient}</li>
//                   ))}
//                 </ul>
//                 <div className="d-flex justify-content-around">
//                   <h4>Precio: ${pizzaDetail.price}</h4>
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => addToCart(pizzaDetail)}
//                   >
//                     Añadir &#128722;
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Detalle;