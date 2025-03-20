import React, { useState } from "react";
import "../Style/tablaTurnos.css";

const horariosManana = ["07:30", "08:30", "09:30", "10:30", "11:30", "12:30"];
const horariosTarde = ["14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const horarios = [...horariosManana, ...horariosTarde];

const maxPersonas = 15;

function Turnos() {
  const [turnos, setTurnos] = useState(
    horarios.map((hora) => ({ hora, personas: Math.floor(Math.random() * 16) }))
  );

  const getColor = (cantidad) => {
    const porcentaje = (cantidad / maxPersonas) * 100;
    if (porcentaje <= 50) return "success";
    if (porcentaje <= 80) return "warning";
    return "danger";
  };

  return (
    <div className="container">
            <h2 className="mb-3 text-center text-white p-3 rounded" style={{backgroundColor:"#027c68"}}>Turnos Disponibles</h2>
      <table className="turnos-table">
        <thead>
          <tr>
            <th>Horario</th>
            <th>Personas</th>
            <th>Ocupación</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno, index) => (
            <tr key={index}>
              <td>{turno.hora}</td>
              <td>{turno.personas} / {maxPersonas}</td>
              <td>
                <div className={`progress-bar ${getColor(turno.personas)}`} style={{ width: `${(turno.personas / maxPersonas) * 100}%` }}>
                  {Math.round((turno.personas / maxPersonas) * 100)}%
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Turnos;
