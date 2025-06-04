import React, { useState } from 'react';
import axios from 'axios';

const ReporteClientes = () => {
  const [filtros, setFiltros] = useState({});
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const buscar = async () => {
    setLoading(true);
    const params = { ...filtros };
    try {
      const res = await axios.get('/api/reportes/clientes', { params });
      setResultados(res.data);
    } catch (err) {
      alert('Error al buscar');
    }
    setLoading(false);
  };

  const exportarCSV = async () => {
    const params = { ...filtros, formato: 'csv' };
    const url = `/api/reportes/clientes?${new URLSearchParams(params).toString()}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <h2>Reporte de Clientes</h2>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <input name="ciudad" placeholder="Ciudad" onChange={handleChange} />
        <input name="edadMin" placeholder="Edad mínima" type="number" onChange={handleChange} />
        <input name="edadMax" placeholder="Edad máxima" type="number" onChange={handleChange} />
        <input name="comprasMin" placeholder="Compras mínimas" type="number" onChange={handleChange} />
        <input name="comprasMax" placeholder="Compras máximas" type="number" onChange={handleChange} />
        <input name="fechaRegistroInicio" type="date" onChange={handleChange} />
        <input name="fechaRegistroFin" type="date" onChange={handleChange} />
        <input name="estado" placeholder="Estado" onChange={handleChange} />
        <button onClick={buscar} disabled={loading}>Buscar</button>
        <button onClick={exportarCSV}>Exportar CSV</button>
      </div>
      <table border="1" style={{ marginTop: 16, width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th><th>Nombre</th><th>Ciudad</th><th>Edad</th><th>Fecha Registro</th><th>Estado</th><th>Compras</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((r, i) => (
            <tr key={i}>
              <td>{r.id}</td><td>{r.nombre}</td><td>{r.ciudad}</td><td>{r.edad}</td><td>{r.fechaRegistro}</td><td>{r.estado}</td><td>{r.compras}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReporteClientes;
