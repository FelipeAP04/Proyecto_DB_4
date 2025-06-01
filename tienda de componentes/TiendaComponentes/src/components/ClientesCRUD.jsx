import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiPlus, FiEdit, FiTrash } from 'react-icons/fi';

const ClientesCRUD = () => {
  const [clientes, setClientes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [porPagina] = useState(5);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [nuevoCliente, setNuevoCliente] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    direccion: '',
    estado: 'Activo',
  });

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
    try {
      await axios.delete(`/api/clientes/${id}`);
      alert('Cliente eliminado correctamente');
      obtenerClientes();
    } catch (err) {
      console.error('Error al intentar eliminar un cliente', err);
      alert('Ocurrió un error al eliminar el cliente.');
    }
  };

  const agregarCliente = async (cliente) => {
    try {
      // Ensure required fields are present
      if (!cliente.nombre || !cliente.apellido || !cliente.correo) {
        alert('Nombre, apellido y correo son obligatorios');
        return;
      }

      // Send the request
      const clienteData = {
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        correo: cliente.correo,
        telefono: cliente.telefono || null,
        direccion: cliente.direccion || null,
        estado: cliente.estado || 'Activo',
      };

      await axios.post('/api/clientes', clienteData);
      alert('Cliente agregado correctamente');
      obtenerClientes(); // Refresh the list
    } catch (err) {
      console.error('Error al agregar cliente', err);
      alert(`Ocurrió un error al agregar el cliente: ${err.response?.data?.error || err.message}`);
    }
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
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Clientes</h2>
        <button
          className="btn btn-principal flex items-center gap-2"
          onClick={() => setModalAbierto(true)}
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
                <td>{cliente.cliente_estado ? 'Activo' : 'Inactivo'}</td>
                <td>
                  <div className="flex gap-2">
                    <button className="btn-edit" title="Editar">
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
              <td colSpan="5" className="text-center text-red-500">
                No hay clientes para mostrar.
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

      {modalAbierto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Agregar Cliente</h2>
            <div className="modal-form">
              <input
                type="text"
                placeholder="Nombre"
                value={nuevoCliente.nombre}
                onChange={(e) => setNuevoCliente({ ...nuevoCliente, nombre: e.target.value })}
                className="input-field-text"
              />
              <input
                type="text"
                placeholder="Apellido"
                value={nuevoCliente.apellido}
                onChange={(e) => setNuevoCliente({ ...nuevoCliente, apellido: e.target.value })}
                className="input-field-text"
              />
              <input
                type="email"
                placeholder="Correo"
                value={nuevoCliente.correo}
                onChange={(e) => setNuevoCliente({ ...nuevoCliente, correo: e.target.value })}
                className="input-field-text"
              />
              <input
                type="text"
                placeholder="Teléfono"
                value={nuevoCliente.telefono}
                onChange={(e) => setNuevoCliente({ ...nuevoCliente, telefono: e.target.value })}
                className="input-field-text"
              />
              <input
                type="text"
                placeholder="Dirección"
                value={nuevoCliente.direccion}
                onChange={(e) => setNuevoCliente({ ...nuevoCliente, direccion: e.target.value })}
                className="input-field-text"
              />
              <select
                value={nuevoCliente.estado}
                onChange={(e) => setNuevoCliente({ ...nuevoCliente, estado: e.target.value })}
                className="input-field-select"
              >
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setModalAbierto(false)}>
                Cancelar
              </button>
              <button className="btn-save" onClick={agregarCliente}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientesCRUD;
