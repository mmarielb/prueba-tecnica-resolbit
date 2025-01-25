const User = require('../models/User');

// Crear un usuario
exports.createUser = async (req, res) => {
  try {
    const { name, phone_number, role } = req.body;
    const user = await User.create({ name, phone_number, role });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error creando el usuario', details: err.message });
  }
};

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los usuarios', details: err.message });
  }
};
