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
  eliminarCompra
} = require('../controllers/compra.controller');

router.get('/componentes', obtenerComponentes); // GET para el crud
router.get('/componentes/vista', obtenerVistaComponentes); // GET vista
router.post('/componentes', crearComponente); // POST con especificaciones
router.put('/componentes/:id', actualizarComponente); // PUT update
router.delete('/componentes/:id', eliminarComponente); // DELETE
router.get('/tipos', obtenerTipos); //GET tipos de componentes
router.get('/clientes/vista', obtenerVistaClientes); // GET vista clientes
router.get('/clientes', obtenerClientes); // GET all clients
router.post('/clientes', crearCliente); // POST create client
router.put('/clientes/:id', actualizarCliente); // PUT update client
router.delete('/clientes/:id', eliminarCliente); // DELETE client
router.get('/compras', obtenerCompras); // GET all compras
router.get('/compras/vista', obtenerVistaCompras); // GET vista SQL
router.post('/compras', crearCompra); // POST create compra
router.put('/compras/:id', actualizarCompra); // PUT update compra
router.delete('/compras/:id', eliminarCompra); // DELETE compra
router.get('/componentes/:id/stock', obtenerStockComponente); // GET stock por id

module.exports = router;
