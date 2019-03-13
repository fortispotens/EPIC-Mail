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
  }
};

export default MessageController;
