import SearchIcon from '@mui/icons-material/Search';
import "./buscadorRecetas.css";

const BuscadorRecetas = ({ valorBusqueda, manejarBusqueda }) => {
  const manejarCambio = (event) => {
    manejarBusqueda(event.target.value); // Llamar a la función pasada desde el padre
  };

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
        <button>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default BuscadorRecetas;
