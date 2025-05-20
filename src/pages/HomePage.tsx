import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
    // const navigate = useNavigate(); // Descomenta si vas a usarlo

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">NOMBRE DE LA PAGINA</a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link btn btn-primary" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-primary" href="#">Catálogo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-primary" href="#">Configuración</a>
                            </li>
                            <li className="nav-item">
                                <a id="BotVentas" className="nav-link btn btn-primary" href="#">Más Vendidos</a>
                            </li>
                            <li className="nav-item">
                                <a id="BotVal" className="nav-link btn btn-primary" href="#">Mejor Valorados</a>
                            </li>
                        </ul>

                        <form className="d-flex me-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar juego..." aria-label="Buscar" />
                            <button className="btn btn-outline-light" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>

                        <a href="#" className="btn btn-outline-light">
                            <i className="fas fa-shopping-cart"></i> Carrito
                        </a>
                    </div>
                </div>
            </nav>

            <div className="container my-5">
                <div id="Carouseljuegos" className="carousel slide position-relative bg-secondary text-white text-center p-5 rounded" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="..." className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Imagen 1</h5>
                                <p id="desc">Descripción 1</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Imagen 2</h5>
                                <p id="desc">Descripción 2</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Imagen 3</h5>
                                <p id="desc">Descripción 3</p>
                            </div>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#Carouseljuegos" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#Carouseljuegos" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>

                <div className="mt-5">
                    <div id="tipodetop"></div>
                    <div id="TablaJuegos" className="d-flex flex-wrap gap-3 justify-content-center mt-3"></div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

