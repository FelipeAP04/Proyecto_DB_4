-- Función 1, es la de obtener stock del inventario. Que permite conocer la cantidad del inventario total que hay.

CREATE OR REPLACE FUNCTION obtener_stock_componente(id_componente_input INT)
RETURNS INT AS $$
DECLARE
  stock_actual INT;
BEGIN
  SELECT COALESCE(SUM(cantidad), 0)
  INTO stock_actual
  FROM inventario
  WHERE id_componente = id_componente_input;

  RETURN stock_actual;
END;
$$ LANGUAGE plpgsql;

--La función 2, nos permite conocer que movimiento de inventario se esta realizando. 

CREATE OR REPLACE FUNCTION registrar_movimiento_inventario(
  id_componente_input INT,
  cantidad_input INT
) RETURNS VOID AS $$
BEGIN
  IF cantidad_input = 0 THEN
    RAISE EXCEPTION 'La cantidad no puede ser cero.';
  END IF;

  INSERT INTO inventario(id_componente, cantidad)
  VALUES (id_componente_input, cantidad_input);
END;
$$ LANGUAGE plpgsql;
