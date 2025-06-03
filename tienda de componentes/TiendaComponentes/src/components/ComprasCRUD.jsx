import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiPlus, FiTrash, FiEdit } from 'react-icons/fi';

const ComprasCRUD = () => {
  const [compras, setCompras] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [compraSeleccionada, setCompraSeleccionada] = useState(null);

  const [nuevaCompra, setNuevaCompra] = useState({
    id_proveedor: '',
    total: '',
  });

  const [paginaActual, setPaginaActual] = useState(1);
  const porPagina = 5;

  const obtenerCompras = async () => {
    try {
      const res = await axios.get('/api/compras/vista');
      setCompras(res.data);
    } catch (err) {
      console.error('Error al obtener compras', err);
      setCompras([]);
    }
  };

  useEffect(() => {
    obtenerCompras();
  }, []);

  const agregarCompra = async () => {
    try {
      await axios.post('/api/compras', nuevaCompra);
      alert('Compra agregada');
      cerrarModal();
      obtenerCompras();
    } catch (err) {
      alert('Error al agregar compra');
      console.error(err);
    }
  };

  const actualizarCompra = async () => {
    try {
      await axios.put(`/api/compras/${compraSeleccionada.compra_id}`, nuevaCompra);
      alert('Compra actualizada');
      cerrarModal();
      obtenerCompras();
    } catch (err) {
      alert('Error al actualizar compra');
      console.error(err);
    }
  };

  const eliminarCompra = async (id) => {
    if (!window.confirm('¿Eliminar esta compra?')) return;
    try {
      await axios.delete(`/api/compras/${id}`);
      alert('Compra eliminada');
      obtenerCompras();
    } catch (err) {
      alert('Error al eliminar compra');
      console.error(err);
    }
  };

  const abrirModalNuevo = () => {
    setModoEdicion(false);
    setCompraSeleccionada(null);
    setNuevaCompra({ id_proveedor: '', total: '' });
    setModalAbierto(true);
  };

  const abrirModalEditar = (compra) => {
    setModoEdicion(true);
    setCompraSeleccionada(compra);
    setNuevaCompra({
      id_proveedor: compra.id_proveedor || '',
      total: compra.total || '',
    });
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setModoEdicion(false);
    setCompraSeleccionada(null);
    setNuevaCompra({ id_proveedor: '', total: '' });
  };

  // Paginación
  const totalPaginas = Math.ceil(compras.length / porPagina);
  const inicio = (paginaActual - 1) * porPagina;
  const comprasPaginadas = compras.slice(inicio, inicio + porPagina);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return (
    <div className="contenedor">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Compras</h2>
        <button className="btn btn-principal flex items-center gap-2" onClick={abrirModalNuevo}>
          <FiPlus /> Agregar
        </button>
      </div>

      <table className="tabla">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Total</th>
            <th>Proveedor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {comprasPaginadas.length > 0 ? (
            comprasPaginadas.map((compra, idx) => (
              <tr key={`${compra.compra_id}-${idx}`}>
                <td>{new Date(compra.fecha).toLocaleDateString()}</td>
                <td>Q{compra.total}</td>
                <td>{compra.proveedor_nombre}</td>
                <td>
                  <div className="flex gap-2">
                    <button
                      onClick={() => abrirModalEditar(compra)}
                      className="btn-edit"
                      title="Editar"
                    >
                      <FiEdit />
                    </button>
                    <button
                      onClick={() => eliminarCompra(compra.compra_id)}
                      className="btn-delete"
                      title="Eliminar"
                    >
                      <FiTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-red-500">
                No hay compras para mostrar.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Paginación */}
      <div className="div-paginacion">
        <button
          className="btn-paginacion"
          onClick={() => cambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
        >
          Anterior
        </button>
        <span>
          Página {paginaActual} de {totalPaginas}
        </span>
        <button
          className="btn-paginacion"
          onClick={() => cambiarPagina(paginaActual + 1)}
          disabled={paginaActual === totalPaginas}
        >
          Siguiente
        </button>
      </div>

      {/* Modal de Agregar/Editar Compra */}
      {modalAbierto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{modoEdicion ? 'Editar Compra' : 'Agregar Compra'}</h2>
            <input
              type="number"
              placeholder="ID Proveedor"
              value={nuevaCompra.id_proveedor}
              onChange={(e) =>
                setNuevaCompra({ ...nuevaCompra, id_proveedor: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Total"
              value={nuevaCompra.total}
              onChange={(e) =>
                setNuevaCompra({ ...nuevaCompra, total: e.target.value })
              }
            />
            <div className="modal-actions">
              <button onClick={cerrarModal}>Cancelar</button>
              <button onClick={modoEdicion ? actualizarCompra : agregarCompra}>
                {modoEdicion ? 'Actualizar' : 'Guardar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComprasCRUD;
