import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiPlus, FiEdit, FiTrash } from 'react-icons/fi';
import ModalComponente from './ModalComponente';

const ComponenteCRUD = () => {
  const [componentes, setComponentes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [porPagina] = useState(5);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [componenteSeleccionado, setComponenteSeleccionado] = useState(null);

  const obtenerComponentes = async () => {
    try {
      const res = await axios.get('/api/componentes');
      console.log("Datos recibidos:", JSON.stringify(res.data, null, 2));
      if (Array.isArray(res.data)) {
        setComponentes(res.data);
      } else if (Array.isArray(res.data.componentes)) {
        setComponentes(res.data.componentes);
      } else {
        setComponentes([]);
      }
    } catch (err) {
      console.error('Error al obtener componentes', err);
      setComponentes([]);
    }
  };

  useEffect(() => {
    obtenerComponentes();
  }, []);

  const eliminarComponente = async (id) => {
    if (!window.confirm('¿Eliminar este componente?')) return;
    try {
      await axios.delete(`/api/componentes/${id}`);
      alert('Componente eliminado correctamente');
      obtenerComponentes();
    } catch (err) {
      console.error('Error al intentar eliminar un componente', err);
      alert('Ocurrió un error al eliminar el componente.');
    }
  };

  const abrirModalNuevo = () => {
    setComponenteSeleccionado(null);
    setModoEdicion(false);
    setModalAbierto(true);
  };

  const abrirModalEditar = (componente) => {
    setComponenteSeleccionado(componente);
    setModoEdicion(true);
    setModalAbierto(true);
  };

  // Lógica de paginación
  const totalPaginas = Math.ceil(componentes.length / porPagina);
  const inicio = (paginaActual - 1) * porPagina;
  const componentesPaginados = componentes.slice(inicio, inicio + porPagina);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return (
    <div className="contenedor">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Componentes</h2>
        <button className="btn btn-principal flex items-center gap-2" onClick={abrirModalNuevo}>
          <FiPlus /> Agregar
        </button>
      </div>

      <table className="tabla">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Tipo</th>
            <th>Disponible</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {componentesPaginados.length > 0 ? (
            componentesPaginados.map((componente) => (
              <tr key={componente.id}>
                <td>{componente.codigo_serie}</td>
                <td>{componente.nombre}</td>
                <td>Q{componente.precio}</td>
                <td>{componente.tipo?.tipo}</td>
                <td>{componente.disponible ? 'Sí' : 'No'}</td>
                <td>
                  <div className="flex gap-2">
                    <button
                      onClick={() => abrirModalEditar(componente)}
                      className="btn-edit"
                      title="Editar"
                    >
                      <FiEdit />
                    </button>
                    <button
                      onClick={() => eliminarComponente(componente.id)}
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
              <td colSpan="6" className="text-center text-red-500">
                No hay componentes para mostrar.
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
        <ModalComponente
          isOpen={modalAbierto}
          onClose={() => setModalAbierto(false)}
          modoEdicion={modoEdicion}
          componente={componenteSeleccionado}
          onGuardado={obtenerComponentes}
        />
      )}
    </div>
  );
};

export default ComponenteCRUD;
