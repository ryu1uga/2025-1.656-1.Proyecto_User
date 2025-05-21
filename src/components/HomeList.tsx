
const listaPrueba = [
      { nombre: "The Legend of Zelda: Breath of the Wild", valoracion: 9.8, ventas: 31.5 },
    { nombre: "Red Dead Redemption 2", valoracion: 9.7, ventas: 61 },
    { nombre: "The Witcher 3: Wild Hunt", valoracion: 9.6, ventas: 50 },
    { nombre: "God of War (2018)", valoracion: 9.5, ventas: 23 },
    { nombre: "Elden Ring", valoracion: 9.5, ventas: 25 },
    { nombre: "Grand Theft Auto V", valoracion: 9.6, ventas: 185 },
    { nombre: "Super Mario Odyssey", valoracion: 9.2, ventas: 27 },
    { nombre: "Minecraft", valoracion: 9.0, ventas: 300 },
    { nombre: "Horizon Zero Dawn", valoracion: 8.9, ventas: 24 },
    { nombre: "Cyberpunk 2077", valoracion: 8.5, ventas: 25 },
    { nombre: "Haxball", valoracion: 10.0, ventas: 100 },
];
const HomeList=()=> {
        return(<div className="mt-5">
                    <div id="tipodetop"></div>
                    <div id="TablaJuegos" className="d-flex flex-wrap gap-3 justify-content-center mt-3"></div>
                </div>);
                
};

export default HomeList