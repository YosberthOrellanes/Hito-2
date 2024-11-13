import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ShoesProvider from "./context/ShoesProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShoesProvider>
        <App />
      </ShoesProvider>
    </BrowserRouter>
  </React.StrictMode>
);