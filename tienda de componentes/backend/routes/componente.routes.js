const express = require('express');
const router = express.Router();
const {
  obtenerComponentes,
  obtenerVistaComponentes,
  crearComponente,
  actualizarComponente,
  eliminarComponente,
  obtenerTipos
} = require('../controllers/componente.controller');


router.get('/componentes', obtenerComponentes); // GET para el crud
router.get('/componentes/vista', obtenerVistaComponentes); // GET vista
router.post('/componentes', crearComponente); // POST con especificaciones
router.put('/componentes/:id', actualizarComponente); // PUT update
router.delete('/componentes/:id', eliminarComponente); // DELETE
router.get('/tipos', obtenerTipos); //GET tipos de componentes

module.exports = router;
