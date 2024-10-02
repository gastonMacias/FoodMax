import Tarjeta from "../tarjeta/Tarjeta";
import { useState, useEffect } from "react";
import "./seccionHome.css";

const SeccionHome = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    // Usar fetch para cargar el archivo JSON desde la carpeta public
    fetch("/data/recetas.json")
      .then((response) => response.json())
      .then((data) => setRecetas(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <section className="seccion_home">
      <header>
        <h1>Recetas</h1>
      </header>

      <div>
        {recetas.map((receta) => (
          <Tarjeta
            key={receta.id}
            imagen={receta.imagen}
            nombre={receta.nombre}
            comentario={receta.comentario}
          />
        ))}
      </div>
    </section>
  );
};

export default SeccionHome;
