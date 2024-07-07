const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
const rutaDatosAcademicos = require('../router/dacademicos.router.js'); // Agrega esta línea

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('CURRICULUM VITAE');
});

app.use('/datosacademicos', rutaDatosAcademicos); // Agrega esta línea para usar el router de datos académicos

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    ok: false,
    status: 500,
    message: 'Something broke!',
  });
});

module.exports = app;
