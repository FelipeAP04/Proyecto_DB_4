import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VistaComponentes = () => {
  const [componentes, setComponentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComponentes = async () => {
      try {
        const response = await axios.get('/api/componentes/vista');
        
        console.log('Datos recibidos:', response.data); // Para depuración
        
        if (response.data && Array.isArray(response.data)) {
          setComponentes(response.data);
        } else {
          throw new Error('Formato de datos inesperado');
        }
      } catch (err) {
        console.error('Error al cargar los datos:', err);
        setError(err.response?.data?.message || err.message || 'Error al cargar componentes');
      } finally {
        setLoading(false);
      }
    };

    fetchComponentes();
  }, []);

  if (loading) return <div className="loading">Cargando componentes...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (componentes.length === 0) return <div>No hay componentes disponibles</div>;

  return (
    <div className="vista-componentes">
      <h2>Lista de Componentes</h2>
      <div className="componentes-list">
        {componentes.map(comp => (
          <div key={comp.id} className="componente-card">
            <h3>{comp.nombre}</h3>
            <p><strong>Serie:</strong> {comp.codigo_serie}</p>
            <p><strong>Descripción:</strong> {comp.descripcion}</p>
            <p><strong>Precio:</strong> Q{comp.precio.toFixed(2)}</p>
            <p><strong>Disponible:</strong> {comp.disponible ? 'Sí' : 'No'}</p>
            <p><strong>Tipo:</strong> {comp.tipo_componente || 'Sin tipo'}</p>
            
            {comp.especificaciones && comp.especificaciones.length > 0 && (
              <div className="especificaciones">
                <h4>Especificaciones:</h4>
                <ul>
                  {comp.especificaciones.map((esp, idx) => (
                    <li key={idx}>{esp}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VistaComponentes;