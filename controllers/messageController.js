const Message = require('../models/Message');
const Conversation = require('../models/Conversation');
const User = require('../models/User');

// Crear un nuevo mensaje
exports.createMessage = async (req, res) => {
  const { id } = req.params;
  const { sender_id, message } = req.body;
  try {
    const conversation = await Conversation.findByPk(id);
    if (!conversation) {
      return res.status(404).json({ error: 'Conversación no encontrada' });
    }

    const newMessage = await Message.create({ message, sender_id, conversation_id: id });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Error creando el mensaje', details: error.message });
  }
};

// Obtener todos los mensajes de una conversación
exports.getMessages = async (req, res) => {
  const { id } = req.params;
  try {
    const conversation = await Conversation.findByPk(id);
    if (!conversation) {
      return res.status(404).json({ error: 'Conversación no encontrada' });
    }

    const messages = await Message.findAll({
      where: { conversation_id: id },
      include: [{ model: User, as: 'sender', attributes: ['id', 'name', 'role'] }],
      order: [['timestamp', 'ASC']],
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo los mensajes', details: error.message });
  }
};
