const { Componente, EspecificacionComponente, TipoComponente, Cliente } = require('../models');

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


const actualizarComponente = async (req, res) => {
  try {
    const { id } = req.params;
    const { codigo_serie, nombre, descripcion, id_tipo_componente, precio, disponible, especificaciones } = req.body;

    const [updated] = await Componente.update(
      { codigo_serie, nombre, descripcion, id_tipo_componente, precio, disponible },
      { where: { id } }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Componente no encontrado' });
    }

    if (especificaciones && especificaciones.length > 0) {
      await EspecificacionComponente.destroy({ where: { id_componente: id } });

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


const eliminarComponente = async (req, res) => {
  const { id } = req.params;

  try {
    await EspecificacionComponente.destroy({
      where: { id_componente: id }
    });

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

const obtenerVistaClientes = async (req, res) => {
  const { sequelize } = require('../models/index');
  try {
    const [clientes] = await sequelize.query('SELECT * FROM vista_clientes');
    res.json(clientes);
  } catch (error) {
    console.error('Error al obtener vista de clientes:', error);
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
};

const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll({
      include: ['telefonos', 'direccion']
    });
    res.json(clientes);
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
};

const crearCliente = async (req, res) => {
  const { nombre, apellido, correo, telefono, direccion } = req.body;
  try {
    const cliente = await Cliente.create(
      { nombre, apellido, correo, estado: true },
      { include: ['telefonos', 'direccion'] }
    );
    await cliente.createTelefono({ telefono });
    await cliente.createDireccion(direccion);
    res.status(201).json(cliente);
  } catch (error) {
    console.error('Error al crear cliente:', error);
    res.status(500).json({ error: 'Error al crear cliente' });
  }
};

const actualizarCliente = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, correo, telefono, direccion } = req.body;
  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });

    await cliente.update({ nombre, apellido, correo });
    await cliente.telefonos[0].update({ telefono });
    await cliente.direccion.update(direccion);

    res.json({ message: 'Cliente actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar cliente:', error);
    res.status(500).json({ error: 'Error al actualizar cliente' });
  }
};

const eliminarCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });

    await cliente.telefonos[0].destroy();
    await cliente.direccion.destroy();
    await cliente.destroy();

    res.json({ message: 'Cliente eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar cliente:', error);
    res.status(500).json({ error: 'Error al eliminar cliente' });
  }
};

module.exports = {
  obtenerComponentes,
  obtenerVistaComponentes,
  crearComponente,
  actualizarComponente,
  eliminarComponente,
  obtenerTipos,
  obtenerVistaClientes,
  obtenerClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente
};
