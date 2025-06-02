const { Compra, Cliente, Componente } = require('../models');
const { sequelize } = require('../models');

// Obtener todas las compras (con relaciones)
const obtenerCompras = async (req, res) => {
  try {
    const compras = await Compra.findAll({
      include: [
        { model: Cliente, as: 'cliente' },
        { model: Componente, as: 'componente' }
      ]
    });
    res.json(compras);
  } catch (error) {
    console.error('Error al obtener compras:', error);
    res.status(500).json({ error: 'Error al obtener compras' });
  }
};

// Obtener compras desde la vista SQL
const obtenerVistaCompras = async (req, res) => {
  try {
    const [compras] = await sequelize.query('SELECT * FROM vista_compras');
    res.json(compras);
  } catch (error) {
    console.error('Error al obtener vista de compras:', error);
    res.status(500).json({ error: 'Error al obtener compras desde la vista' });
  }
};

// Crear una nueva compra
const crearCompra = async (req, res) => {
  const { id_cliente, id_componente, cantidad, fecha_compra } = req.body;

  try {
    const compra = await Compra.create({
      id_cliente,
      id_componente,
      cantidad,
      fecha_compra: fecha_compra || new Date()
    });

    res.status(201).json(compra);
  } catch (error) {
    console.error('Error al crear compra:', error);
    res.status(400).json({ error: error.message });
  }
};

// Actualizar una compra existente
const actualizarCompra = async (req, res) => {
  const { id } = req.params;
  const { id_cliente, id_componente, cantidad, fecha_compra } = req.body;

  try {
    const [updated] = await Compra.update(
      { id_cliente, id_componente, cantidad, fecha_compra },
      { where: { id } }
    );

    if (!updated) return res.status(404).json({ message: 'Compra no encontrada' });

    res.json({ message: 'Compra actualizada correctamente' });
  } catch (error) {
    console.error('Error al actualizar compra:', error);
    res.status(500).json({ error: 'Error al actualizar compra' });
  }
};

// Eliminar una compra
const eliminarCompra = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Compra.destroy({ where: { id } });

    if (!deleted) return res.status(404).json({ message: 'Compra no encontrada' });

    res.json({ message: 'Compra eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar compra:', error);
    res.status(500).json({ error: 'Error al eliminar compra' });
  }
};

module.exports = {
  obtenerCompras,
  obtenerVistaCompras,
  crearCompra,
  actualizarCompra,
  eliminarCompra
};
