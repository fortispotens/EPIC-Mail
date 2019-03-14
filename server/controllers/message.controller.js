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
  },
  getUnreadMessage(req, res) {
    const unreadMessage = MessageModel.fetchUnreadMessage(req.body.status);
    if (unreadMessage.length === 0) {
      return res.status(404).json({ message: 'Sorry, there are no unread messages' });
    }
    return res.json({
      status: res.statusCode,
      message: 'Fetched all unread Messages successfully',
      unreadMessage
    });
  },
  getSentMessage(req, res) {
    const sentMessage = MessageModel.fetchAllMessages(req.body.status)
          || MessageModel.fetchAllMessages();
    if (sentMessage.length === 0) {
      return res.status(404).json({ message: 'Sorry, there are no sent messages' });
    }
    return res.json({
      status: res.statusCode,
      message: 'Fetched all sent Messages successfully',
      sentMessage
    });
  },

  deleteSpecificMessage(req, res) {
    const deletem = MessageModel.deleteOneMessage(req.params.id);
    console.log(deletem);
    return res.send(deletem);
  }



  // deleteSpecificMessage(req, res) {
  //   const deletedMessage = MessageModel.deleteOneMessage(Number(req.params.id));
  //   // const deleteMessage = MessageModel.deleteOneMessage(req.params.id);
  //   if (deletedMessage) {
  //   return res.status(204).json({
  //     status: res.statusCode,
  //     message: 'Message is successfully Deleted',
  //     deletedMessage
  //   });
  // }
  // console.log(deletedMessage);
  //   return res.status(404).json({ message: 'message not found in delete router' });
  // }
  
};

export default MessageController;
