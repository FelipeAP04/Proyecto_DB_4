import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ComponenteCRUD from './components/ComponenteCRUD';
import ClientesCRUD from './components/ClientesCRUD';
import ComprasCRUD from './components/ComprasCRUD';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/componentes" element={<ComponenteCRUD />} />
          <Route path="/clientes" element={<ClientesCRUD />} />
          <Route path="/compras" element={<ComprasCRUD />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
