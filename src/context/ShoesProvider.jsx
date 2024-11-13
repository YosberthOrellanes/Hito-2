import { createContext, useState, useEffect } from "react";

export const ShoesContext = createContext();

const ShoesProvider = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  const [filteredShoes, setFilteredShoes] = useState([]);
  const [carrito, setCarrito] = useState([]); // Estado para el carrito

  // Obtener los zapatos
  useEffect(() => {
    fetch("/HITO2/shoes.json")
      .then((res) => res.json())
      .then((data) => {
        setShoes(data);
        setFilteredShoes(data);
      });
  }, []);

  // Función para filtrar zapatos
  const searchShoes = (query) => {
    const filtered = shoes.filter((shoe) =>
      shoe.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredShoes(filtered);
  };

  // Función para agregar al carrito
  const addToCart = (shoe) => {
    setCarrito((prevCarrito) => {
      const existingProduct = prevCarrito.find((item) => item.id === shoe.id);
      if (existingProduct) {
        return prevCarrito.map((item) =>
          item.id === shoe.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { ...shoe, count: 1 }];
      }
    });
  };

  // Función para incrementar la cantidad de un producto en el carrito
  const increment = (index) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item, i) =>
        i === index ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Función para decrementar la cantidad de un producto en el carrito
  const decrement = (index) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item, i) =>
        i === index && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  return (
    <ShoesContext.Provider
      value={{ shoes, filteredShoes, searchShoes, addToCart, carrito, increment, decrement }}
    >
      {children}
    </ShoesContext.Provider>
  );
};

export default ShoesProvider;
