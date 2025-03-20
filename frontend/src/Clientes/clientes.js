import React from "react";
import "../Style/tablaClientes.css"
import { clientes, rutinas } from "../Data/mockData"; 

function getPagoClass(pago) {
  const today = new Date();
  const day = today.getDate();
  if (pago === "Si") return "table-success";
  if (pago === "No" && day <= 10) return "table-warning";
  if (pago === "No" && day > 10) return "table-danger";
  return "";
}

function getPagoIcon(pago) {
  const today = new Date();
  const day = today.getDate();
  if (pago === "Si") return <i className="bi bi-check-circle-fill text-success"></i>;
  if (pago === "No" && day <= 10) return <i className="bi bi-exclamation-circle-fill text-warning"></i>;
  if (pago === "No" && day > 10) return <i className="bi bi-x-circle-fill text-danger"></i>;
  return null;
}

function getRutinaNombre(idRutina) {
  const rutina = rutinas.find(r => r.id === idRutina);
  return rutina ? rutina.nombre : "Sin rutina";
}

function Clientes() {
  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center text-white p-3 rounded" style={{backgroundColor:"#027c68"}}>Lista de Clientes</h2>
      <div className="table-responsive">
        <table className="table-custom">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Rutina</th>
              <th>Pago</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <tr key={cliente.id} className={getPagoClass(cliente.pago)}>
                <td>{cliente.nombre}</td>
                <td>{getRutinaNombre(cliente.idRutina)}</td>
                <td>{getPagoIcon(cliente.pago)} {cliente.pago}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Clientes;
