import { useContext, useState } from "react";
import { ShoesContext } from "../context/ShoesProvider";


const Buscador = () => {
  const { searchShoes } = useContext(ShoesContext);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    searchShoes(value);
  };

  return (
    <div className="buscador-container">
      <input
        type="text"
        placeholder="Buscar zapatos... 🔍 "
        value={query}
        onChange={handleSearch}
        className="form-control"
      />

    </div>
  );
};

export default Buscador;
