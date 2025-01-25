const { DataTypes } = require('sequelize'); // Proporciona los tipos de datos para definir el modelo
const sequelize = require('../db'); // Importa la conexión a la base de datos desde db.js

// Definir el modelo User
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
    allowNull: false // No puede ser nulo, es obligatorio
  },
 
  phone_number: {
    type: DataTypes.STRING, 
    unique: true, // El número de teléfono debe ser único en la base de datos
    allowNull: true // Puede ser nulo, no es obligatorio para todos los usuarios
  },
  // Campo 'role': Rol del usuario (cliente o agente)
  role: {
    type: DataTypes.STRING, 
    allowNull: false, 
    validate: {
      isIn: [['cliente', 'agent']] // Asegura que solo se acepten estos dos valores para el rol
    }
  }
});

module.exports = User;
