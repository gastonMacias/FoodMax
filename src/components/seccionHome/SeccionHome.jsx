import Tarjeta from "../tarjeta/Tarjeta";
import { useState, useEffect } from "react";
import BuscadorRecetas from "../buscadorRecetas/BuscadorRecetas";
import "./seccionHome.css";

const SeccionHome = () => {
  const [recetas, setRecetas] = useState([]); // Todas las recetas
  const [filtradas, setFiltradas] = useState([]); // Recetas filtradas
  const [buscador, setBuscador] = useState(""); // Valor del input de búsqueda
  const [grupo, setGrupo] = useState(""); // Valor del filtro por grupo
  const [dificultad, setDificultad] = useState(""); // Valor del filtro por dificultad
  const [plato, setPlato] = useState(""); // Valor del filtro por tipo de plato


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
  const manejarBusqueda = (valorBusqueda, valorGrupo, valorDificultad, valorPlato) => {
    setBuscador(valorBusqueda.toLowerCase());
    setGrupo(valorGrupo.toLowerCase());
    setDificultad(valorDificultad.toLowerCase());
    setPlato(valorPlato.toLowerCase());

    if (valorBusqueda === "") {
      // Si el buscador está vacío, mostramos todas las recetas
      setFiltradas(recetas);
    } else {
      // Filtramos las recetas que coincidan con la búsqueda
      const recetasFiltradas = recetas.filter((receta) => {
        // Filtros condicionales (si el valor no está vacío, se aplica el filtro)
        const coincideNombre = receta.nombre.toLowerCase().includes(valorBusqueda.toLowerCase());
        const coincideGrupo = valorGrupo === "" || receta.grupo.toLowerCase().includes(valorGrupo.toLowerCase());
        const coincideDificultad = valorDificultad === "" || receta.dificultad.toLowerCase() === valorDificultad.toLowerCase();
        const coincidePlato = valorPlato === "" || receta.plato.toLowerCase() === valorPlato.toLowerCase();

        // Devuelve solo las recetas que cumplan todos los criterios
        return coincideNombre && coincideGrupo && coincideDificultad && coincidePlato;
      });
      setFiltradas(recetasFiltradas);
    }
  };

  return (
    <section className="seccion_home">
      <header className="buscador_home">
        {/* Incluir el componente BuscadorRecetas y pasarle manejarBusqueda */}
        <BuscadorRecetas valorBusqueda={buscador}
          valorGrupo={grupo}
          valorDificultad={dificultad}
          valorPlato={plato}
          manejarBusqueda={manejarBusqueda} />
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
