CREATE OR REPLACE VIEW vista_clientes AS
SELECT 
  c.id AS cliente_id,
  c.nombre AS cliente_nombre,
  c.apellido AS cliente_apellido,
  c.correo AS cliente_correo,
  c.fecha_registro,
  c.estado AS cliente_estado,
  d.direccion::TEXT AS cliente_direccion,
  t.telefono AS cliente_telefono
FROM 
  clientes c
LEFT JOIN 
  direccion_cliente d ON c.id = d.id_cliente
LEFT JOIN 
  telefono_cliente t ON c.id = t.id_cliente;