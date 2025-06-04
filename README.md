
# Tienda de Componentes Electrónicos

## Descripción General
Este proyecto es un sistema completo para la gestión de una tienda de componentes electrónicos. Incluye modelado y normalización de datos, acceso a datos mediante ORM (Sequelize), validaciones con restricciones, triggers y funciones SQL, tipos de datos personalizados, vistas SQL, reportería avanzada, y exportación de datos. El sistema cuenta con una arquitectura backend (Node.js/Express) y frontend (React + Vite).

---

## Estructura del Proyecto

```
├── data.sql                  # Script de carga de datos de prueba
├── funciones.sql             # Funciones SQL personalizadas
├── triggers.sql              # Triggers SQL
├── vista_componentes.sql     # Definición de vistas SQL
├── vista_compras.sql         # Definición de vistas SQL
├── vista_usuarios.sql        # Definición de vistas SQL
├── Tienda de componentes.sql # Script principal de la base de datos
├── tienda de componentes/
│   ├── backend/              # Backend Node.js/Express
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── package.json
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── routes/
│   └── TiendaComponentes/    # Frontend React + Vite
│       ├── src/
│       │   ├── components/   # CRUDs y vistas
│       │   └── assets/
│       ├── public/
│       ├── index.html
│       └── package.json
└── README.md                 # Este archivo
```

---

## Instalación y Ejecución

### Backend
1. Ir a `tienda de componentes/backend/`
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Configurar la conexión a la base de datos en `config/config.js`.
4. Iniciar el servidor:
   ```bash
   npm start
   ```

### Frontend
1. Ir a `tienda de componentes/TiendaComponentes/`
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar la aplicación:
   ```bash
   npm run dev
   ```

---

## Modelo de Datos
- **Tablas:** Más de 15 tablas, incluyendo relaciones 1:N y N:M, atributos multivaluados y derivados.
- **Tablas de cruce:** Al menos 2 (por ejemplo, `Compra`, `DetalleCompra`).
- **Normalización:** Hasta 3FN.
- **Tipos personalizados:** Definidos en los scripts SQL.
- **Diagrama E-R:** [Incluir imagen o PDF aquí]

---

## Implementación CRUD
- **CRUD de Componentes:** Permite crear, ver, actualizar y eliminar componentes electrónicos.
- **CRUD de Clientes:** Gestión completa de clientes.
- **CRUD de Compras:** Gestión de compras y detalles asociados.
- **Vistas de índice:** Basadas en vistas SQL (`vista_componentes`, `vista_compras`, `vista_usuarios`).

---

## Validaciones y Reglas
- **Restricciones:** CHECK, NOT NULL, UNIQUE, DEFAULT en el modelo y la base de datos.
- **Triggers:** Al menos 3 triggers funcionales definidos en `triggers.sql`.
- **Funciones SQL:** Al menos 2 funciones definidas en `funciones.sql`.
- **Validaciones:** Implementadas tanto en el backend (Sequelize) como en la base de datos.

---

## Vistas SQL
- **Vista de Componentes:** `vista_componentes.sql` para visualización avanzada de inventario.
- **Vista de Compras:** `vista_compras.sql` para reportería de compras.
- **Vista de Usuarios:** `vista_usuarios.sql` para gestión de clientes y usuarios.

---

## Datos de Prueba
- **Script:** `data.sql` contiene más de 1000 registros distribuidos entre las tablas, con datos coherentes y variados.

---

## Reportes y Filtros (Opcional)
- **Reportes:** 3 reportes distintos con al menos 5 filtros cada uno.
- **Exportación:** Todos los reportes pueden exportarse a CSV.
- **Visualización:** Resultados claros y organizados en el frontend.

---

## Documentación Incluida
- `README.md`: Descripción del sistema e instrucciones.
- `Tienda de componentes.sql`: Script principal de la base de datos.
- `data.sql`: Datos de prueba.
- `funciones.sql`, `triggers.sql`, `vista_*.sql`: Scripts auxiliares.
- **Diagrama E-R:** [Adjuntar imagen o PDF]


---

## Rúbrica de Evaluación

| **Criterio**                                                        | **Puntos** |
|---------------------------------------------------------------------|------------|
| Modelo E-R completo, normalizado, con 20+ tablas                    | 15         |
| Implementación con ORM y 3 CRUDs funcionales                        | 15         |
| Vistas (al menos 2), funciones SQL (3+) y tipos personalizados (5+) | 10         |
| Validaciones (restricciones, checks, triggers)                      | 10         |
| Datos de prueba coherentes (mínimo 1000 registros)                  | 10         |
| Uso correcto de vistas en los índices                               | 10         |
| Documentación (README, scripts, diagrama, versión)                  | 10         |
| Reflexión grupal profunda y bien argumentada                        | 20         |
| **Total**                                                           | **100**    |

**Puntos extra:** 3 reportes con 5 filtros cada uno y exportación a CSV (15 puntos)
