import React, { useState } from 'react';
import ComponenteCRUD from './ComponenteCRUD';
import VistaComponentes from './VistaComponentes';
import ClientesCRUD from './ClientesCRUD';
import ReporteCompras from './ReporteCompras';
import ReporteInventario from './ReporteInventario';
import ReporteClientes from './ReporteClientes';

const MenuPrincipal = () => {
  const [vistaActual, setVistaActual] = useState('crud');

  return (
    <div className="menu-principal-container">
      <nav className="menu-principal-nav">
        <button 
          className={`menu-btn ${vistaActual === 'crud' ? 'active' : ''}`}
          onClick={() => setVistaActual('crud')}
        >
          Administrar Componentes
        </button>
        <button 
          className={`menu-btn ${vistaActual === 'vista' ? 'active' : ''}`}
          onClick={() => setVistaActual('vista')}
        >
          Ver Componentes
        </button>
        <button 
          className={`menu-btn ${vistaActual === 'reporteCompras' ? 'active' : ''}`}
          onClick={() => setVistaActual('reporteCompras')}
        >
          Reporte Compras
        </button>
        <button 
          className={`menu-btn ${vistaActual === 'reporteInventario' ? 'active' : ''}`}
          onClick={() => setVistaActual('reporteInventario')}
        >
          Reporte Inventario
        </button>
        <button 
          className={`menu-btn ${vistaActual === 'reporteClientes' ? 'active' : ''}`}
          onClick={() => setVistaActual('reporteClientes')}
        >
          Reporte Clientes
        </button>
      </nav>

      <div className="contenido-vista">
        {vistaActual === 'crud' ? (
          <ComponenteCRUD />
        ) : vistaActual === 'vista' ? (
          <VistaComponentes />
        ) : vistaActual === 'reporteCompras' ? (
          <ReporteCompras />
        ) : vistaActual === 'reporteInventario' ? (
          <ReporteInventario />
        ) : vistaActual === 'reporteClientes' ? (
          <ReporteClientes />
        ) : null}
      </div>
    </div>
  );
};

export default MenuPrincipal;