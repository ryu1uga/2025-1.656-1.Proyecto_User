import { useState } from "react";
import type { juego } from "./HomeJuego";




const HomeList=()=> {

    const ListaJ = localStorage.getItem("listaPrueba")
    let prueba : juego[]
    if (ListaJ == null) {
        prueba = []
    }else {
        prueba = JSON.parse(ListaJ)
    }

    const [juegos, setjuegos] = useState<juego[]>(prueba)
    

        return(<div className="mt-5">
                    <div id="tipodetop"></div>
                    <div id="TablaJuegos" className="d-flex flex-wrap gap-3 justify-content-center mt-3">
                        {juegos.map((juego, index) => (
                        <div className="card mt-2" style={{ width: "11rem", height: "15rem" }} key={index}>
                            <img className="card-img-top bg-secondary" alt="Placeholder" style={{ height: "140px" }}src="..."/>
                            <div className="card-body">
                            <h6 className="card-title fw-bold">{juego.nombre}</h6>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>);
                
};
export default HomeList