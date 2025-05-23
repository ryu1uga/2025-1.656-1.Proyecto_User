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
      comentarios: [],
      trailer: new URL("https://www.youtube.com/watch?v="),
    },
  };

  const trailerId = juego.trailer.toString().replace("https://www.youtube.com/watch?v=", "").trim() || "";
  const embedUrl = trailerId ? `https://www.youtube.com/embed/${trailerId}` : "https://www.youtube.com/embed/";

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h3">{juego.nombre}</h1>
        <button className="btn btn-close" onClick={() => navigate("/home")}></button>
      </div>

      <div className="row">

        {/* Trailer del juego */}
        <div className="col-12 col-md-8 mb-3">
          <div className="card">
            <div className="card-body text-center bg-light">
              <h5 className="card-title">Trailer de {juego.nombre}</h5>
              <iframe
                width="100%"
                height="400px"
                src={embedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Trailer de ${juego.nombre}`}
              ></iframe>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Detalles de juego</h5>
              <p className="card-text fw-bold">Descripción: </p>
              <p>{juego.descripcion}</p>
              <div className="mb-3">
                <p><strong>Valoración:</strong> {juego.valoracion}</p>
                <p><strong>Ventas:</strong> {juego.ventas}</p>
              </div>
              <div className="d-flex flex-column gap-2">
                <div className="form-group">
                  <label htmlFor="Comment">Comentarios</label>
                  <textarea
                    className="form-control"
                    id="Comment"
                    rows={3}
                    placeholder="Deja un comentario..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Valoración</h5>
              <p>{juego.valoracion}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <button className="btn btn-primary btn-lg w-100">Compra ahora</button>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <h5 className="mb-3">Galería de Imágenes</h5>
          <div className="row g-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="border rounded overflow-hidden" style={{ height: "180px" }}>
                  <img
                    src={`https://via.placeholder.com/300x180?text=Imagen+${i}`}
                    alt={`Imagen ${i}`}
                    className="img-fluid h-100 w-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuegoDetalle;