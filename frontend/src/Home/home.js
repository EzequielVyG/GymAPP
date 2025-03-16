import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">

      {loading && <p className="text-center">Cargando datos...</p>}
      {error && <p className="text-center text-danger">Error: {error}</p>}

      <button className="btn btn-primary">Haz clic aquí</button>

      {/* Mostrar los datos obtenidos del backend */}
      <ul className="mt-4">
        {data.map((item, index) => (
          <li key={index}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
