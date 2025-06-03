-- Trigger 1: Actualiza el inventario después de una venta
CREATE OR REPLACE FUNCTION update_inventory_after_sale()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO inventario (
        id_componente,
        cantidad,
        fecha_movimiento
    ) VALUES (
        NEW.id_componente,
        -NEW.cantidad,
        CURRENT_TIMESTAMP
    );

    IF (SELECT COALESCE(SUM(cantidad), 0) 
        FROM inventario 
        WHERE id_componente = NEW.id_componente) < 0 THEN
        RAISE EXCEPTION 'No hay suficiente stock del componente %', NEW.id_componente;
    END IF;

    IF (SELECT COALESCE(SUM(cantidad), 0) 
        FROM inventario 
        WHERE id_componente = NEW.id_componente) <= 10 THEN
        UPDATE componentes 
        SET disponible = false 
        WHERE id = NEW.id_componente;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_update_inventory
AFTER INSERT ON detalle_transaccion
FOR EACH ROW
EXECUTE FUNCTION update_inventory_after_sale();

-- Trigger 2: Historial de precios
CREATE OR REPLACE FUNCTION validate_component_price()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.precio <= 0 THEN
        RAISE EXCEPTION 'El precio debe ser mayor que 0';
    END IF;

    IF TG_OP = 'UPDATE' THEN
        IF NEW.precio < OLD.precio * 0.5 OR NEW.precio > OLD.precio * 1.5 THEN
            RAISE WARNING 'Cambio de precio significativo detectado para el componente %', NEW.id;
            INSERT INTO precio_historial (
                id_componente,
                precio_anterior,
                precio_nuevo,
                fecha_cambio
            ) VALUES (
                NEW.id,
                OLD.precio,
                NEW.precio,
                CURRENT_TIMESTAMP
            );
        END IF;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE IF NOT EXISTS precio_historial (
    id SERIAL PRIMARY KEY,
    id_componente INTEGER REFERENCES componentes(id),
    precio_anterior NUMERIC(10,2),
    precio_nuevo NUMERIC(10,2),
    fecha_cambio TIMESTAMP
);

CREATE TRIGGER tr_validate_price
BEFORE INSERT OR UPDATE ON componentes
FOR EACH ROW
EXECUTE FUNCTION validate_component_price();

-- Trigger 3: Sube de rango o incluye a cliente VIP dependiendo de sus compras
CREATE OR REPLACE FUNCTION update_client_status()
RETURNS TRIGGER AS $$
DECLARE
    total_compras NUMERIC(10,2);
    freq_compras INTEGER;
BEGIN
    SELECT COALESCE(SUM(total), 0) INTO total_compras
    FROM transaccion
    WHERE id_cliente = NEW.id_cliente
    AND fecha >= CURRENT_DATE - INTERVAL '6 months';

    SELECT COUNT(*) INTO freq_compras
    FROM transaccion
    WHERE id_cliente = NEW.id_cliente
    AND fecha >= CURRENT_DATE - INTERVAL '6 months';

    IF total_compras > 5000 OR freq_compras >= 10 THEN
        INSERT INTO cliente_vip (
            id_cliente,
            fecha_promocion,
            total_compras,
            frecuencia_compras
        ) VALUES (
            NEW.id_cliente,
            CURRENT_TIMESTAMP,
            total_compras,
            freq_compras
        ) ON CONFLICT (id_cliente) DO UPDATE
        SET fecha_actualizacion = CURRENT_TIMESTAMP,
            total_compras = EXCLUDED.total_compras,
            frecuencia_compras = EXCLUDED.frecuencia_compras;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE IF NOT EXISTS cliente_vip (
    id_cliente INTEGER PRIMARY KEY REFERENCES clientes(id),
    fecha_promocion TIMESTAMP NOT NULL,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_compras NUMERIC(10,2),
    frecuencia_compras INTEGER
);

CREATE TRIGGER tr_client_status
AFTER INSERT ON transaccion
FOR EACH ROW
EXECUTE FUNCTION update_client_status();
