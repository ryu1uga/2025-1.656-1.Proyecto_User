import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import HomeNavbar from "../components/HomeNavbar";
import HomeSlides from "../components/HomeSlides";
import HomeList from "../components/HomeList";
import type { juego } from "../components/HomeJuego";
import { useState } from "react";



const HomePage = () => {
    const ListaJ = localStorage.getItem("listaPrueba")

    let prueba : juego[]
    if (ListaJ == null) {
        prueba = []
    }else {
        prueba = JSON.parse(ListaJ)
    }

    const [juegos, setjuegos] = useState<juego[]>(prueba)

    const ordenarPorVentas = () => {
    const ordenado = [...juegos].sort((a, b) => parseFloat(b.ventas) - parseFloat(a.ventas));
    setjuegos(ordenado);
    };

    const ordenarPorValoracion = () => {
    const ordenado = [...juegos].sort((a, b) => parseFloat(b.valoracion) - parseFloat(a.valoracion));
    setjuegos(ordenado);
    };
    const Restablecer = () => {
    setjuegos(prueba);
  };
    
    return (
        <div>
            <HomeNavbar 
            OrdenarVentas={ordenarPorVentas}
            OrdenarValoracion={ordenarPorValoracion}
            Restablecer={Restablecer}></HomeNavbar>
             <div className="container my-5">
                <HomeSlides></HomeSlides>
                <HomeList juegos={juegos} />
            </div>
        </div>

    );
};

export default HomePage;

