import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VistaComponentes = () => {
  const [componentes, setComponentes] = useState([]);
  const [filteredComponentes, setFilteredComponentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchComponentes = async () => {
      try {
        const response = await axios.get('/api/componentes/vista');
        
        console.log('Datos recibidos:', response.data); // Para depuración
        
        if (response.data && Array.isArray(response.data)) {
          setComponentes(response.data);
          setFilteredComponentes(response.data); // Inicialmente mostrar todos
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

  // Efecto para filtrar componentes cuando cambia el término de búsqueda
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredComponentes(componentes);
    } else {
      const filtered = componentes.filter(comp => 
        comp.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (comp.codigo_serie && comp.codigo_serie.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (comp.descripcion && comp.descripcion.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (comp.tipo_componente && comp.tipo_componente.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredComponentes(filtered);
    }
  }, [searchTerm, componentes]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) return <div className="loading">Cargando componentes...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (componentes.length === 0) return <div>No hay componentes disponibles</div>;

  return (
    <div className="vista-componentes">
      <h2>Lista de Componentes</h2>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar componentes por nombre, serie, descripción o tipo..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: '10px',
            width: '100%',
            maxWidth: '500px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
      </div>
      
      {/* Contador de resultados */}
      <div style={{ marginBottom: '10px' }}>
        Mostrando {filteredComponentes.length} de {componentes.length} componentes
      </div>
      
      <div className="componentes-list">
        {filteredComponentes.length > 0 ? (
          filteredComponentes.map(comp => (
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
          ))
        ) : (
          <div>No se encontraron componentes que coincidan con la búsqueda.</div>
        )}
      </div>
    </div>
  );
};

export default VistaComponentes;