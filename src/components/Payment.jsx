import React, { useState } from 'react';
import { LiaCcVisa } from "react-icons/lia";
import { FaCcMastercard } from "react-icons/fa";
import { SlPaypal } from "react-icons/sl";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PaymentCardForm = () => {

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isCardReady, setIsCardReady] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();


    if (!cardNumber || !expiryDate || !cvv || !cardHolder) {
      setErrorMessage('Por favor complete todos los campos.');
      return;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
      setErrorMessage('El número de tarjeta debe tener 16 dígitos.');
      return;
    }

    if (!/^\d{3}$/.test(cvv)) {
      setErrorMessage('El CVV debe tener 3 dígitos.');
      return;
    }

    if (!/\d{2}\/\d{2}/.test(expiryDate)) {
      setErrorMessage('La fecha de vencimiento debe tener el formato MM/YY.');
      return;
    }

    if (!isCardReady) {
      setErrorMessage('Por favor, asegúrate de que la tarjeta esté lista para pagar.');
      return;
    }



    setErrorMessage('');
    alert('¡Pago procesado correctamente!');
  };

  return (
    <div className="payment-card-form">
      <h2>Ingreso de tarjeta de pago</h2>
      <p><strong>Tipo de Tarjeta</strong></p>
      <div className="icon-tarjeta">
        <button type="button">
          <i>
            <LiaCcVisa style={{ color: "red" }} />
          </i>
        </button>
        <button type="button"><i><FaCcMastercard style={{ color: "white" }} /></i></button>
        <button type="button"><i><SlPaypal style={{ color: "red" }} /></i></button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardHolder">Nombre del Titular</label>
          <input
            type="text"
            id="cardHolder"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            placeholder="Juan Pérez"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cardNumber">Número de Tarjeta</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9101 1121"
            maxLength="16"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="expiryDate">Fecha de Vencimiento</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            maxLength="5"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            maxLength="3"
            required
          />
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label={isCardReady ? "Tarjeta Lista Para Pagar" : ""}
            checked={isCardReady}
            onChange={() => setIsCardReady(!isCardReady)}
          />
        </Form>


      </form>
    </div>
  );
};

export default PaymentCardForm;
