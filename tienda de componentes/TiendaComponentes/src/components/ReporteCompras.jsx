import React, { useEffect, useState, useMemo } from 'react';
import BotonExportarCSV from './BotonExportarCSV';

const ReporteCompras = () => {
  const [compras, setCompras] = useState([]);
  const [proveedor, setProveedor] = useState('');
  const [componente, setComponente] = useState('');
  const [fechaDesde, setFechaDesde] = useState('');
  const [fechaHasta, setFechaHasta] = useState('');
  const [totalMin, setTotalMin] = useState('');
  const [cantidadMin, setCantidadMin] = useState('');

  useEffect(() => {
    fetch('/api/reportes/compras') 
      .then(res => res.json())
      .then(data => setCompras(data))
      .catch(err => console.error('Error al cargar compras:', err));
  }, []);

  const datosFiltrados = useMemo(() => {
    return compras.filter(item => {
      const matchProveedor = item.proveedor_nombre.toLowerCase().includes(proveedor.toLowerCase());
      const matchComponente = componente === '' || (item.id_componente && item.id_componente.toString().includes(componente));
      const matchFechaDesde = !fechaDesde || new Date(item.fecha) >= new Date(fechaDesde);
      const matchFechaHasta = !fechaHasta || new Date(item.fecha) <= new Date(fechaHasta);
      const matchTotal = !totalMin || item.total >= parseFloat(totalMin);
      const matchCantidad = !cantidadMin || (item.cantidad && item.cantidad >= parseFloat(cantidadMin));

      return matchProveedor && matchComponente && matchFechaDesde && matchFechaHasta && matchTotal && matchCantidad;
    });
  }, [compras, proveedor, componente, fechaDesde, fechaHasta, totalMin, cantidadMin]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Reporte de Compras</h1>

      <div className="filtros-reporte">
        <input className="input-field-report" placeholder="Proveedor" value={proveedor} onChange={e => setProveedor(e.target.value)} />
        <input className="input-field-report" placeholder="ID Componente" value={componente} onChange={e => setComponente(e.target.value)} />
        <input className="input-field-report" type="date" value={fechaDesde} onChange={e => setFechaDesde(e.target.value)} />
        <input className="input-field-report" type="date" value={fechaHasta} onChange={e => setFechaHasta(e.target.value)} />
        <input className="input-field-report" type="number" placeholder="Total mínimo" value={totalMin} onChange={e => setTotalMin(e.target.value)} />
        <input className="input-field-report" type="number" placeholder="Cantidad mínima por ítem" value={cantidadMin} onChange={e => setCantidadMin(e.target.value)} />
      </div>

      <div className="flex justify-end mb-4">
        <BotonExportarCSV datos={datosFiltrados} nombreArchivo="reporte_compras.csv" />
      </div>

      <table className="tabla">
        <thead>
            <tr>
            <th className="px-4 py-2 border">Compra ID</th>
            <th className="px-4 py-2 border">Proveedor</th>
            <th className="px-4 py-2 border">Fecha</th>
            <th className="px-4 py-2 border">Componente ID</th>
            <th className="px-4 py-2 border">Cantidad</th>
            <th className="px-4 py-2 border">Precio Unitario</th>
            <th className="px-4 py-2 border">Subtotal</th>
            <th className="px-4 py-2 border">Total</th>
            </tr>
        </thead>
        <tbody>
            {datosFiltrados.map((item, index) => (
            <tr key={index} className="text-center">
                <td className="px-4 py-2 border">{item.compra_id}</td>
                <td className="px-4 py-2 border">{item.proveedor_nombre}</td>
                <td className="px-4 py-2 border">{new Date(item.fecha).toLocaleDateString()}</td>
                <td className="px-4 py-2 border">{item.id_componente || '—'}</td>
                <td className="px-4 py-2 border">{item.cantidad || '—'}</td>
                <td className="px-4 py-2 border">
                {item.precio_unitario ? `$${item.precio_unitario.toFixed(2)}` : '—'}
                </td>
                <td className="px-4 py-2 border">
                {item.sub_total ? `$${item.sub_total.toFixed(2)}` : '—'}
                </td>
                <td className="px-4 py-2 border">
                {item.total ? `$${item.total.toFixed(2)}` : '—'}
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
};

export default ReporteCompras;
