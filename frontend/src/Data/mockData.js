export const clientes = [
    { id: 1, nombre: "Juan Pérez", edad: 30, peso: "75kg", altura: "1.75m", pago: "Si", idRutina: 1 },
    { id: 2, nombre: "Ana López", edad: 25, peso: "60kg", altura: "1.65m", pago: "No", idRutina: 2 },
    { id: 3, nombre: "Carlos García", edad: 40, peso: "85kg", altura: "1.80m", pago: "Si", idRutina: 3 }
  ];
  
  export const rutinas = [
    { 
      id: 1, 
      nombre: "Quemar", 
      duración: "30 min", 
      objetivo: "Bajar de peso", 
      dificultad: "Principiante", 
      ejercicios: [
        { nombre: "Correr", repeticiones: "20 minutos", descripcion: "Correr a un ritmo moderado.", video: "#" },
        { nombre: "Bicicleta", repeticiones: "10 minutos", descripcion: "Ejercicio en bicicleta estática.", video: "#" },
        { nombre: "Sentadillas", repeticiones: "3x15", descripcion: "Tonificar piernas y glúteos.", video: "#" }
      ]
    },
    { 
      id: 2, 
      nombre: "Pecho", 
      duración: "1 Hora", 
      objetivo: "Ganar masa muscular", 
      dificultad: "Intermedio", 
      ejercicios: [
        { nombre: "Banco plano", repeticiones: "3 series a máximo peso", descripcion: "Tonifica el pectoral.", video: "#" },
        { nombre: "Apertura", repeticiones: "3 series", descripcion: "Máquina con agarre abierto.", video: "#" },
        { nombre: "Banco inclinado", repeticiones: "3 series", descripcion: "Ejercicio para la parte superior.", video: "#" }
      ]
    },
    { id: 3, nombre: "Resistir", duración: "40 min", objetivo: "Mejorar resistencia", dificultad: "Avanzado" }
  ];
  