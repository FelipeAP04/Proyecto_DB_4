const express = require('express');
const app = express();
const componenteRoutes = require('./routes/componente.routes');
const reportesRoutes = require('./routes/reportes.routes');

app.use(express.json());
app.use('/api', componenteRoutes);
app.use('/api/reportes', reportesRoutes);

module.exports = app;
