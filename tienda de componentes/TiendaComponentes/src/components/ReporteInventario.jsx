import React, { useState, useEffect, useMemo } from 'react';
import BotonExportarCSV from './BotonExportarCSV';

const ReporteInventario = () => {
  const [inventario, setInventario] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [tipo, setTipo] = useState('todos');
  const [disponible, setDisponible] = useState('todos');
  const [precioMin, setPrecioMin] = useState('');
  const [precioMax, setPrecioMax] = useState('');
  const [stockMin, setStockMin] = useState('');

  useEffect(() => {
    fetch('/api/reportes/inventario') // endpoint que devuelve vista_inventario
      .then(res => res.json())
      .then(data => setInventario(data))
      .catch(err => console.error('Error al cargar inventario:', err));
  }, []);

  // Filtros
  const datosFiltrados = useMemo(() => {
    return inventario.filter(item => {
      const matchBusqueda = item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                            item.codigo_serie.toLowerCase().includes(busqueda.toLowerCase());
      const matchTipo = tipo === 'todos' || item.tipo_componente === tipo;
      const matchDisponible = disponible === 'todos' || item.disponible === (disponible === 'si');
      const matchPrecioMin = !precioMin || item.precio >= parseFloat(precioMin);
      const matchPrecioMax = !precioMax || item.precio <= parseFloat(precioMax);
      const matchStockMin = !stockMin || item.stock >= parseInt(stockMin);
      
      return matchBusqueda && matchTipo && matchDisponible && matchPrecioMin && matchPrecioMax && matchStockMin;
    });
  }, [inventario, busqueda, tipo, disponible, precioMin, precioMax, stockMin]);

  const tiposUnicos = useMemo(() => {
    const tipos = inventario.map(i => i.tipo_componente).filter(Boolean);
    return Array.from(new Set(tipos));
  }, [inventario]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Reporte de Inventario</h1>

      <div className="filtros-reporte">
        <input className="input-field-report" placeholder="Buscar por nombre o código" value={busqueda} onChange={e => setBusqueda(e.target.value)} />
        <select className="select-report" value={tipo} onChange={e => setTipo(e.target.value)} >
          <option value="todos">Todos los tipos</option>
          {tiposUnicos.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <select className="select-report" value={disponible} onChange={e => setDisponible(e.target.value)} >
          <option value="todos">Disponibilidad: Todos</option>
          <option value="si">Disponible</option>
          <option value="no">No disponible</option>
        </select>
        <input className="input-field-report" type="number" placeholder="Precio mínimo" value={precioMin} onChange={e => setPrecioMin(e.target.value)} />
        <input className="input-field-report" type="number" placeholder="Precio máximo" value={precioMax} onChange={e => setPrecioMax(e.target.value)} />
        <input className="input-field-report" type="number" placeholder="Stock mínimo" value={stockMin} onChange={e => setStockMin(e.target.value)} />
      </div>

      <div className="flex justify-end mb-4">
        <BotonExportarCSV datos={datosFiltrados} nombreArchivo="reporte_inventario.csv" />
      </div>

      <table className="tabla">
        <thead className="bg-gray-100">
            <tr>
            <th className="px-4 py-2 border">Código</th>
            <th className="px-4 py-2 border">Nombre</th>
            <th className="px-4 py-2 border">Tipo</th>
            <th className="px-4 py-2 border">Precio</th>
            <th className="px-4 py-2 border">Disponible</th>
            <th className="px-4 py-2 border">Stock</th>
            <th className="px-4 py-2 border">Descripción</th>
            </tr>
        </thead>
        <tbody>
            {datosFiltrados.map((item, index) => (
            <tr key={index} className="text-center">
                <td className="px-4 py-2 border">{item.codigo_serie}</td>
                <td className="px-4 py-2 border">{item.nombre}</td>
                <td className="px-4 py-2 border">{item.tipo_componente || '—'}</td>
                <td className="px-4 py-2 border">${item.precio.toFixed(2)}</td>
                <td className="px-4 py-2 border">{item.disponible ? 'Sí' : 'No'}</td>
                <td className="px-4 py-2 border">{item.stock}</td>
                <td className="px-4 py-2 border">{item.descripcion}</td>
            </tr>
            ))}
        </tbody>
        </table>

    </div>
  );
};

export default ReporteInventario;
