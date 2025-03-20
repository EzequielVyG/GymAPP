import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/NavBar/navbar";
import Clientes from "../Clientes/clientes";
import Rutinas from "../Rutinas/rutinas";
import DetallesRutina from "../DetallesRutina/detallesRutina";
import Mensajes from "../Mensajes/mensajes";
import Turnos from "../Turnos/turnos";

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="container mt-4">
        <Routes>
          <Route path="/clientes" element={<Clientes />} /> 
          <Route path="/rutinas" element={<Rutinas />} /> 
          <Route path="/rutina/:id" element={<DetallesRutina />} />
          <Route path="/turnos" element={<Turnos />} />
          <Route path="/mensajes" element={<Mensajes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
