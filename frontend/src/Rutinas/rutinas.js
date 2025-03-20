import React from "react";
import { Link } from "react-router-dom";
import { rutinas } from "../Data/mockData";
import "../Style/tablaRutinas.css"

function Rutinas() {
  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center text-white p-3 rounded" style={{backgroundColor:"#027c68"}}>Rutinas</h2>
      <div className="table-responsive">
        <table className="table-custom">
          <thead>
          <tr>
            <th>Nombre</th>
            <th>Duración</th>
            <th>Objetivo</th>
            <th>Dificultad</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {rutinas.map(rutina => (
            <tr key={rutina.id}>
              <td>{rutina.nombre}</td>
              <td>{rutina.duración}</td>
              <td>{rutina.objetivo}</td>
              <td>{rutina.dificultad}</td>
              <td>
                <Link to={`/rutina/${rutina.id}`} className="btn btn-dark"> <i class="bi bi-card-checklist"></i> </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default Rutinas;