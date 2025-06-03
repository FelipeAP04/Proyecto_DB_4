import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiPlus, FiEdit, FiTrash } from 'react-icons/fi';

const ClientesCRUD = () => {
  const [clientes, setClientes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [porPagina] = useState(5);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  const obtenerClientes = async () => {
    try {
      const res = await axios.get('/api/clientes/vista');
      setClientes(res.data);
    } catch (err) {
      console.error('Error al obtener clientes', err);
      setClientes([]);
    }
  };

  useEffect(() => {
    obtenerClientes();
  }, []);

  const eliminarCliente = async (id) => {
    if (!window.confirm('¿Está seguro de eliminar este cliente?')) return;
    
    try {
      await axios.delete(`/api/clientes/${id}`);
      alert('Cliente eliminado correctamente');
      obtenerClientes();
    } catch (err) {
      console.error('Error al eliminar cliente:', err);
      alert('Error: ' + (err.response?.data?.error || 'Error al eliminar el cliente'));
    }
  };

  const guardarCliente = async () => {
    try {
      // Validate required fields
      if (!clienteSeleccionado.nombre || !clienteSeleccionado.apellido || !clienteSeleccionado.correo) {
        alert('Por favor complete los campos obligatorios (nombre, apellido y correo)');
        return;
      }

      // Prepare data for submission
      const clienteData = {
        nombre: clienteSeleccionado.nombre,
        apellido: clienteSeleccionado.apellido,
        correo: clienteSeleccionado.correo,
        telefono: clienteSeleccionado.telefono,
        direccion: {
          calle: clienteSeleccionado.calle || '',
          ciudad: clienteSeleccionado.ciudad || 'Ciudad de Guatemala',
          codigo_postal: clienteSeleccionado.codigo_postal || ''
        },
        estado: true
      };

      const response = modoEdicion
        ? await axios.put(`/api/clientes/${clienteSeleccionado.cliente_id}`, clienteData)
        : await axios.post('/api/clientes', clienteData);

      if (response.data.warnings) {
        alert(`Cliente ${modoEdicion ? 'actualizado' : 'agregado'} con advertencias:\n${response.data.warnings.join('\n')}`);
      } else {
        alert(`Cliente ${modoEdicion ? 'actualizado' : 'agregado'} correctamente`);
      }

      setModalAbierto(false);
      obtenerClientes();
    } catch (err) {
      console.error('Error al guardar cliente:', err);
      alert('Error: ' + (err.response?.data?.error || 'Error al guardar el cliente'));
    }
  };

  const abrirModalNuevo = () => {
    setClienteSeleccionado({
      cliente_nombre: '',
      cliente_apellido: '',
      cliente_correo: '',
      cliente_telefono: '',
      cliente_direccion: '',
      cliente_estado: 'Activo',
    });
    setModoEdicion(false);
    setModalAbierto(true);
  };

  const abrirModalEditar = (cliente) => {
    setClienteSeleccionado(cliente);
    setModoEdicion(true);
    setModalAbierto(true);
  };

  const totalPaginas = Math.ceil(clientes.length / porPagina);
  const inicio = (paginaActual - 1) * porPagina;
  const clientesPaginados = clientes.slice(inicio, inicio + porPagina);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return (
    <div className="contenedor">
      <div className="add-action-container">
        <h2 className="text-2xl font-bold">Clientes</h2>
        <button
          className="btn btn-principal flex items-center gap-2"
          onClick={abrirModalNuevo}
        >
          <FiPlus /> Agregar
        </button>
      </div>

      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientesPaginados.length > 0 ? (
            clientesPaginados.map((cliente) => (
              <tr key={cliente.cliente_id}>
                <td>{cliente.cliente_nombre}</td>
                <td>{cliente.cliente_apellido}</td>
                <td>{cliente.cliente_correo}</td>
                <td>{cliente.cliente_telefono || 'N/A'}</td>
                <td>{cliente.cliente_direccion || 'N/A'}</td>
                <td>{cliente.cliente_estado ? 'Activo' : 'Inactivo'}</td>
                <td>
                  <div className="flex gap-2">
                    <button
                      onClick={() => abrirModalEditar(cliente)}
                      className="btn-edit"
                      title="Editar"
                    >
                      <FiEdit />
                    </button>
                    <button
                      onClick={() => eliminarCliente(cliente.cliente_id)}
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
              <td colSpan="7" className="text-center text-red-500">
                No hay clientes para mostrar.
              </td>
            </tr>
          )}
        </tbody>
      </table>

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

      {modalAbierto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">{modoEdicion ? 'Editar Cliente' : 'Agregar Cliente'}</h2>
            <div className="modal-form">
              <input
                type="text"
                placeholder="Nombre"
                value={clienteSeleccionado.nombre || ''}
                onChange={(e) => setClienteSeleccionado({ ...clienteSeleccionado, nombre: e.target.value })}
                className="input-field-text"
              />
              <input
                type="text"
                placeholder="Apellido"
                value={clienteSeleccionado.apellido || ''}
                onChange={(e) => setClienteSeleccionado({ ...clienteSeleccionado, apellido: e.target.value })}
                className="input-field-text"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={clienteSeleccionado.correo || ''}
                onChange={(e) => setClienteSeleccionado({ ...clienteSeleccionado, correo: e.target.value })}
                className="input-field-text"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                value={clienteSeleccionado.telefono || ''}
                onChange={(e) => setClienteSeleccionado({ ...clienteSeleccionado, telefono: e.target.value })}
                className="input-field-text"
              />
              <div className="direccion-fields">
                <input
                  type="text"
                  placeholder="Calle y número"
                  value={clienteSeleccionado.calle || ''}
                  onChange={(e) => setClienteSeleccionado({ ...clienteSeleccionado, calle: e.target.value })}
                  className="input-field-text"
                />
                <input
                  type="text"
                  placeholder="Ciudad"
                  value={clienteSeleccionado.ciudad || ''}
                  onChange={(e) => setClienteSeleccionado({ ...clienteSeleccionado, ciudad: e.target.value })}
                  className="input-field-text"
                />
                <input
                  type="text"
                  placeholder="Código Postal"
                  value={clienteSeleccionado.codigo_postal || ''}
                  onChange={(e) => setClienteSeleccionado({ ...clienteSeleccionado, codigo_postal: e.target.value })}
                  className="input-field-text"
                />
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setModalAbierto(false)}>
                Cancelar
              </button>
              <button className="btn-save" onClick={guardarCliente}>
                {modoEdicion ? 'Actualizar' : 'Guardar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientesCRUD;
