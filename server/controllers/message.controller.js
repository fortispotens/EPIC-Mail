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
      status: res.statusCode,
      message: 'Message sent successfully',
      createdMessage
    });
  },
  getAllMessages(req, res) {
    const allMessages = MessageModel.fetchAllMessages();
    if (allMessages.length === 0) {
      return res.status(400).json({ message: 'There are no messages' });
    }
    return res.status(200).json({
      status: res.statusCode,
      message: 'Fetched All Messages successfully',
      allMessages
    });
  },
  getSpecificMessage(req, res) {
    const specificMessage = MessageModel.fetchSpecificMessage(Number(req.params.id));
    if (!specificMessage) {
      return res.status(404).json({ message: 'Sorry, message not found' });
    }
    return res.status(200).send({
      status: res.statusCode,
      message: 'Fetched Message successfully',
      specificMessage
    });
  }
};

export default MessageController;
