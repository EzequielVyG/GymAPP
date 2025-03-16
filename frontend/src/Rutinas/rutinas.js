import React from "react";
import { Link } from "react-router-dom";

const rutinas = [
    { 
        id: 1, 
        nombre: "Quemar", 
        duración: 30, 
        objetivo: "Bajar de peso", 
        dificultad: "Principiante", 
        ejercicios: [
          { 
            nombre: "Correr", 
            repeticiones: "20 minutos", 
            descripcion: "Correr a un ritmo moderado para quemar calorías.", 
            video: "https://www.example.com/correr-video"
          },
          { 
            nombre: "Bicicleta", 
            repeticiones: "10 minutos", 
            descripcion: "Realizar ejercicio en bicicleta estática o al aire libre.", 
            video: "https://www.example.com/bicicleta-video"
          },
          {
            nombre: "Sentadillas", 
            repeticiones: "3 series de 15 repeticiones", 
            descripcion: "Ejercicio para tonificar piernas y glúteos.", 
            video: "https://www.example.com/sentadillas-video"
          }
        ]
      },
  { id: 2, nombre: "Pecho", duración: "1 Hora", objetivo: "Ganar masa muscular", dificultad: "Intermedio",         ejercicios: [
    { 
      nombre: "Levantamiento en banco plano", 
      repeticiones: "3 series a maximo peso", 
      descripcion: "Ejercicio para tonificar el pectoral completo", 
      video: "https://www.example.com/correr-video"
    },
    { 
      nombre: "Apertura", 
      repeticiones: "3 series a maximo peso", 
      descripcion: "Utilizar la maquina con de pecho con agarre abierto", 
      video: "https://www.example.com/bicicleta-video"
    },
    {
      nombre: "Levantamiento en banco inclinado", 
      repeticiones: "3 series a maximo peso", 
      descripcion: "Ejercicio la parte de arriba de los pectorales", 
      video: "https://www.example.com/sentadillas-video"
    }
  ]},
  { id: 3, nombre: "Resistir", duración: 40, objetivo: "Mejorar la resisitencia", dificultad: "Avanzado",}
];


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
            <th>Objetio</th>
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