import Tarjeta from "../tarjeta/Tarjeta";
import { useState, useEffect } from "react";
import BuscadorRecetas from "../buscadorRecetas/BuscadorRecetas";
import "./seccionHome.css";

const SeccionHome = () => {
  const [recetas, setRecetas] = useState([]); // Todas las recetas
  const [filtradas, setFiltradas] = useState([]); // Recetas filtradas
  const [buscador, setBuscador] = useState(""); // Valor del input de búsqueda

  useEffect(() => {
    // Usar fetch para cargar el archivo JSON desde la carpeta public
    fetch("/data/recetas.json")
      .then((response) => response.json())
      .then((data) => {
        setRecetas(data);
        setFiltradas(data); // Inicializamos filtradas con todas las recetas
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  // Función para manejar el cambio en el buscador
  const manejarBusqueda = (valorBusqueda) => {
    setBuscador(valorBusqueda.toLowerCase());

    if (valorBusqueda === "") {
      // Si el buscador está vacío, mostramos todas las recetas
      setFiltradas(recetas);
    } else {
      // Filtramos las recetas que coincidan con la búsqueda
      const recetasFiltradas = recetas.filter((receta) =>
        receta.nombre.toLowerCase().includes(valorBusqueda.toLowerCase())
      );
      setFiltradas(recetasFiltradas);
    }
  };

  return (
    <section className="seccion_home">
      <header className="buscador_home">
        {/* Incluir el componente BuscadorRecetas y pasarle manejarBusqueda */}
        <BuscadorRecetas valorBusqueda={buscador} manejarBusqueda={manejarBusqueda} />
        <h1>Recetas</h1>
      </header>

      <div className="seccion_tarjetas">
        {filtradas.length > 0 ? (
          filtradas.map((receta) => (
            <Tarjeta
              key={receta.id}
              imagen={receta.imagen}
              nombre={receta.nombre}
              comentario={receta.comentario}
            />
          ))
        ) : (
          <p>No se encontraron recetas.</p>
        )}
      </div>
    </section>
  );
};

export default SeccionHome;
