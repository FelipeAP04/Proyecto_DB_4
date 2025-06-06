import React, { useState } from 'react';
import ComponenteCRUD from './ComponenteCRUD';
import VistaComponentes from './VistaComponentes';
import ClientesCRUD from './ClientesCRUD';

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

export default MenuPrincipal;