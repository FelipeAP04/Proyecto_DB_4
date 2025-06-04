import React, { useState } from 'react';
import axios from 'axios';

const ReporteInventario = () => {
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
      const res = await axios.get('/api/reportes/inventario', { params });
      setResultados(res.data);
    } catch {
      alert('Error al buscar');
    }
    setLoading(false);
  };

  const exportarCSV = async () => {
    const params = { ...filtros, formato: 'csv' };
    const url = `/api/reportes/inventario?${new URLSearchParams(params).toString()}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <h2>Reporte de Inventario</h2>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <input name="tipoComponente" placeholder="Tipo de componente" onChange={handleChange} />
        <input name="proveedorId" placeholder="ID Proveedor" onChange={handleChange} />
        <input name="stockMin" placeholder="Stock mínimo" type="number" onChange={handleChange} />
        <input name="stockMax" placeholder="Stock máximo" type="number" onChange={handleChange} />
        <input name="precioMin" placeholder="Precio mínimo" type="number" onChange={handleChange} />
        <input name="precioMax" placeholder="Precio máximo" type="number" onChange={handleChange} />
        <input name="estado" placeholder="Estado" onChange={handleChange} />
        <button onClick={buscar} disabled={loading}>Buscar</button>
        <button onClick={exportarCSV}>Exportar CSV</button>
      </div>
      <table border="1" style={{ marginTop: 16, width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th><th>Componente</th><th>Tipo</th><th>Proveedor</th><th>Stock</th><th>Precio</th><th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((r, i) => (
            <tr key={i}>
              <td>{r.id}</td><td>{r.componente}</td><td>{r.tipo_componente}</td><td>{r.proveedor}</td><td>{r.stock}</td><td>{r.precio}</td><td>{r.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReporteInventario;
