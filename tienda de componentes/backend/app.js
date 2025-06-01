const express = require('express');
const app = express();
const componenteRoutes = require('./routes/componente.routes');

app.use(express.json());
app.use('/api', componenteRoutes);

module.exports = app;
