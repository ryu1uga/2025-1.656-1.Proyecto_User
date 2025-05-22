import React from 'react';
import './ResenaPage.css';

const ResenaPage = () => {
    return (
        <div className="game-container">
            <h1 className="game-title">Nombre del Juego</h1>
            
            <h3 className="section-title">Trailer</h3>
            <div className="video-container">
                <span>Video</span>
            </div>
            
            <h3 className="section-title">Imagenes del Gameplay</h3>
            <div className="gameplay-scroll">
                <div className="image">Imagen 1</div>
                <div className="image">Imagen 2</div>
                <div className="image">Imagen 3</div>
                <div className="image">Imagen 4</div>
            </div>
            
            <div className="review-section">
                <h3 className="section-title">Deja tu reseña</h3>
                <textarea className="review-input" placeholder="Escribe tu comentario aquí"></textarea>
                
                <div className="action-buttons">
                    <button className="btn btn-outline-secondary btn-action">Volver</button>
                    <button className="btn btn-primary btn-action">Enviar</button>
                </div>
            </div>
        </div>
    );
};

export default ResenaPage;