import React, { useState } from "react";

const chatsMock = {
  clientes: [
    {
      clienteId: 1,
      clienteNombre: "Ana",
      mensajes: [
        { id: 1, sender: "Entrenador", text: "¿Cómo te sentiste con la rutina?" , leido: false },
        { id: 2, sender: "Cliente", text: "Fue bastante intensa, pero bien.", leido: true },
      ]
    },
    {
      clienteId: 2,
      clienteNombre: "Luis",
      mensajes: [
        { id: 1, sender: "Entrenador", text: "¿Pudiste completar todos los ejercicios?", leido: false },
        { id: 2, sender: "Cliente", text: "Sí, pero necesito ayuda con la técnica.", leido: true },
      ]
    }
  ],
  entrenadores: [
    {
      entrenadorId: 1,
      entrenadorNombre: "Carlos",
      mensajes: [
        { id: 1, sender: "Entrenador", text: "¿Cómo vas con tus entrenamientos?", leido: false },
        { id: 2, sender: "Entrenador", text: "Recuerda mantener una buena alimentación.", leido: false },
      ]
    },
    {
      entrenadorId: 2,
      entrenadorNombre: "Laura",
      mensajes: [
        { id: 1, sender: "Entrenador", text: "¿Necesitas ajustar tu rutina?", leido: false },
      ]
    }
  ]
};

function Mensajes() {
  const [chats, setChats] = useState(chatsMock);
  const [mostrarClientes, setMostrarClientes] = useState(true);
  const [chatActivo, setChatActivo] = useState(chatsMock.clientes[0]);
  const [nuevoMensaje, setNuevoMensaje] = useState("");

  const seleccionarChat = (chat) => {
    const chatsActualizados = chats[mostrarClientes ? "clientes" : "entrenadores"].map(c =>
      (mostrarClientes ? c.clienteId : c.entrenadorId) === 
      (mostrarClientes ? chat.clienteId : chat.entrenadorId)
        ? { ...c, mensajes: c.mensajes.map(m => ({ ...m, leido: true })) }
        : c
    );

    setChats({
      ...chats,
      [mostrarClientes ? "clientes" : "entrenadores"]: chatsActualizados
    });

    setChatActivo(chat);
    setNuevoMensaje("");
  };

  const enviarMensaje = () => {
    if (nuevoMensaje.trim() === "") return;
    
    const mensaje = {
      id: chatActivo.mensajes.length + 1,
      sender: "Entrenador",
      text: nuevoMensaje,
      leido: false
    };
    
    const chatsActualizados = chats[mostrarClientes ? "clientes" : "entrenadores"].map(chat =>
      (mostrarClientes ? chat.clienteId : chat.entrenadorId) === 
      (mostrarClientes ? chatActivo.clienteId : chatActivo.entrenadorId)
        ? { ...chat, mensajes: [...chat.mensajes, mensaje] }
        : chat
    );

    setChats({
      ...chats,
      [mostrarClientes ? "clientes" : "entrenadores"]: chatsActualizados
    });

    setChatActivo({
      ...chatActivo,
      mensajes: [...chatActivo.mensajes, mensaje]
    });

    setNuevoMensaje("");
  };

  const contarMensajesNoLeidos = (mensajes) =>
    mensajes.filter(msg => !msg.leido && msg.sender === "Cliente").length;

  return (
    <div className="container mt-3">
      <div className="d-flex mb-3">
        <button 
            className={`btn ${mostrarClientes ? "btn" : "btn-outline"} me-2`}
            style={{ backgroundColor: mostrarClientes ? "#017c64" : "transparent", color: mostrarClientes ? "white" : "#017c64", borderColor: "#017c64" }}
            onClick={() => setMostrarClientes(true)}
            >
        Clientes
        </button>
        <button 
            className={`btn ${!mostrarClientes ? "btn" : "btn-outline"} `}
            style={{ backgroundColor: !mostrarClientes ? "#017c64" : "transparent", color: !mostrarClientes ? "white" : "#017c64", borderColor: "#017c64" }}
            onClick={() => setMostrarClientes(false)}
            >
        Entrenadores
        </button>
      </div>

      <div className="row border rounded shadow" style={{ height: "500px" }}>
        
        {/* Barra lateral */}
        <div className="col-md-3 col-12 p-0 bg-light border-end">
          <h5 className="p-3 text-white text-center" style={{ backgroundColor: "#017c64" }}>
            {mostrarClientes ? "Clientes" : "Entrenadores"}
          </h5>
          <div className="list-group list-group-flush">
            {chats[mostrarClientes ? "clientes" : "entrenadores"].map(chat => (
              <button
                key={mostrarClientes ? chat.clienteId : chat.entrenadorId}
                className={`list-group-item shadow-none list-group-item-action ${
                  (mostrarClientes 
                    ? chatActivo.clienteId === chat.clienteId 
                    : chatActivo.entrenadorId === chat.entrenadorId) 
                    ? "active bg-dark text-white" 
                    : "text-dark"
                }`}
                onClick={() => seleccionarChat(chat)}
              >
                <strong>{mostrarClientes ? chat.clienteNombre : chat.entrenadorNombre}</strong>
                {contarMensajesNoLeidos(chat.mensajes) > 0 && (
                  <span className="badge bg-danger ms-2">
                    {contarMensajesNoLeidos(chat.mensajes)}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Área del Chat */}
        <div className="col-md-9 col-12 d-flex flex-column p-0">
          <div className="flex-grow-1 p-3 bg-dark bg-opacity-10 overflow-auto">
            {chatActivo.mensajes.map(msg => (
            <div key={msg.id} className={`mb-3 ${msg.sender === "Entrenador" ? "text-end" : "text-start"}`}>
            <div className={`p-2 rounded ${
                msg.sender === "Entrenador"
                ? "text-white"
                : "bg-light text-dark"
            }`} style={{
                display: "inline-block",
                backgroundColor: msg.sender === "Entrenador" ? "#017c64" : "#f8f9fa" // Cambia el color aquí
            }}>
                <p className="mb-1"><strong>{msg.sender}:</strong></p>
                <p className="mb-0">{msg.text}</p>
            </div>
            </div>
            ))}
          </div>

          <div className="input-group p-3 border-top">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe un mensaje..."
              value={nuevoMensaje}
              onChange={e => setNuevoMensaje(e.target.value)}
            />
            <button className="btn text-white" style={{backgroundColor:"#017c64"}} onClick={enviarMensaje}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mensajes;
