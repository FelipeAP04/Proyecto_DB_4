import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ModalComponente = ({ isOpen, onClose, modoEdicion, componente, onGuardado }) => {
  const [form, setForm] = useState({
    id: '', 
    codigo_serie: '',
    nombre: '',
    descripcion: '',
    precio: '',
    disponible: true,
    id_tipo_componente: '',
    especificaciones: []
  });

  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    if (componente) {
      setForm({
        id: componente.id,
        ...componente,
        especificaciones: componente.especificaciones?.map(e => ({
          id: e.id,
          especificacion: e.especificacion,
          valor: e.valor
        })) || []
      });
    }
  }, [componente]);

  useEffect(() => {
    axios.get('/api/tipos').then(res => setTipos(res.data));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleEspecificacionChange = (i, key, value) => {
    const nuevas = [...form.especificaciones];
    nuevas[i] = { ...nuevas[i], [key]: value };
    setForm({ ...form, especificaciones: nuevas });
  };

  const agregarEspecificacion = () => {
    setForm({
      ...form,
      especificaciones: [...form.especificaciones, { especificacion: '', valor: '' }]
    });
  };

  const enviar = async () => {
    try {
      if (modoEdicion) {
        await axios.put(`/api/componentes/${form.id}`, form);
        alert('Componente actualizado correctamente');
      } else {
        await axios.post('/api/componentes', form);
        alert('Componente guardado correctamente');
      }
      onGuardado();
      onClose();
    } catch (err) {
      console.error('Error al crear/actualizar componente', err);
      alert('Ocurrió un error al guardar el componente. Por favor, revisa los datos e intenta nuevamente.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">
          {modoEdicion ? 'Editar' : 'Agregar'} Componente
        </h2>

        <div className="modal-form">
          <input type="text" name="codigo_serie" placeholder="Código" value={form.codigo_serie} onChange={handleChange} className="input-field-text" />
          <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} className="input-field-text" />
          <input type="text" name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} className="input-field-text" />
          <input type="number" name="precio" placeholder="Precio" value={form.precio} onChange={handleChange} className="input-field-text" />

          <select name="id_tipo_componente" value={form.id_tipo_componente} onChange={handleChange} className="input-field">
            <option value="">Seleccionar tipo</option>
            {tipos.map((t) => (
              <option key={t.id} value={t.id}>{t.tipo}</option>
            ))}
          </select>

          <label className="checkbox-field">
            <input type="checkbox" name="disponible" checked={form.disponible} onChange={handleChange} />
            Disponible
          </label>

          <div className="spec-section">
            <h3 className="spec-title">Especificaciones</h3>
            {form.especificaciones.map((e, i) => (
              <div key={i} className="spec-row">
                <input
                  type="text"
                  placeholder="Especificación"
                  value={e.especificacion}
                  onChange={(ev) => handleEspecificacionChange(i, 'especificacion', ev.target.value)}
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Valor"
                  value={e.valor}
                  onChange={(ev) => handleEspecificacionChange(i, 'valor', ev.target.value)}
                  className="input-field"
                />
              </div>
            ))}
            <button onClick={agregarEspecificacion} className="add-spec-btn">+ Agregar especificación</button>
          </div>
        </div>

        <div className="modal-actions">
          <button onClick={onClose} className="btn-cancel">Cancelar</button>
          <button onClick={enviar} className="btn-save">
            {modoEdicion ? 'Actualizar' : 'Guardar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponente;
