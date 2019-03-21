import MessageModel from '../models/message.modelV2';


class MessageController {
  static sendNewMessage(req, res) {
    if (!req.body.subject) {
      return res.status(400).json({ message: 'Please provide a subject' });
    }
    if (!req.body.message) {
      return res.status(400).json({ message: 'Please provide message body' });
    }
    const createdMessage = MessageModel.createNewMessage(req.body);
    return res.status(201).json({
      status: res.statusCode,
      message: 'Message created successfully',
      createdMessage
    });
  }

  static getAllMessages(req, res) {
    const messages = MessageModel.fetchAllMessages();
    if (messages.length === 0 || !messages) {
      return res.status(400).json({ message: 'There are no messages' });
    }
    return res.status(200).json({
      status: res.statusCode,
      message: 'Fetched All Messages successfully',
      messages
    });
  }

  static getSpecificMessage(req, res) {
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

  static getUnreadMessages(req, res) {
    const unreadMessages = MessageModel.fetchUnreadMessages(req.params.status === 'unread');
    if (unreadMessages.length === 0) {
      return res.status(404).json({ message: 'Sorry, no unread messages' });
    }
    return res.status(200).json({
      status: res.statusCode,
      message: 'Fetched all unread Messages successfully',
      unreadMessages
    });
  }

  static getSentMessages(req, res) {
    const sentMessages = MessageModel.fetchSentMessages();
    if (sentMessages.length === 0) {
      return res.status(404).json({ message: 'Sorry, there are no sent messages' });
    }
    return res.status(200).json({
      status: res.statusCode,
      message: 'Fetched all sent Messages successfully',
      sentMessages
    });
  }

  static deleteSpecificMessage(req, res) {
    const message = MessageModel.fetchSpecificMessage(Number(req.params.id));
    if (!message) {
      res.status(404).json({ message: 'Message is not found' });
    }
    MessageModel.deleteOneMessage(Number(req.params.id));
    res.status(204).send({
      status: res.statusCode,
      message: 'Message successfully deleted'
    });
  }
}

export default MessageController;
