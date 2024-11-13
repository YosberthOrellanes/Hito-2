import { useContext } from "react";
import { ShoesContext } from "../context/ShoesProvider";
import Card from "./Card";

const ShoesList = () => {
  const { filteredShoes } = useContext(ShoesContext);


  if (!Array.isArray(filteredShoes)) {
    return <p>No hay zapatos disponibles.</p>;
  }

  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredShoes.length === 0 ? (
          <p>No hay zapatos que coincidan con los filtros.</p>
        ) : (
          filteredShoes.map((shoe) => (
            <Card key={shoe.id} shoe={shoe} />
          ))
        )}
      </div>
    </div>
  );
};

export default ShoesList;
