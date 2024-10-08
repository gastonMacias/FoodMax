import SearchIcon from '@mui/icons-material/Search';
import "./buscadorRecetas.css";

const BuscadorRecetas = ({ valorBusqueda, valorGrupo, valorDificultad, valorPlato, manejarBusqueda }) => {
    const manejarCambio = (event) => {
        manejarBusqueda(
          event.target.value,
          valorGrupo,
          valorDificultad,
          valorPlato
        );
      };

    //   const manejarFiltroGrupo = (event) => {
    //     manejarBusqueda(
    //       valorBusqueda,
    //       event.target.value,
    //       valorDificultad,
    //       valorPlato
    //     );
    //   };

    //   const manejarFiltroDificultad = (event) => {
    //     manejarBusqueda(
    //       valorBusqueda,
    //       valorGrupo,
    //       event.target.value,
    //       valorPlato
    //     );
    //   };

    //   const manejarFiltroPlato = (event) => {
    //     manejarBusqueda(
    //       valorBusqueda,
    //       valorGrupo,
    //       valorDificultad,
    //       event.target.value
    //     );
    //   };

  return (
    <div className="buscador">
      <div className="buscador_input">
        <input
          type="text"
          placeholder="¿Qué te gustaría degustar?"
          id="input"
          value={valorBusqueda}
          onChange={manejarCambio}
        />
        {/* <button>
          <SearchIcon />
        </button> */}

        {/* <div className="filtros">
        <select value={valorGrupo} onChange={manejarFiltroGrupo}>
          <option value="">Filtrar por grupo</option>
          <option value="panificados">Panificados</option>
          <option value="pastas">Pastas</option>
          <option value="vegana">Vegana</option>
        </select>

        <select value={valorDificultad} onChange={manejarFiltroDificultad}>
          <option value="">Filtrar por dificultad</option>
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>

        <select value={valorPlato} onChange={manejarFiltroPlato}>
          <option value="">Filtrar por tipo de plato</option>
          <option value="principal">Principal</option>
          <option value="postre">Postre</option>
          <option value="entrada">Entrada</option>
        </select>
      </div> */}
      
      </div>
    </div>
  );
};

export default BuscadorRecetas;
