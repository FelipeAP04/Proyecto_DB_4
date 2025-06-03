import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiPlus, FiTrash, FiEdit } from 'react-icons/fi';

const ComprasCRUD = () => {
  const [comprasAgrupadas, setComprasAgrupadas] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [compraSeleccionada, setCompraSeleccionada] = useState(null);
  const [nuevaCompra, setNuevaCompra] = useState({
    id_proveedor: '',
    total: 0,
    detalles: [{ id_componente: '', cantidad: '', precio_unitario: '' }]
  });

  // Maneja el cambio en los campos de detalle
  const manejarCambioDetalle = (index, campo, valor) => {
    const nuevosDetalles = [...nuevaCompra.detalles];
    nuevosDetalles[index][campo] = valor;

    // Actualizar sub_total para ese detalle
    const cantidadNum = parseFloat(nuevosDetalles[index].cantidad) || 0;
    const precioNum = parseFloat(nuevosDetalles[index].precio_unitario) || 0;
    nuevosDetalles[index].sub_total = cantidadNum * precioNum;

    // Actualizar total de compra sumando todos los sub_totales
    const nuevoTotal = nuevosDetalles.reduce(
      (acc, det) => acc + (parseFloat(det.sub_total) || 0),
      0
    );

    setNuevaCompra({ ...nuevaCompra, detalles: nuevosDetalles, total: nuevoTotal.toFixed(2) });
  };

  const agregarDetalle = () => {
    setNuevaCompra({
      ...nuevaCompra,
      detalles: [...nuevaCompra.detalles, { id_componente: '', cantidad: '', precio_unitario: '', sub_total: 0 }]
    });
  };

  const eliminarDetalle = (index) => {
    const nuevosDetalles = nuevaCompra.detalles.filter((_, i) => i !== index);
    const nuevoTotal = nuevosDetalles.reduce(
      (acc, det) => acc + (parseFloat(det.sub_total) || 0),
      0
    );
    setNuevaCompra({ ...nuevaCompra, detalles: nuevosDetalles, total: nuevoTotal.toFixed(2) });
  };

  const [paginaActual, setPaginaActual] = useState(1);
  const porPagina = 5;

  const obtenerCompras = async () => {
    try {
      const res = await axios.get('/api/compras/vista');
      const datos = res.data;
      const agrupadas = {};
      datos.forEach((fila) => {
        const id = fila.compra_id;
        if (!agrupadas[id]) {
          agrupadas[id] = {
            compra_id: id,
            id_proveedor: fila.id_proveedor,  // importante para edición
            fecha: fila.fecha,
            total: fila.total,
            proveedor_nombre: fila.proveedor_nombre,
            detalles: [],
          };
        }
        if (fila.id_componente) {
          agrupadas[id].detalles.push({
            id_componente: fila.id_componente,
            cantidad: fila.cantidad,
            precio_unitario: fila.precio_unitario,
            sub_total: fila.sub_total,
          });
        }
      });
      setComprasAgrupadas(Object.values(agrupadas));
    } catch (err) {
      console.error('Error al obtener compras', err);
      setComprasAgrupadas([]);
    }
  };

  useEffect(() => {
    obtenerCompras();
  }, []);

  const agregarCompra = async () => {
    if (!nuevaCompra.id_proveedor) {
      alert('El campo ID Proveedor es obligatorio.');
      return;
    }
    if (nuevaCompra.detalles.length === 0) {
      alert('Debe agregar al menos un detalle.');
      return;
    }
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
    if (!nuevaCompra.id_proveedor) {
      alert('El campo ID Proveedor es obligatorio.');
      return;
    }
    if (nuevaCompra.detalles.length === 0) {
      alert('Debe agregar al menos un detalle.');
      return;
    }
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
    setNuevaCompra({
      id_proveedor: '',
      total: 0,
      detalles: [{ id_componente: '', cantidad: '', precio_unitario: '', sub_total: 0 }]
    });
    setModalAbierto(true);
  };

  const abrirModalEditar = (compra) => {
    setModoEdicion(true);
    setCompraSeleccionada(compra);

    // Asegurarse que detalles tengan sub_total calculado para el formulario
    const detallesConSubTotal = compra.detalles.map(d => ({
      ...d,
      sub_total: (parseFloat(d.cantidad) * parseFloat(d.precio_unitario)).toFixed(2)
    }));

    setNuevaCompra({
      id_proveedor: compra.id_proveedor || '',
      total: compra.total || 0,
      detalles: detallesConSubTotal.length > 0 ? detallesConSubTotal : [{ id_componente: '', cantidad: '', precio_unitario: '', sub_total: 0 }]
    });
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setModoEdicion(false);
    setCompraSeleccionada(null);
    setNuevaCompra({
      id_proveedor: '',
      total: 0,
      detalles: [{ id_componente: '', cantidad: '', precio_unitario: '', sub_total: 0 }]
    });
  };

  const totalPaginas = Math.ceil(comprasAgrupadas.length / porPagina);
  const inicio = (paginaActual - 1) * porPagina;
  const comprasPaginadas = comprasAgrupadas.slice(inicio, inicio + porPagina);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return (
    <div className="contenedor">
      <div className="add-action-container">
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
            <th>Detalles</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {comprasPaginadas.length > 0 ? (
            comprasPaginadas.map((compra) => (
              <tr key={compra.compra_id}>
                <td>{new Date(compra.fecha).toLocaleDateString()}</td>
                <td>Q{parseFloat(compra.total).toFixed(2)}</td>
                <td>{compra.proveedor_nombre}</td>
                <td>
                  <ul className="text-sm list-disc ml-4">
                    {compra.detalles.map((detalle, idx) => (
                      <li key={idx}>
                        Componente {detalle.id_componente}: {detalle.cantidad} x Q{detalle.precio_unitario} = <strong>Q{detalle.sub_total}</strong>
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <div className="flex gap-2">
                    <button onClick={() => abrirModalEditar(compra)} className="btn-edit" title="Editar">
                      <FiEdit />
                    </button>
                    <button onClick={() => eliminarCompra(compra.compra_id)} className="btn-delete" title="Eliminar">
                      <FiTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-red-500">No hay compras para mostrar.</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="div-paginacion">
        <button className="btn-paginacion" onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
          Anterior
        </button>
        <span>Página {paginaActual} de {totalPaginas}</span>
        <button className="btn-paginacion" onClick={() => cambiarPagina(paginaActual + 1)} disabled={paginaActual === totalPaginas}>
          Siguiente
        </button>
      </div>

      {modalAbierto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{modoEdicion ? 'Editar Compra' : 'Agregar Compra'}</h2>
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
              readOnly
              className="input-disabled"
              title="El total se calcula automáticamente"
            />

            <h4 className="mt-4">Detalles de la compra</h4>
            {nuevaCompra.detalles.map((detalle, index) => (
              <div key={index} className="flex gap-2 items-center mb-2">
                <input
                  type="number"
                  placeholder="ID Componente"
                  value={detalle.id_componente}
                  onChange={(e) => manejarCambioDetalle(index, 'id_componente', e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Cantidad"
                  value={detalle.cantidad}
                  onChange={(e) => manejarCambioDetalle(index, 'cantidad', e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Precio Unitario"
                  value={detalle.precio_unitario}
                  onChange={(e) => manejarCambioDetalle(index, 'precio_unitario', e.target.value)}
                />
                <span>Sub-total: Q{detalle.sub_total || 0}</span>
                <button onClick={() => eliminarDetalle(index)} className="btn-delete" title="Eliminar detalle">
                  <FiTrash />
                </button>
              </div>
            ))}
            <button onClick={agregarDetalle} className="btn btn-principal mt-2">
              <FiPlus /> Agregar Detalle
            </button>

            <div className="modal-actions mt-4">
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
