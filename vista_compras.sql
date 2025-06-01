CREATE OR REPLACE VIEW vista_compras AS
SELECT 
  c.id AS compra_id,
  c.fecha,
  c.total,
  p.id AS proveedor_id,
  p.nombre AS proveedor_nombre,
  p.correo AS proveedor_correo,
  p.telefono AS proveedor_telefono
FROM compras c
JOIN proveedores p ON c.id_proveedor = p.id;
