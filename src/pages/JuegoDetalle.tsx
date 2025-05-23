import { useNavigate, useLocation } from "react-router-dom";
import type { juego } from '../components/HomeJuego';

const JuegoDetalle = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { juego }: { juego: juego } = state || {
    juego: {
      nombre: "Juego no encontrado",
      valoracion: "",
      ventas: "N/A",
      descripcion: "Sin descripción",
      comentarios: "",
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3">{juego.nombre}</h1>
        <button className="btn btn-close" onClick={() => navigate("/home")}></button>
      </div>

      <div className="row g-3">
        {/* Sección principal - Trailer y detalles */}
        <div className="col-12 col-md-8">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Trailer de {juego.nombre}</h5>
              <div className="ratio ratio-16x9 bg-secondary mb-3">
                {/* Placeholder para el video */}
              </div>
              
              <h5 className="mt-4">Detalles del juego</h5>
              <p className="card-text"><strong>Descripción:</strong> {juego.descripcion}</p>
            </div>
          </div>
        </div>

        {/* Sección secundaria - Valoración y comentarios */}
        <div className="col-12 col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Valoración</h5>
                <span className="badge bg-primary fs-5">{juego.valoracion}</span>
              </div>
              
              <p className="mb-3"><strong>Ventas:</strong> {juego.ventas}</p>
              
              <div className="mb-3">
                <h6>Comentarios</h6>
                {/* Aquí irían los comentarios existentes */}
              </div>
              
              <div className="form-group">
                <label htmlFor="Comment" className="form-label">Deja tu comentario</label>
                <textarea
                  className="form-control"
                  id="Comment"
                  rows={3}
                  placeholder="Escribe tu opinión sobre el juego..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón de compra */}
      <div className="row mt-3">
        <div className="col-12">
          <button className="btn btn-primary btn-lg w-100 py-3">Comprar ahora</button>
        </div>
      </div>
    </div>
  );
};

export default JuegoDetalle;