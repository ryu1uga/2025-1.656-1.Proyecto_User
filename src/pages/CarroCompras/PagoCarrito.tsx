import React from 'react';
import './PagoCarrito.css';

const PagoCarrito = () => {
  return (
    <div className="payment-container">
      <h1 className="payment-title">PAGO DE ITEMS</h1>
      
      <form className="payment-form">
        <div className="form-group">
          <label className="form-label">Nombre Completo:</label>
          <input type="text" className="form-input" placeholder="Ingrese su nombre completo" required />
        </div>

        <div className="form-group">
          <label className="form-label">Dirección de correo:</label>
          <input type="text" className="form-input" placeholder="Ingrese su correo" required />
        </div>

        <div className="form-group">
          <label className="form-label">Número de tarjeta:</label>
          <input type="text" className="form-input" placeholder="0000 0000 0000 0000" required />
        </div>

        <div className="divider"></div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">CVC:</label>
            <input type="text" className="form-input" placeholder="123" />
          </div>
          <div className="form-group">
            <label className="form-label">Fecha de Expiración:</label>
            <input type="text" className="form-input" placeholder="MM/AA" />
          </div>
        </div>

        <button type="submit" className="proceed-btn">
          Proceder
        </button>
      </form>
    </div>
  );
};

export default PagoCarrito;