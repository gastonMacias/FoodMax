import { BrowserRouter, Route, Routes } from "react-router-dom";

//secciones
import Navbar from "../src/components/navbar/Navbar";

// pages
import Home from "../src/pages/home/Home";
import Favoritas from "./pages/favoritas/Favoritas";
import MiRecetario from "../src/pages/miRecetario/MiRecetario";

import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/favoritas" element={<Favoritas />} />
          <Route path="/miRecetario" element={<MiRecetario />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
