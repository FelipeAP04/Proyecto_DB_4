const { Componente, EspecificacionComponente, TipoComponente } = require('../models');

// GET vista de componentes
const obtenerComponentes = async (req, res) => {
  try {
    const componentes = await Componente.findAll({
      include: [
        { model: TipoComponente, as: 'tipo' },
        { model: EspecificacionComponente, as: 'especificaciones' }
      ]
    });
    console.log(JSON.stringify(componentes, null, 2));
    res.json(componentes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener componentes' });
    console.error('Error al obtener componentes:', error);
  }
};

const { sequelize } = require('../models/index');

// GET utilizando una vista
async function obtenerVistaComponentes(req, res) {
  try {
    // Consulta directa a la vista
    const [componentes] = await sequelize.query('SELECT * FROM vista_componentes');
    
    // Procesamos los resultados
    const componentesFormateados = componentes.map(comp => {
      // Convertimos las especificaciones a un array válido
      let especificacionesArray = [];
      
      try {
        // Si especificaciones es un string JSON, lo parseamos
        if (typeof comp.especificaciones === 'string') {
          especificacionesArray = JSON.parse(comp.especificaciones);
        } 
        // Si ya es un array (dependiendo del driver de PostgreSQL), lo usamos directamente
        else if (Array.isArray(comp.especificaciones)) {
          especificacionesArray = comp.especificaciones;
        }
      } catch (error) {
        console.error('Error procesando especificaciones:', error);
      }
      
      // Convertimos el array de objetos a un array de strings "nombre: valor"
      const especificacionesTexto = especificacionesArray.map(esp => {
        return `${esp.especificacion}: ${esp.valor}`;
      });

      return {
        ...comp,
        especificaciones: especificacionesTexto
      };
    });

    res.json(componentesFormateados);
  } catch (error) {
    console.error('Error al obtener vista de componentes:', error);
    res.status(500).json({ 
      error: 'Error al obtener componentes',
      detalles: error.message 
    });
  }
}

// POST crear componente con especificaciones
const crearComponente = async (req, res) => {
  const {
    codigo_serie,
    nombre,
    descripcion,
    precio,
    disponible,
    id_tipo_componente,
    especificaciones = []
  } = req.body;

  try {
    const nuevo = await Componente.create({
      codigo_serie,
      nombre,
      descripcion,
      precio,
      disponible,
      id_tipo_componente,
      especificaciones: especificaciones.map(e => ({
        especificacion: e.especificacion,
        valor: e.valor
      }))
    }, {
      include: [{ model: EspecificacionComponente, as: 'especificaciones' }]
    });

    res.status(201).json(nuevo);
  } catch (error) {
    console.error(" error al crear componente", error);
    res.status(400).json({ error: error.message });
  }
};


// PUT actualizar
const actualizarComponente = async (req, res) => {
  try {
    const { id } = req.params;
    const { codigo_serie, nombre, descripcion, id_tipo_componente, precio, disponible, especificaciones } = req.body;

    // Actualizar el componente principal
    const [updated] = await Componente.update(
      { codigo_serie, nombre, descripcion, id_tipo_componente, precio, disponible },
      { where: { id } }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Componente no encontrado' });
    }

    // Manejar especificaciones
    if (especificaciones && especificaciones.length > 0) {
      // Eliminar especificaciones existentes
      await EspecificacionComponente.destroy({ where: { id_componente: id } });

      // Crear nuevas especificaciones
      const nuevasEspecificaciones = especificaciones.map(esp => ({
        id_componente: id,
        especificacion: esp.especificacion,
        valor: esp.valor
      }));

      await EspecificacionComponente.bulkCreate(nuevasEspecificaciones);
    }

    res.json({ message: 'Componente actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar componente:', error);
    res.status(500).json({ message: 'Error al actualizar componente', error: error.message });
  }
};


// DELETE
const eliminarComponente = async (req, res) => {
  const { id } = req.params;

  try {
    // eliminar especificaciones del componente
    await EspecificacionComponente.destroy({
      where: { id_componente: id }
    });

    // eliminar el componente
    await Componente.destroy({
      where: { id }
    });

    res.status(200).json({ mensaje: 'Componente eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar componente:', error);
    res.status(500).json({ mensaje: 'Error al eliminar componente' });
  }
};

const obtenerTipos =  async (req, res) => {
  const tipos = await TipoComponente.findAll();
  res.json(tipos);
};

module.exports = {
  obtenerComponentes,
  obtenerVistaComponentes,
  crearComponente,
  actualizarComponente,
  eliminarComponente,
  obtenerTipos
};
