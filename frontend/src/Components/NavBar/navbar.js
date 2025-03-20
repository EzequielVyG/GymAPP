import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-3" style={{ backgroundColor: "#003333" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">GymAPP</Link>

        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav me-auto"> 
            <li className="nav-item">
              <Link className="nav-link" to="/clientes" onClick={closeNavbar}>
                <i className="bi bi-people-fill"></i> Clientes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rutinas" onClick={closeNavbar}>
                <i className="bi bi-person-arms-up"></i> Rutinas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/turnos" onClick={closeNavbar}>
                <i className="bi bi-clock-fill"></i> Turnos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mensajes" onClick={closeNavbar}>
                <i className="bi bi-envelope-fill"></i> Mensajes
              </Link>
            </li>
          </ul>

          {/* Notificaciones y Perfil agrupados correctamente */}
          <ul className="navbar-nav ms-auto d-flex align-items-rigth">
            <li className="nav-item ">
              <Link className="nav-link " to="/notificaciones" onClick={closeNavbar}>
                <i className="bi bi-bell-fill"></i> Notificaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/perfil" onClick={closeNavbar}>
                <i className="bi bi-person-circle"></i> Perfil
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 991px) {
            .navbar-collapse {
              position: absolute;
              top: 100%;
              right: 0;
              width: 40%;
              background-color: #025c4c;
              box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
              z-index: 1000;
              border-radius: 0;
              padding: 7px;
            }

            .navbar-collapse .nav-item {
              margin-bottom: 2px;
              text-align: rigth;
            }

            .navbar-collapse .nav-link {
              color: white;
              padding: 5 px;
              display: block;
              border-radius: 5px;
            }

            .navbar-collapse .nav-link:hover {
              background-color: #028a6e;
            }

            .navbar-nav.ms-auto {
              justify-content: rigth;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
