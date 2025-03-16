import React, { useState } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap

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
  { 
    id: 2, 
    nombre: "Pecho", 
    duración: "1 Hora", 
    objetivo: "Ganar masa muscular", 
    dificultad: "Intermedio", 
    ejercicios: [
      { 
        nombre: "Levantamiento en banco plano", 
        repeticiones: "3 series a máximo peso", 
        descripcion: "Ejercicio para tonificar el pectoral completo", 
        video: "https://www.example.com/correr-video"
      },
      { 
        nombre: "Apertura", 
        repeticiones: "3 series a máximo peso", 
        descripcion: "Utilizar la máquina de pecho con agarre abierto", 
        video: "https://www.example.com/bicicleta-video"
      },
      {
        nombre: "Levantamiento en banco inclinado", 
        repeticiones: "3 series a máximo peso", 
        descripcion: "Ejercicio para la parte de arriba de los pectorales", 
        video: "https://www.example.com/sentadillas-video"
      }
    ]
  },
  { id: 3, nombre: "Resistir", duración: 40, objetivo: "Mejorar la resistencia", dificultad: "Avanzado", }
];

function DetallesRutina() {
  const { id } = useParams(); // Obtiene el ID de la rutina desde la URL
  const rutina = rutinas.find(r => r.id === parseInt(id)); // Busca la rutina correspondiente

  const [activeTab, setActiveTab] = useState(0); // Estado para controlar la pestaña activa

  if (!rutina) {
    return <p>Rutina no encontrada.</p>;
  }

  return (
    <div className="container mt-3">
      <h2 style={{color: "#017c64"}}>{rutina.nombre}</h2>

      <div className="d-flex justify-content-start mb-4">
        <div className="me-4"><strong>Duración:</strong> {rutina.duración} minutos</div>
        <div className="me-4"><strong>Objetivo:</strong> {rutina.objetivo}</div>
        <div><strong>Dificultad:</strong> {rutina.dificultad}</div>
      </div>

      <h4>Ejercicios:</h4>

      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {rutina.ejercicios.map((ejercicio, index) => (
          <li className="nav-item" role="presentation" key={index}>
            <a
              className={`nav-link ${activeTab === index ? "active" : ""}`}
              id={`tab-${index}`}
              href="#"
              onClick={() => setActiveTab(index)}
              role="tab"
              aria-controls={`tab-content-${index}`}
              aria-selected={activeTab === index ? "true" : "false"}
              style={{
                color: activeTab === index ? "black" : "#017c64", // Color del texto según el estado del tab
                border: "none" // Sin bordes
              }}
            >
              {ejercicio.nombre}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content" id="myTabContent">
        {rutina.ejercicios.map((ejercicio, index) => (
          <div
            key={index}
            className={`tab-pane fade ${activeTab === index ? "show active" : ""}`}
            id={`tab-content-${index}`}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
          >
            <div className="mt-3">
              <p><strong>Repeticiones:</strong> {ejercicio.repeticiones}</p>
              <p><strong>Descripción:</strong> {ejercicio.descripcion}</p>
              <div className="mb-3">
                <iframe
                  width="100%"
                  height="315"
                  src={ejercicio.video}
                  title={ejercicio.nombre}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetallesRutina;
