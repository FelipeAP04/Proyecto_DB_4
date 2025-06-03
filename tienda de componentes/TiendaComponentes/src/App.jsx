import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MenuPrincipalComponentes from './components/MenuPrincipalComponentes';
import ClientesCRUD from './components/ClientesCRUD';
import ComprasCRUD from './components/ComprasCRUD';
import ReportesMenu from './components/ReportesMenu';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/componentes" element={<MenuPrincipalComponentes />} />
          <Route path="/clientes" element={<ClientesCRUD />} />
          <Route path="/compras" element={<ComprasCRUD />} />
          <Route path="/reportes" element={<ReportesMenu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
