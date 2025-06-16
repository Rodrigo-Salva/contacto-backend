const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactoSchema = new Schema({
  nombre: { type: String, required: true },
  telefono: { type: String, required: true, unique: true },
  email: {
    type: String,
    unique: true,
    sparse: true,
    validate: {
      validator: v => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: 'Email inválido'
    }
  },
  direccion: { type: String },
  fechaNacimiento: { type: Date }
});

module.exports = mongoose.model('Contacto', contactoSchema);
