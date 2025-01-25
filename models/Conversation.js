const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User'); // Importa el modelo User

// Definir el modelo Conversation
const Conversation = sequelize.define('Conversation', {

  status: {
    type: DataTypes.STRING, // Tipo de dato: Cadena de texto
    defaultValue: 'abierta', // Valor por defecto es 'abierta'
  },

  client_id: {
    type: DataTypes.INTEGER, // Tipo de dato: Número entero
    allowNull: false, // No puede ser nulo
    references: {
      model: User, // Relaciona con el modelo 'User'
      key: 'id',   // Hace referencia al campo 'id' de la tabla de usuarios
    },
    onDelete: 'NO ACTION', // Si se elimina un cliente, no se realiza ninguna acción en las conversaciones
    onUpdate: 'CASCADE',   // Si se actualiza el ID de un cliente, la actualización se propaga a las conversaciones
  },

  agent_id: {
    type: DataTypes.INTEGER, 
    allowNull: false, 
    references: {
      model: User, 
      key: 'id',
    },
  },
});

// Configurar las asociaciones entre los modelos
// La conversación 'pertenece' a un cliente y a un agente, utilizando los campos 'client_id' y 'agent_id'
Conversation.belongsTo(User, { as: 'client', foreignKey: 'client_id' });
Conversation.belongsTo(User, { as: 'agent', foreignKey: 'agent_id' });

module.exports = Conversation;
