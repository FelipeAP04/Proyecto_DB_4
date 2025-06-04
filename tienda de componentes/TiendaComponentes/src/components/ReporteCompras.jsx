import React, { useState } from 'react';
import axios from 'axios';

const ReporteCompras = () => {
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
      const res = await axios.get('/api/reportes/compras', { params });
      setResultados(res.data);
    } catch {
      alert('Error al buscar');
    }
    setLoading(false);
  };

  const exportarCSV = async () => {
    const params = { ...filtros, formato: 'csv' };
    const url = `/api/reportes/compras?${new URLSearchParams(params).toString()}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <h2>Reporte de Compras</h2>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <input name="clienteId" placeholder="ID Cliente" onChange={handleChange} />
        <input name="proveedorId" placeholder="ID Proveedor" onChange={handleChange} />
        <input name="fechaInicio" type="date" onChange={handleChange} />
        <input name="fechaFin" type="date" onChange={handleChange} />
        <input name="montoMin" placeholder="Monto mínimo" type="number" onChange={handleChange} />
        <input name="montoMax" placeholder="Monto máximo" type="number" onChange={handleChange} />
        <input name="tipoComponente" placeholder="Tipo de componente" onChange={handleChange} />
        <button onClick={buscar} disabled={loading}>Buscar</button>
        <button onClick={exportarCSV}>Exportar CSV</button>
      </div>
      <table border="1" style={{ marginTop: 16, width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th><th>Fecha</th><th>Monto</th><th>Cliente</th><th>Ciudad</th><th>Componente</th><th>Tipo</th><th>Proveedor</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((r, i) => (
            <tr key={i}>
              <td>{r.id}</td><td>{r.fecha}</td><td>{r.monto}</td><td>{r.cliente}</td><td>{r.ciudad}</td><td>{r.componente}</td><td>{r.tipo_componente}</td><td>{r.proveedor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReporteCompras;
