const express = require('express');
const router = express.Router();
const DatosAcademicos = require('../models/dacademicos.model.js');
const { performance } = require('perf_hooks');

// Obtener todos los registros con paginación
router.get('/consultas', async (req, res) => {
  try {
    const { page = 1, size = 10 } = req.query;
    const { count, rows } = await DatosAcademicos.findAndCountAll({
      limit: parseInt(size),
      offset: (parseInt(page) - 1) * parseInt(size)
    });
    res.status(200).json({
      ok: true,
      status: 200,
      data: rows,
      total: count,
      page: parseInt(page),
      size: parseInt(size)
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      status: 500,
      message: error.message
    });
  }
});

// Obtener un registro por id
router.get('/consulta/:id', async (req, res) => {
  const start = performance.now();
  try {
    const id = req.params.id;
    const dato = await DatosAcademicos.findOne({ where: { iddatoacademico: id } });
    res.status(200).json({
      ok: true,
      status: 200,
      body: dato
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      status: 500,
      message: error.message
    });
  } finally {
    const end = performance.now();
    console.log(`Consulta de datosacademicos por id tomó ${end - start} ms`);
  }
});

// Insertar un nuevo registro
router.post('/insertar', async (req, res) => {
  try {
    const datacad = req.body;
    const nuevoDato = await DatosAcademicos.create(datacad);
    res.status(201).json({
      ok: true,
      status: 201,
      message: nuevoDato
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      status: 500,
      message: error.message
    });
  }
});

// Editar un registro por id
router.put('/editar/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const datacad = req.body;
    const actualizado = await DatosAcademicos.update(datacad, {
      where: { iddatoacademico: id }
    });
    res.status(200).json({
      ok: true,
      status: 200,
      message: actualizado
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      status: 500,
      message: error.message
    });
  }
});

// Eliminar un registro por id
router.delete('/eliminar/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const eliminado = await DatosAcademicos.destroy({
      where: { iddatoacademico: id }
    });
    res.status(200).json({
      ok: true,
      status: 200,
      message: eliminado
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      status: 500,
      message: error.message
    });
  }
});

module.exports = router;
