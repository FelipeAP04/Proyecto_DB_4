import React, { useState } from 'react';
import ComponenteCRUD from './ComponenteCRUD';
import VistaComponentes from './VistaComponentes';

const ReportesMenu = () => {
  const [vistaActual, setVistaActual] = useState('crud');

  return (
    <div className="menu-principal-container">
      <nav className="menu-principal-nav">
        <button 
          className={`menu-btn ${vistaActual === 'crud' ? 'active' : ''}`}
          onClick={() => setVistaActual('crud')}
        >
          Inventario 
        </button>
        <button 
          className={`menu-btn ${vistaActual === 'vista' ? 'active' : ''}`}
          onClick={() => setVistaActual('vista')}
        >
          Reporte de compras
        </button>
        <button 
          className={`menu-btn ${vistaActual === 'vista' ? 'active' : ''}`}
          onClick={() => setVistaActual('vista')}
        >
          Clientes frecuentes
        </button>
      </nav>

      <div className="contenido-vista">
        {vistaActual === 'crud' ? (
          <ComponenteCRUD />
        ) : vistaActual === 'vista' ? (
          <VistaComponentes />
        )  : null} 
      </div>
    </div>
  );
};

export default ReportesMenu;