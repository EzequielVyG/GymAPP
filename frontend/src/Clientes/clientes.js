import React from "react";

const clientes = [
  { id: 1, nombre: "Juan Pérez", edad: 30, peso: "75kg", altura: "1.75m", pago: "Si" },
  { id: 2, nombre: "Ana López", edad: 25, peso: "60kg", altura: "1.65m", pago: "No" },
  { id: 3, nombre: "Carlos García", edad: 40, peso: "85kg", altura: "1.80m", pago: "Si" }
];

function getPagoClass(pago) {
  const today = new Date();
  const day = today.getDate();

  if (pago === "Si") return "table-success"; 
  if (pago === "No" && day <= 10) return "table-warning"; 
  if (pago === "No" && day > 10) return "table-danger"; 
  return "";
}

function Clientes() {
  return (
    <div className="container mt-3">
      <h2 className="mb-3">Clientes</h2>
      <table className="table table-hover table">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Peso</th>
            <th>Altura</th>
            <th>Pago</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id} className={getPagoClass(cliente.pago)}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.edad}</td>
              <td>{cliente.peso}</td>
              <td>{cliente.altura}</td>
              <td>{cliente.pago}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clientes;