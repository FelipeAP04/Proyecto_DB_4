CREATE OR REPLACE VIEW vista_componentes AS
SELECT
  c.id,
  c.codigo_serie,
  c.nombre,
  c.descripcion,
  c.precio,
  c.disponible,
  t.tipo AS tipo_componente,
  json_agg(
    json_build_object(
      'especificacion', ec.especificacion,
      'valor', ec.valor
    )
  ) AS especificaciones
FROM componentes c
LEFT JOIN tipos_componentes t ON t.id = c.id_tipo_componente
LEFT JOIN especificaciones_componente ec ON ec.id_componente = c.id
GROUP BY c.id, t.tipo;