// Importa las librerías necesarias
const express = require('express'); // Framework para crear el servidor
const bodyParser = require('body-parser'); // Middleware para procesar datos JSON
const sequelize = require('./db'); // Importa la conexión a la base de datos
const routes = require('./routes'); // Importa las rutas definidas para la API
const User = require('./models/User'); // Importa el modelo User
const Conversation = require('./models/Conversation'); // Importa el modelo Conversation
const Message = require('./models/Message'); // Importa el modelo Message

// Crea una instancia de la aplicación Express
const app = express();

// Middleware para parsear los datos en formato JSON
app.use(bodyParser.json());

// Usar las rutas definidas en el archivo routes.js
app.use(routes);

// Establece las asociaciones entre los modelos:
// 1. Un mensaje pertenece a un usuario (el remitente)
Message.belongsTo(User, { foreignKey: 'sender_id', as: 'sender' });
// 2. Un usuario puede tener muchos mensajes (los mensajes que ha enviado)
User.hasMany(Message, { foreignKey: 'sender_id', as: 'sentMessages' });

// Sincroniza la base de datos con los modelos definidos
sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Servidor corriendo en el puerto 3000');
    });
    console.log("Base de datos sincronizada");
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });
