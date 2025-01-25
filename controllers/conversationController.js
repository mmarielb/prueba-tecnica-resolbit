const Conversation = require('../models/Conversation');
const User = require('../models/User');

// Crear una conversación
exports.createConversation = async (req, res) => {
  try {
    const { client_id, agent_id } = req.body;
    if (!client_id || !agent_id) {
      return res.status(400).json({ error: 'El client_id y agent_id son obligatorios' });
    }
    const conversation = await Conversation.create({ client_id, agent_id });
    res.status(201).json(conversation);
  } catch (err) {
    res.status(500).json({ error: 'Error creando la conversación', details: err.message });
  }
};

// Obtener todas las conversaciones activas
exports.getConversations = async (req, res) => {
  try {
    const conversations = await Conversation.findAll({
      where: { status: 'abierta' },
      include: [
        { model: User, as: 'client', attributes: ['id', 'name', 'phone_number'] },
        { model: User, as: 'agent', attributes: ['id', 'name', 'phone_number'] },
      ]
    });
    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo las conversaciones', details: error.message });
  }
};
