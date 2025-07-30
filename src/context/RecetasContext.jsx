import { createContext, useContext, useEffect, useState } from "react";

const RecetasContext = createContext();

export const useRecetas = () => useContext(RecetasContext);

export const RecetasProvider = ({ children }) => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    fetch("/data/recetas.json")
      .then((res) => res.json())
      .then(setRecetas)
      .catch((e) => console.error("Error al cargar recetas", e));
  }, []);

  return (
    <RecetasContext.Provider value={recetas}>
      {children}
    </RecetasContext.Provider>
  );
};
