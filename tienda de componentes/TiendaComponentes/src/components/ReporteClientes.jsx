import React, { useState, useEffect, useMemo } from 'react';
import BotonExportarCSV from './BotonExportarCSV';

const ReporteClientesFrecuentes = () => {
  const [clientes, setClientes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [estado, setEstado] = useState('todos');
  const [minCompras, setMinCompras] = useState('');
  const [minTotal, setMinTotal] = useState('');
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);

  useEffect(() => {
    fetch('/api/reportes/clientes') 
      .then(res => res.json())
      .then(data => setClientes(data))
      .catch(err => console.error('Error al cargar datos:', err));
  }, []);

  const datosFiltrados = useMemo(() => {
    return clientes.filter(c => {
      const coincideBusqueda = c.cliente.toLowerCase().includes(busqueda.toLowerCase()) || c.correo.toLowerCase().includes(busqueda.toLowerCase());
      const coincideEstado = estado === 'todos' || c.estado === (estado === 'activo');
      const coincideMinCompras = !minCompras || c.cantidad_compras >= parseInt(minCompras);
      const coincideMinTotal = !minTotal || c.total_comprado >= parseFloat(minTotal);
      const fechaCompra = new Date(c.fecha_registro);
      const enRangoFecha =
        (!fechaInicio || fechaCompra >= new Date(fechaInicio)) &&
        (!fechaFin || fechaCompra <= new Date(fechaFin));

      return coincideBusqueda && coincideEstado && coincideMinCompras && coincideMinTotal && enRangoFecha;
    });
  }, [clientes, busqueda, estado, minCompras, minTotal, fechaInicio, fechaFin]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Reporte de Clientes Frecuentes</h1>

      <div className="filtros-reporte">
        <input
          className='input-field-report'
          placeholder="Buscar por nombre o correo"
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
        <select className="select-report" value={estado} onChange={e => setEstado(e.target.value)}>
          <option value="todos">Todos</option>
          <option value="activo">Activos</option>
          <option value="inactivo">Inactivos</option>
        </select>
        <input
          className='input-field-report'
          type="number"
          placeholder="Mínimo de compras"
          value={minCompras}
          onChange={e => setMinCompras(e.target.value)}
        />
        <input
          className='input-field-report'
          type="number"
          placeholder="Total comprado mínimo"
          value={minTotal}
          onChange={e => setMinTotal(e.target.value)}
        />
        <div>
          <label className="text-sm">Desde:</label>
          <input className='input-field-report' type="date" onChange={e => setFechaInicio(e.target.value)} />
        </div>
        <div>
          <label className="text-sm">Hasta:</label>
          <input className='input-field-report' type="date" onChange={e => setFechaFin(e.target.value)} />
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <BotonExportarCSV datos={datosFiltrados} nombreArchivo="clientes_frecuentes.csv" />
      </div>

      <table className="tabla">
        <thead className="bg-gray-100">
            <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Cliente</th>
            <th className="px-4 py-2 border">Correo</th>
            <th className="px-4 py-2 border">Compras</th>
            <th className="px-4 py-2 border">Total Comprado</th>
            <th className="px-4 py-2 border">Registro</th>
            <th className="px-4 py-2 border">Estado</th>
            </tr>
        </thead>
        <tbody>
            {datosFiltrados.map((c, index) => (
            <tr key={index} className="text-center">
                <td className="px-4 py-2 border">{c.cliente_id}</td>
                <td className="px-4 py-2 border">{c.cliente}</td>
                <td className="px-4 py-2 border">{c.correo}</td>
                <td className="px-4 py-2 border">{c.cantidad_compras}</td>
                <td className="px-4 py-2 border">${c.total_comprado.toFixed(2)}</td>
                <td className="px-4 py-2 border">{new Date(c.fecha_registro).toLocaleDateString()}</td>
                <td className="px-4 py-2 border">{c.estado ? 'Activo' : 'Inactivo'}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
};

export default ReporteClientesFrecuentes;
