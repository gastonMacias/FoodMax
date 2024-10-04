import { Route, Routes } from "react-router-dom";

//secciones
import Navbar from "../src/components/navbar/Navbar";

// pages
import Home from "../src/pages/home/Home";
import Favoritas from "./pages/favoritas/Favoritas";
import MiRecetario from "../src/pages/miRecetario/MiRecetario";

import './App.css'
import { Container } from "@mui/material";


function App() {


  return (
    <>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Favoritas" element={<Favoritas />} />
          <Route path="/MiRecetario" element={<MiRecetario />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
