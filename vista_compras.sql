CREATE OR REPLACE VIEW vista_compras AS
SELECT 
  c.id AS compra_id,
  c.id_cliente,
  c.fecha AS fecha_compra,
  c.total,
  c.id_proveedor,
  p.nombre AS proveedor_nombre,
  dc.id_componente,
  dc.cantidad,
  dc.precio_unitario,
  dc.sub_total
FROM compras c
JOIN proveedores p ON c.id_proveedor = p.id
LEFT JOIN detalle_compras dc ON c.id = dc.id_compra;
