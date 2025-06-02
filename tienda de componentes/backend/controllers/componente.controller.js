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
    // Create main client record
    const cliente = await Cliente.create({
      nombre,
      apellido,
      correo,
      fecha_registro: new Date(),
      estado: true
    });

    let successCount = 1;
    let errors = [];

    // Create phone if provided
    if (telefono) {
      try {
        await sequelize.models.TelefonoCliente.create({
          id_cliente: cliente.id,
          telefono
        });
        successCount++;
      } catch (err) {
        errors.push('Error al guardar teléfono');
      }
    }

    // Create address if provided
    if (direccion) {
      try {
        await sequelize.query(
          'INSERT INTO direccion_cliente (id_cliente, direccion) VALUES ($1, ($2, $3, $4)::direccion)',
          {
            bind: [
              cliente.id,
              direccion.calle || '',
              direccion.ciudad || '',
              direccion.codigo_postal || ''
            ],
            type: sequelize.QueryTypes.INSERT
          }
        );
        successCount++;
      } catch (err) {
        errors.push('Error al guardar dirección');
      }
    }

    // If at least the main client data was saved, consider it a success
    if (successCount > 0) {
      res.status(201).json({
        message: 'Cliente creado correctamente',
        cliente,
        warnings: errors.length > 0 ? errors : undefined
      });
    } else {
      res.status(500).json({ error: 'Error al crear cliente' });
    }
  } catch (error) {
    console.error('Error al crear cliente:', error);
    res.status(500).json({ error: 'Error al crear cliente' });
  }
};

const actualizarCliente = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, correo, telefono, direccion, estado } = req.body;

  try {
    const cliente = await Cliente.findByPk(id, {
      include: ['telefonos', 'direccionCliente']
    });

    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    // Update main client data
    await cliente.update({
      nombre,
      apellido,
      correo,
      estado
    });

    // Update phone if provided
    if (telefono) {
      if (cliente.telefonos && cliente.telefonos.length > 0) {
        await cliente.telefonos[0].update({ telefono });
      } else {
        await sequelize.models.TelefonoCliente.create({
          id_cliente: id,
          telefono
        });
      }
    }

    // Update address if provided
    if (direccion) {
      const { calle = '', ciudad = '', codigo_postal = '' } = direccion;
      // Format the address as a proper PostgreSQL record string
      const direccionStr = `(${calle},${ciudad},${codigo_postal})`;

      if (cliente.direccionCliente) {
        await sequelize.query(
          'UPDATE direccion_cliente SET direccion = $1::direccion WHERE id = $2',
          {
            bind: [direccionStr, cliente.direccionCliente.id],
            type: sequelize.QueryTypes.UPDATE
          }
        );
      } else {
        await sequelize.query(
          'INSERT INTO direccion_cliente (id_cliente, direccion) VALUES ($1, $2::direccion)',
          {
            bind: [id, direccionStr],
            type: sequelize.QueryTypes.INSERT
          }
        );
      }
    }

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
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    // Soft delete - just update the estado to false
    await cliente.update({ estado: false });

    res.json({ message: 'Cliente desactivado correctamente' });
  } catch (error) {
    console.error('Error al desactivar cliente:', error);
    res.status(500).json({ error: 'Error al desactivar cliente' });
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
