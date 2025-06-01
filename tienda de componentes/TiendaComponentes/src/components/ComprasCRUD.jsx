import axios from 'axios';
import { FiPlus, FiTrash } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const ComprasCRUD = () => {
  const [compras, setCompras] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [nuevaCompra, setNuevaCompra] = useState({
    id_proveedor: '',
    total: '',
  });

  const obtenerCompras = async () => {
    try {
      const res = await axios.get('/api/compras/vista');
      setCompras(res.data);
    } catch (err) {
      console.error('Error al obtener compras', err);
    }
  };

  useEffect(() => {
    obtenerCompras();
  }, []);

  const agregarCompra = async () => {
    try {
      await axios.post('/api/compras', nuevaCompra);
      alert('Compra agregada');
      obtenerCompras();
      setModalAbierto(false);
    } catch (err) {
      alert('Error al agregar compra');
      console.error(err);
    }
  };

  const eliminarCompra = async (id) => {
    try {
      await axios.delete(`/api/compras/${id}`);
      alert('Compra eliminada');
      obtenerCompras();
    } catch (err) {
      alert('Error al eliminar compra');
      console.error(err);
    }
  };

  return (
    <div className="contenedor">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Compras</h2>
        <button className="btn btn-principal" onClick={() => setModalAbierto(true)}>
          <FiPlus /> Agregar
        </button>
      </div>

      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Proveedor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {compras.map((compra) => (
            <tr key={compra.compra_id}>
              <td>{compra.compra_id}</td>
              <td>{new Date(compra.fecha).toLocaleDateString()}</td>
              <td>{compra.total}</td>
              <td>{compra.proveedor_nombre}</td>
              <td>
                <button className="btn-delete" onClick={() => eliminarCompra(compra.compra_id)}>
                  <FiTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalAbierto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Agregar Compra</h2>
            <input
              type="number"
              placeholder="ID Proveedor"
              value={nuevaCompra.id_proveedor}
              onChange={(e) => setNuevaCompra({ ...nuevaCompra, id_proveedor: e.target.value })}
            />
            <input
              type="number"
              placeholder="Total"
              value={nuevaCompra.total}
              onChange={(e) => setNuevaCompra({ ...nuevaCompra, total: e.target.value })}
            />
            <div className="modal-actions">
              <button onClick={() => setModalAbierto(false)}>Cancelar</button>
              <button onClick={agregarCompra}>Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComprasCRUD;
