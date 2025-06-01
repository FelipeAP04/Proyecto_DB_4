CREATE TABLE componentes (
  id SERIAL PRIMARY KEY NOT NULL,
  codigo_serie varchar(10) UNIQUE NOT NULL,
  nombre varchar(50) NOT NULL,
  descripcion varchar(255) NOT NULL,
  id_tipo_componente int,
  precio float NOT NULL,
  disponible boolean NOT NULL DEFAULT true
);

CREATE TABLE especificaciones_componente (
  id SERIAL PRIMARY KEY NOT NULL,
  id_componente int NOT NULL REFERENCES componentes (id),
  especificacion varchar(255) NOT NULL,
  valor varchar(255) NOT NULL
);

CREATE TABLE tipos_componentes (
  id SERIAL PRIMARY KEY NOT NULL,
  tipo varchar(50) NOT NULL
);

CREATE TABLE inventario (
  id SERIAL PRIMARY KEY  NOT NULL,
  id_componente int NOT NULL REFERENCES componentes (id),
  cantidad int NOT NULL, -- puede ser positivo o negativo, obtenemos el stock con un sum() en la tabla
  fecha_movimiento timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE DOMAIN correo_valido AS TEXT
CHECK (VALUE ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

CREATE TABLE clientes (
  id SERIAL PRIMARY KEY NOT NULL,
  nombre varchar(100) NOT NULL,
  apellido varchar(100) NOT NULL,
  correo correo_valido UNIQUE NOT NULL,
  fecha_registro timestamp NOT NULL,
  estado boolean NOT NULL
);

CREATE TYPE direccion AS (
  calle TEXT,
  ciudad TEXT,
  codigo_postal TEXT 
);

CREATE TABLE direccion_cliente (
  id SERIAL PRIMARY KEY NOT NULL,
  id_cliente int,
  direccion direccion NOT NULL
);

CREATE TABLE telefono_cliente (
  id SERIAL PRIMARY KEY NOT NULL,
  id_cliente int,
  telefono varchar(12) NOT NULL
);

CREATE TABLE empleado (
  id SERIAL PRIMARY KEY NOT NULL,
  nombre varchar(100) NOT NULL,
  apellido varchar(100) NOT NULL,
  tipo_empleado varchar(50) NOT NULL CHECK (tipo_empleado IN ('bodeguero', 'vendedor', 'cajero', 'administrador')),
  fecha_contratacion date NOT NULL,
  estado boolean NOT NULL
);

CREATE TABLE proveedores (
  id SERIAL PRIMARY KEY NOT NULL,
  nombre varchar(100) NOT NULL,
  telefono varchar(20),
  correo correo_valido,
  direccion varchar(255),
  estado boolean NOT NULL
);

CREATE TABLE compras (
  id SERIAL PRIMARY KEY NOT NULL,
  id_proveedor INT NOT NULL REFERENCES proveedores (id),
  fecha timestamp NOT NULL DEFAULT current_timestamp,
  total float NOT NULL
);

CREATE TABLE detalle_compras (
  id SERIAL PRIMARY KEY NOT NULL,
  id_compra int REFERENCES compras (id),
  id_componente int REFERENCES componentes (id),
  cantidad float NOT NULL CHECK (cantidad > 0),
  precio_unitario float NOT NULL CHECK (precio_unitario > 0),
  sub_total float NOT NULL CHECK (sub_total > 0)
);

CREATE TABLE metodos_pago (
  id SERIAL PRIMARY KEY NOT NULL,
  metodo varchar(50) UNIQUE NOT NULL
);

CREATE TABLE transaccion (
  id SERIAL PRIMARY KEY NOT NULL,
  id_cliente int NOT NULL REFERENCES clientes (id),
  id_vendedor int NOT NULL REFERENCES empleado (id),
  total float NOT NULL CHECK (total > 0),
  fecha date NOT NULL DEFAULT current_timestamp
);

CREATE TABLE detalle_transaccion (
  id SERIAL PRIMARY KEY NOT NULL,
  id_transaccion int NOT NULL REFERENCES transaccion (id),
  id_componente int NOT NULL REFERENCES componentes (id),
  cantidad float NOT NULL CHECK (cantidad > 0),
  precio float NOT NULL CHECK (precio > 0),
  sub_total float NOT NULL CHECK (sub_total > 0)
);

CREATE TABLE pagos_transacciones (
  id SERIAL PRIMARY KEY NOT NULL,
  id_transaccion int REFERENCES transaccion (id),
  id_metodo_pago int REFERENCES metodos_pago (id),
  monto_pagado float NOT NULL
);

CREATE TYPE estado_envio AS ENUM (
  'entregado',
  'cancelado',
  'enviado',
  'retrasado'
);

CREATE TABLE envios (
  id SERIAL PRIMARY KEY NOT NULL,
  id_transaccion int REFERENCES transaccion (id),
  id_empleado int REFERENCES empleado (id),
  id_direccion int REFERENCES direccion_cliente (id),
  fecha_envio timestamp NOT NULL,
  fecha_entrega_esperada timestamp NOT NULL,
  fecha_entrega timestamp,
  estado estado_envio NOT NULL
);