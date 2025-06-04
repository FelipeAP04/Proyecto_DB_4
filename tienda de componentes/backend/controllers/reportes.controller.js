const { sequelize } = require('../models');

// Reporte: vista_compras
const obtenerReporteCompras = async (req, res) => {
  try {
    const [compras] = await sequelize.query('SELECT * FROM vista_compras');
    res.json(compras);
  } catch (error) {
    console.error('Error al obtener vista_compras:', error);
    res.status(500).json({ error: 'Error al obtener el reporte de compras' });
  }
};

// Reporte: vista_inventario
const obtenerReporteInventario = async (req, res) => {
  try {
    const [inventario] = await sequelize.query('SELECT * FROM vista_inventario');
    res.json(inventario);
  } catch (error) {
    console.error('Error al obtener vista_inventario:', error);
    res.status(500).json({ error: 'Error al obtener el reporte de inventario' });
  }
};

// Reporte: vista_usuarios (clientes frecuentes)
const obtenerReporteClientesFrecuentes = async (req, res) => {
  try {
    const [clientes] = await sequelize.query('select * from vista_clientes');
    res.json(clientes);
  } catch (error) {
    console.error('Error al obtener vista_usuarios:', error);
    res.status(500).json({ error: 'Error al obtener el reporte de clientes frecuentes' });
  }
};

module.exports = {
  obtenerReporteCompras,
  obtenerReporteInventario,
  obtenerReporteClientesFrecuentes
};
