import React, { useState } from 'react';
import ReporteClientes from './ReporteClientes';
import ReporteCompras from './ReporteCompras';
import ReporteInventario from './ReporteInventario'

const ReportesMenu = () => {
  const [vistaActual, setVistaActual] = useState('inventario');

  return (
    <div className="menu-principal-container">
      <nav className="menu-principal-nav">
        <button 
          className={`menu-btn ${vistaActual === 'crud' ? 'active' : ''}`}
          onClick={() => setVistaActual('inventario')}
        >
          Inventario 
        </button>
        <button 
          className={`menu-btn ${vistaActual === 'vista' ? 'active' : ''}`}
          onClick={() => setVistaActual('compras')}
        >
          Reporte de compras
        </button>
        <button 
          className={`menu-btn ${vistaActual === 'vista' ? 'active' : ''}`}
          onClick={() => setVistaActual('clientes')}
        >
          Clientes frecuentes
        </button>
      </nav>

      <div className="contenido-vista">
        {vistaActual === 'inventario' ? (
          <ReporteInventario />
        ) : vistaActual === 'compras' ? (
          <ReporteCompras />
        ) : vistaActual === 'clientes' ? (  
          <ReporteClientes /> 
        ) : null} 
      </div>
    </div>
  );
};

export default ReportesMenu;