import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Img/logo.svg";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#"><img className="me-4" src={Logo} width={100} /> mateus fardin</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className={location.pathname === '/' ? 'nav-link nav-active' : 'nav-link'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/sobre" className={location.pathname === '/sobre' ? 'nav-link nav-active' : 'nav-link'}>Sobre</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projetos
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/projetos/calculadora-de-campanhas" className={location.pathname === '/projetos/calculadora-de-campanhas' ?
                    'nav-link nav-active' : 'nav-link'}>Calculadora de Campanhas
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
