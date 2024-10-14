import BuscadorRecetas from "../buscadorRecetas/BuscadorRecetas";

import "./seccionFavoritas.css";


const SeccionFavoritas = () => {
    return <section className="seccion_favoritas">
        <header className="buscador_favoritas">
        {/* Incluir el componente BuscadorRecetas y pasarle manejarBusqueda */}
        {/* <BuscadorRecetas valorBusqueda={buscador}
          valorGrupo={grupo}
          valorDificultad={dificultad}
          valorPlato={plato}
          manejarBusqueda={manejarBusqueda} /> */}
        <h2>Recetas Favoritas</h2>
      </header>
    </section>
}


export default SeccionFavoritas;