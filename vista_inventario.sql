CREATE OR REPLACE VIEW vista_inventario AS
SELECT 
  c.id,
  c.codigo_serie,
  c.nombre,
  c.descripcion,
  c.precio,
  c.disponible,
  tc.tipo AS tipo_componente,
  SUM(i.cantidad) AS stock
FROM componentes c
LEFT JOIN inventario i ON c.id = i.id_componente
LEFT JOIN tipos_componentes tc ON c.id_tipo_componente = tc.id
GROUP BY c.id, tc.tipo;
