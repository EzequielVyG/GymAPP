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
    <nav className="navbar navbar-expand-lg navbar-dark px-3" style={{ backgroundColor: "#017c64" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">GymAPP</Link>
        
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className={`custom-menu collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
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
              <Link className="nav-link" to="/seguimiento" onClick={closeNavbar}>
                <i className="bi bi-eye-fill"></i> Seguimiento
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

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/perfil" onClick={closeNavbar}>
                <i className="bi bi-person-circle"></i> Perfil
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 991px) {
            .custom-menu {
              position: absolute;
              top: 100%;
              right: 0; 
              width: 46%;
              background-color: #025c4c;
              box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
              z-index: 1000;
              border-radius: 0; 
            }

            .custom-menu ul {
              padding: 10px;
              margin: 0;
            }

            .custom-menu .nav-item {
              margin-bottom: 5px;
            }

            .custom-menu .nav-link {
              color: white;
              padding: 10px;
              display: block;
              border-radius: 5px;
            }

            .custom-menu .nav-link:hover {
              background-color: #028a6e;
            }
          }

        `}
      </style>
    </nav>
  );
}

export default Navbar;
