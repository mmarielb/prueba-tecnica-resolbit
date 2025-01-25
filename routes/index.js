const express = require('express');
const userController = require('../controllers/userController');
const conversationController = require('../controllers/conversationController');
const messageController = require('../controllers/messageController');

const router = express.Router();

// Rutas de usuarios
router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);

// Rutas de conversaciones
router.post('/conversations', conversationController.createConversation);
router.get('/conversations', conversationController.getConversations);

// Rutas de mensajes
router.post('/conversations/:id/messages', messageController.createMessage);
router.get('/conversations/:id/messages', messageController.getMessages);

module.exports = router;
