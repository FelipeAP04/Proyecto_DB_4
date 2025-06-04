const { Op } = require('sequelize');
const { Cliente, Compra, Componente, Proveedor, Inventario, tipo_componente } = require('../models');
const { Parser } = require('json2csv');

exports.reporteCompras = async (req, res) => {
  try {
    const { clienteId, proveedorId, fechaInicio, fechaFin, montoMin, montoMax, tipoComponente, formato } = req.query;
    const whereCompra = {};
    if (clienteId) whereCompra.ClienteId = clienteId;
    if (fechaInicio || fechaFin) whereCompra.fecha = {};
    if (fechaInicio) whereCompra.fecha[Op.gte] = fechaInicio;
    if (fechaFin) whereCompra.fecha[Op.lte] = fechaFin;
    if (montoMin) whereCompra.monto = { ...(whereCompra.monto || {}), [Op.gte]: montoMin };
    if (montoMax) whereCompra.monto = { ...(whereCompra.monto || {}), [Op.lte]: montoMax };

    const include = [
      { model: Cliente, attributes: ['id', 'nombre', 'ciudad'] },
      {
        model: Componente,
        attributes: ['id', 'nombre', 'tipoComponenteId'],
        include: [
          { model: tipo_componente, attributes: ['nombre'] },
          { model: Proveedor, attributes: ['id', 'nombre'], where: proveedorId ? { id: proveedorId } : undefined }
        ]
      }
    ];
    if (tipoComponente) {
      include[1].include[0].where = { nombre: tipoComponente };
    }
    const compras = await Compra.findAll({ where: whereCompra, include });
    const data = compras.map(c => ({
      id: c.id,
      fecha: c.fecha,
      monto: c.monto,
      cliente: c.Cliente?.nombre,
      ciudad: c.Cliente?.ciudad,
      componente: c.Componente?.nombre,
      tipo_componente: c.Componente?.tipo_componente?.nombre,
      proveedor: c.Componente?.Proveedor?.nombre
    }));
    if (formato === 'csv') {
      const parser = new Parser();
      return res.header('Content-Type', 'text/csv').attachment('reporte_compras.csv').send(parser.parse(data));
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.reporteInventario = async (req, res) => {
  try {
    const { tipoComponente, proveedorId, stockMin, stockMax, precioMin, precioMax, estado, formato } = req.query;
    const whereInv = {};
    if (stockMin) whereInv.stock = { ...(whereInv.stock || {}), [Op.gte]: stockMin };
    if (stockMax) whereInv.stock = { ...(whereInv.stock || {}), [Op.lte]: stockMax };
    if (estado) whereInv.estado = estado;
    if (precioMin) whereInv.precio = { ...(whereInv.precio || {}), [Op.gte]: precioMin };
    if (precioMax) whereInv.precio = { ...(whereInv.precio || {}), [Op.lte]: precioMax };
    const include = [
      { model: Componente, attributes: ['nombre'], include: [
        { model: tipo_componente, attributes: ['nombre'], where: tipoComponente ? { nombre: tipoComponente } : undefined },
        { model: Proveedor, attributes: ['nombre'], where: proveedorId ? { id: proveedorId } : undefined }
      ] }
    ];
    const inventario = await Inventario.findAll({ where: whereInv, include });
    const data = inventario.map(i => ({
      id: i.id,
      componente: i.Componente?.nombre,
      tipo_componente: i.Componente?.tipo_componente?.nombre,
      proveedor: i.Componente?.Proveedor?.nombre,
      stock: i.stock,
      precio: i.precio,
      estado: i.estado
    }));
    if (formato === 'csv') {
      const parser = new Parser();
      return res.header('Content-Type', 'text/csv').attachment('reporte_inventario.csv').send(parser.parse(data));
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.reporteClientes = async (req, res) => {
  try {
    const { ciudad, edadMin, edadMax, comprasMin, comprasMax, fechaRegistroInicio, fechaRegistroFin, estado, formato } = req.query;
    const whereCliente = {};
    if (ciudad) whereCliente.ciudad = ciudad;
    if (estado) whereCliente.estado = estado;
    if (edadMin) whereCliente.edad = { ...(whereCliente.edad || {}), [Op.gte]: edadMin };
    if (edadMax) whereCliente.edad = { ...(whereCliente.edad || {}), [Op.lte]: edadMax };
    if (fechaRegistroInicio || fechaRegistroFin) whereCliente.fechaRegistro = {};
    if (fechaRegistroInicio) whereCliente.fechaRegistro[Op.gte] = fechaRegistroInicio;
    if (fechaRegistroFin) whereCliente.fechaRegistro[Op.lte] = fechaRegistroFin;
    const clientes = await Cliente.findAll({ where: whereCliente, include: [
      { model: Compra, attributes: ['id'] }
    ] });
    let data = clientes.map(c => ({
      id: c.id,
      nombre: c.nombre,
      ciudad: c.ciudad,
      edad: c.edad,
      fechaRegistro: c.fechaRegistro,
      estado: c.estado,
      compras: c.Compras?.length || 0
    }));
    if (comprasMin) data = data.filter(c => c.compras >= comprasMin);
    if (comprasMax) data = data.filter(c => c.compras <= comprasMax);
    if (formato === 'csv') {
      const parser = new Parser();
      return res.header('Content-Type', 'text/csv').attachment('reporte_clientes.csv').send(parser.parse(data));
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
