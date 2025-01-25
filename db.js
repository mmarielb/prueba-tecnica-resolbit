// Importa la clase Sequelize
const { Sequelize } = require('sequelize');

// Conexión a la base de datos PostgreSQL
const sequelize = new Sequelize('postgres://postgres:Buk2024.@localhost:5432/prueba-tecnica-resolbit');

module.exports = sequelize;