const { Sequelize, DataTypes } = require('sequelize'); // Proporciona Sequelize y los tipos de datos
const sequelize = require('../db'); // Importa la conexión a la base de datos desde db.js

// Definir el modelo Message
const Message = sequelize.define('Message', {

  message: {
    type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
    allowNull: false // El contenido del mensaje no puede estar vacío
  },
 
  timestamp: {
    type: DataTypes.DATE, // Define el tipo de dato como fecha
    defaultValue: Sequelize.NOW // Si no se especifica, toma la fecha y hora actual
  },
  
  conversation_id: {
    type: DataTypes.INTEGER, // Define el tipo de dato como número entero
    references: {
      model: 'Conversations', // Referencia al modelo 'Conversations'
      key: 'id' // Hace referencia al campo 'id' de la tabla 'Conversations'
    }
  },

  sender_id: {
    type: DataTypes.INTEGER, 
    references: {
      model: 'Users', // Referencia al modelo 'Users'
      key: 'id' // Hace referencia al campo 'id' de la tabla 'Users'
    }
  }
});

module.exports = Message;
