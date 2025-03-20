import React from "react";
import { Link } from "react-router-dom";
import { rutinas } from "../Data/mockData";

function Rutinas() {
  return (
    <div className="container mt-3">
      <h2 className="mb-3">Rutinas</h2>
      <table className="table table-hover table">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
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
              <td>{rutina.id}</td>
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
  );
}

export default Rutinas;