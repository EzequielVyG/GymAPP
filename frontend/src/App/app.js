import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/NavBar/navbar";
import Clientes from "../Clientes/clientes";
import Rutinas from "../Rutinas/rutinas";
import DetallesRutina from "../DetallesRutina/detallesRutina";

function App() {
  return (
    <Router>
      <Navbar /> {/* Asegúrate de que el Navbar está dentro del Router */}
      <div className="container mt-4">
        <Routes>
          <Route path="/clientes" element={<Clientes />} /> 
          <Route path="/rutinas" element={<Rutinas />} /> 
          <Route path="/rutina/:id" element={<DetallesRutina />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
