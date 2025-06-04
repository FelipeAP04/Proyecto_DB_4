const express = require('express');
const router = express.Router();

const {
  obtenerReporteCompras,
  obtenerReporteInventario,
  obtenerReporteClientesFrecuentes
} = require('../controllers/reportes.controller');

router.get('/compras', obtenerReporteCompras);
router.get('/inventario', obtenerReporteInventario);
router.get('/clientes', obtenerReporteClientesFrecuentes);

module.exports = router;