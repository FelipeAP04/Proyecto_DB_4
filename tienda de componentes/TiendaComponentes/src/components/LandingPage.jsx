import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/tarjeta-madre.png';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="contenedor">
      <div className="landing-container">
        <h1 className="text-3xl font-bold text-center mb-8">Bienvenido a la Tienda de Componentes</h1>
        <div className="landing-buttons">
          <button
            className="btn btn-principal landing-btn"
            onClick={() => navigate('/componentes')}
          >
            Gestionar Componentes
          </button>
          <button
            className="btn btn-principal landing-btn"
            onClick={() => navigate('/clientes')}
          >
            Gestionar Clientes
          </button>
          <button
            className="btn btn-principal landing-btn"
            onClick={() => navigate('/compras')}
          >
            Gestionar Compras
          </button>
          <button
            className="btn btn-principal landing-btn"
            onClick={() => navigate('/reportes')}
          >
            Reportes
          </button>
        </div>

        <img src={logo} className="logo" alt='logo de la empresa'/>
      </div>
    </div>
  );
};

export default LandingPage;
