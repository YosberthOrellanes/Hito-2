import { Route, Routes } from "react-router-dom";

import Detalle from "./views/Detalle.jsx";
import PedidoCarrito from "./views/PedidoCarrito.jsx";
import Home from "./views/Home.jsx";
import NotFound from "./views/NotFound.jsx";
import InicioSesion from "./views/InicioSesion.jsx";
import NuevoRegistro from "./views/NuevoRegistro.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoes/:id" element={<Detalle />} />
        <Route path="/carrito" element={<PedidoCarrito />} />
        <Route path="/registro" element={<NuevoRegistro />} />
        <Route path="/iniciosesion" element={<InicioSesion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
