import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiTrash } from 'react-icons/fi';

const ComprasCRUD = () => {
  const [compras, setCompras] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [porPagina] = useState(5);

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

  const eliminarCompra = async (id) => {
    try {
      await axios.delete(`/api/compras/${id}`);
      alert('Compra eliminada correctamente');
      obtenerCompras();
    } catch (err) {
      console.error('Error al eliminar compra', err);
      alert('Ocurrió un error al eliminar la compra.');
    }
  };

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
      </div>

      <table className="tabla">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Componente</th>
            <th>Cantidad</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {comprasPaginadas.length > 0 ? (
            comprasPaginadas.map((compra) => (
              <tr key={compra.id}>
                <td>{compra.cliente_nombre || compra.id_cliente}</td>
                <td>{compra.componente_nombre || compra.id_componente}</td>
                <td>{compra.cantidad}</td>
                <td>{new Date(compra.fecha_compra).toLocaleDateString()}</td>
                <td>
                  <button
                    onClick={() => eliminarCompra(compra.id)}
                    className="btn-delete"
                    title="Eliminar"
                  >
                    <FiTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-red-500">
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
    </div>
  );
};

export default ComprasCRUD;
