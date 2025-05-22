import React from 'react';
import './PagoCarrito.css';

const PagoCarrito = () => {
  return (
    <div className="payment-card">
      <div className="pago">Pago de items</div>

      <form>
        <label className="form-label">Nombre Completo:</label>
        <input type="text" className="form-input" placeholder=" " required />

        <label className="form-label">Dirección:</label>
        <input type="text" className="form-input" placeholder=" " required />

        <label className="form-label">Número de tarjeta:</label>
        <input type="text" className="form-input" placeholder=" " required />

        <div className="divider"></div>

        <div className="disclaimer">
          <strong>Disclaimer or Related</strong><br />
          Lorem ipsum dolor sit amet consectetur. Adipiscing turpis acus non
          tellus. Quis nisi tortor interdum adipiscing lacus. Pellentesque
          omare urna amet caliceus ut dui absentum non.
        </div>

        <div className="divider"></div>

        <div className="cvc-section" style={{ display: 'flex', gap: '4%' } as React.CSSProperties}>
          <div style={{ width: '48%' }}>
            <label className="form-label">CVC:</label>
            <input type="text" className="form-input" placeholder=" " />
          </div>
          <div style={{ width: '48%' }}>
            <label className="form-label">Fecha de Expiración:</label>
            <input type="text" className="form-input" placeholder=" " />
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