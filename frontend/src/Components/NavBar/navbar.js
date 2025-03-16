import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#017c64" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">GymAPP</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/clientes"><i class="bi bi-people-fill"></i> Clientes</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/rutinas">
              <i class="bi bi-person-arms-up"></i> Rutinas
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/seguimiento"><i class="bi bi-eye-fill"></i> Seguimiento</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/turnos"><i class="bi bi-clock-fill"></i> Turnos</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/mensajes"><i className="bi bi-envelope-fill"></i> Mensajes</Link>
            </li>
          </ul>

          {/* Sección de perfil alineada a la derecha */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/perfil">
                <i className="bi bi-person-circle"></i> Perfil
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
