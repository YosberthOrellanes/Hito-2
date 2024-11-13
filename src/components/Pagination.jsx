import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationCards = () => {
  const [shoes, setShoes] = useState([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {

    fetch('./shoes.json')
      .then(response => response.json())
      .then(data => setshoes(data))
      .catch(error => console.error('Error al cargar el JSON:', error));
  }, []);

  // Calcular el número de páginas necesarias
  const itemsPerPage = 6;
  const totalPages = Math.ceil(shoes.length / itemsPerPage);

  // Obtener los shoes de la página actual
  const currentItems = shoes.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage);

  // Manejar el cambio de página
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div>
      <div className="shoes-cards">
        {currentItems.map(shoes => (
          <div key={shoes.id} className="card">
            <img src={shoes.img} alt={shoes.name} />
            <div className="card-body">
              <h5>{shoes.name}</h5>
              <p>{shoes.desc}</p>
              <p>Ingredientes: {shoes.ingredients.join(', ')}</p>
              <p>Precio: ${shoes.price}</p>
            </div>
          </div>
        ))}
      </div>

      <Pagination>
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === activePage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default PaginationCards;
