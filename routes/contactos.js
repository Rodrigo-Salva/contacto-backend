const express = require('express');
const router = express.Router();
const Contacto = require('../models/Contacto');

//Crear contacto
router.post('/', async (req, res) => {
  try {
    const nuevo = new Contacto(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Obtener todos con búsqueda y orden
router.get('/', async (req, res) => {
  const { search } = req.query;
  const filtro = search
    ? {
        $or: [
          { nombre: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } }
        ]
      }
    : {};
  try {
    const contactos = await Contacto.find(filtro).sort({ nombre: 1 });
    res.json(contactos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener uno por id
router.get('/:id', async (req, res) => {
  try {
    const contacto = await Contacto.findById(req.params.id);
    if (!contacto) return res.status(404).json({ error: 'No encontrado' });
    res.json(contacto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar contacto
router.put('/:id', async (req, res) => {
  try {
    const actualizado = await Contacto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!actualizado) return res.status(404).json({ error: 'No encontrado' });
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar contacto
router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await Contacto.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: 'No encontrado' });
    res.json({ mensaje: 'Contacto eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
