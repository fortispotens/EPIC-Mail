import MessageModel from '../models/message.model';


const MessageController = {
  sendNewMessage(req, res) {
    if (!req.body.subject) {
      return res.status(400).json({ message: 'Please provide a subject' });
    }
    if (!req.body.message) {
      return res.status(400).json({ message: 'Please provide message body' });
    }
    const createdMessage = MessageModel.createNewMessage(req.body);
    return res.status(201).json({
      status: 201,
      message: 'Message sent successfully',
      createdMessage
    });
  },
  getAllMessages(req, res) {
    const allMessages = MessageModel.fetchAllMessages();
    if (allMessages.length === 0) {
      return res.status(400).json({ message: 'There are no messages' });
    }
    return res.json({
      status: 200,
      message: 'Fetched All Messages successfully',
      allMessages
    });
  }
};

export default MessageController;
