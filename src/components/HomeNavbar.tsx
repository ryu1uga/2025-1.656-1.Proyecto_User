const HomeNavbar =()=> {

    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">NOMBRE DE LA PAGINA</a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link btn btn-primary" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-primary" >Catálogo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-primary" >Configuración</a>
                            </li>
                            <li className="nav-item">
                                <a id="BotVentas" className="nav-link btn btn-primary" >Más Vendidos</a>
                            </li>
                            <li className="nav-item">
                                <a id="BotVal" className="nav-link btn btn-primary" >Mejor Valorados</a>
                            </li>
                        </ul>

                        <div id = "searchbar" className="form-inline d-flex me-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar juego..." aria-label="Buscar" />
                            <button className="btn btn-outline-light" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>

                        <a href="#" className="btn btn-outline-light">
                            <i className="fas fa-shopping-cart"></i> Carrito
                        </a>
                    </div>
                </div>
            </nav>
    );
}
export default HomeNavbar