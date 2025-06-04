const { Compra, DetalleCompra, Proveedor, Componente } = require('../models');
const { sequelize } = require('../models');

// Obtener todas las compras con proveedor y sus componentes desde los detalles
const obtenerCompras = async (req, res) => {
  try {
    const compras = await Compra.findAll({
      include: [
        { model: Proveedor, as: 'proveedor' },
        {
          model: DetalleCompra,
          as: 'detalles',
          include: [{ model: Componente, as: 'componente' }]
        }
      ]
    });
    res.json(compras);
  } catch (error) {
    console.error('Error al obtener compras:', error);
    res.status(500).json({ error: 'Error al obtener compras' });
  }
};

// Obtener desde la vista SQL
const obtenerVistaCompras = async (req, res) => {
  try {
    const [compras] = await sequelize.query('SELECT * FROM vista_compras');
    res.json(compras);
  } catch (error) {
    console.error('Error al obtener vista de compras:', error);
    res.status(500).json({ error: 'Error al obtener compras desde la vista' });
  }
};

// Crear una compra con detalles
const crearCompra = async (req, res) => {
  const { id_proveedor, total, detalles } = req.body;

  // Validar que detalles sea un array no vacío
  if (!Array.isArray(detalles) || detalles.length === 0) {
    return res.status(400).json({ error: 'Se requiere al menos un detalle para la compra' });
  }

  const t = await sequelize.transaction();
  try {
    // Crear compra
    const compra = await Compra.create({
      id_proveedor,
      total,
      fecha: new Date()
    }, { transaction: t });

    // Crear detalles usando compra.id (no compra.id_compra)
    for (const detalle of detalles) {
      const sub_total = detalle.cantidad * detalle.precio_unitario;
      await DetalleCompra.create({
        id_compra: compra.id,       // <-- aquí el cambio clave
        id_componente: detalle.id_componente,
        cantidad: detalle.cantidad,
        precio_unitario: detalle.precio_unitario,
        sub_total
      }, { transaction: t });
    }

    await t.commit();
    res.status(201).json({ message: 'Compra creada correctamente', compraId: compra.id });
  } catch (error) {
    await t.rollback();
    console.error('Error al crear compra:', error);
    res.status(500).json({ error: 'Error al crear compra' });
  }
};

// Actualizar solo la compra (sin detalles)
const actualizarCompra = async (req, res) => {
  const { id } = req.params;
  const { id_proveedor, total } = req.body;

  try {
    // Actualizar compra por id (clave primaria)
    const [updated] = await Compra.update(
      { id_proveedor, total },
      { where: { id: id } }  // <-- cambiar id_compra por id
    );

    if (!updated) return res.status(404).json({ message: 'Compra no encontrada' });

    res.json({ message: 'Compra actualizada correctamente' });
  } catch (error) {
    console.error('Error al actualizar compra:', error);
    res.status(500).json({ error: 'Error al actualizar compra' });
  }
};

// Eliminar compra y sus detalles
const eliminarCompra = async (req, res) => {
  const { id } = req.params;

  const t = await sequelize.transaction();

  try {
    // Primero eliminar los detalles de compra asociados
    await DetalleCompra.destroy({ where: { id_compra: id }, transaction: t });

    // Luego eliminar la compra
    const deleted = await Compra.destroy({ where: { id: id }, transaction: t });

    if (!deleted) {
      await t.rollback();
      return res.status(404).json({ message: 'Compra no encontrada' });
    }

    await t.commit();
    res.json({ message: 'Compra eliminada correctamente' });

  } catch (error) {
    await t.rollback();
    console.error('Error al eliminar compra:', error);
    res.status(500).json({ error: 'Error al eliminar compra' });
  }
};

const obtenerProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll({
      attributes: ['id', 'nombre'],
      order: [['nombre', 'ASC']]
    });
    res.json(proveedores);
  } catch (error) {
    console.error('Error al obtener proveedores:', error);
    res.status(500).json({ error: 'Error al obtener proveedores' });
  }
};


module.exports = {
  obtenerCompras,
  obtenerVistaCompras,
  crearCompra,
  actualizarCompra,
  eliminarCompra,
  obtenerProveedores 
};
