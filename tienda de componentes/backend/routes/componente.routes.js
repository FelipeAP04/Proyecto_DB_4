const express = require('express');
const router = express.Router();
const {
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
  eliminarCliente, 
  obtenerStockComponente
} = require('../controllers/componente.controller');

const {
  obtenerCompras,
  obtenerVistaCompras,
  crearCompra,
  actualizarCompra,
  eliminarCompra,
  obtenerProveedores
} = require('../controllers/compra.controller');

const reportesController = require('../controllers/reportes.controller');

router.get('/componentes', obtenerComponentes);
router.get('/componentes/vista', obtenerVistaComponentes);
router.post('/componentes', crearComponente);
router.put('/componentes/:id', actualizarComponente);
router.delete('/componentes/:id', eliminarComponente);
router.get('/tipos', obtenerTipos);
router.get('/clientes/vista', obtenerVistaClientes);
router.get('/clientes', obtenerClientes);
router.post('/clientes', crearCliente);
router.put('/clientes/:id', actualizarCliente);
router.delete('/clientes/:id', eliminarCliente);

router.get('/compras', obtenerCompras);
router.get('/compras/vista', obtenerVistaCompras);
router.post('/compras', crearCompra);
router.put('/compras/:id', actualizarCompra);
router.delete('/compras/:id', eliminarCompra);

router.get('/proveedores', obtenerProveedores);  

router.get('/componentes/:id/stock', obtenerStockComponente);

router.get('/reportes/compras', reportesController.reporteCompras);
router.get('/reportes/inventario', reportesController.reporteInventario);
router.get('/reportes/clientes', reportesController.reporteClientes);

module.exports = router;
