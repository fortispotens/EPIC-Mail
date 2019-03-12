import MessageModel from '../model/message.model';

const MessageController = {
  getAllMessages(req, res) {
    const allMessages = MessageModel.fetchAllMessages();
    return res.status(200).json({
      status: 200,
      message: 'Fetched All Messages successfully',
      data: allMessages
    });
  },
  sendNewMessage(req, res) {
    if (!req.body.subject && !req.body.message) {
      return res.status(400).json({ message: 'Please fill out all fields' });
    }
    const createdMessage = MessageModel.createNewMessage(req.body);
    return res.status(201).json({
      status: 201,
      message: 'Message sent successfully',
      data: {
        createdMessage
      }
    });
  },
  getUnreadMessage(req, res) {
    const unreadMessage = MessageModel.fetchSpecificMessage(req.params.status);
    return res.status(200).json({
      status: 200,
      message: 'Fetched all unread Messages successfully',
      data: unreadMessage
    });
  },
  getSentMessage(req, res) {
    const unreadMessage = MessageModel.fetchSpecificMessage(req.params.status);
    return res.status(200).json({
      status: 200,
      message: 'Fetched all sent Messages successfully',
      data: unreadMessage
    });
  },
  getSpecificMessage(req, res) {
    const specificMessage = MessageModel.fetchSpecificMessage(req.params.id);
    if (!specificMessage) {
      return res.status(404).json({ message: 'message not found' });
    }
    return res.status(201).json({
      status: 201,
      message: 'Fetched Message successfully',
      data: specificMessage
    });
  },
  deleteSpecificMessage(req, res) {
    const deleteMessage = MessageModel.fetchSpecificMessage(req.params.id);
    if (!deleteMessage) {
      return res.status(404).json({ message: 'message not found' });
    }
    const deletedMessage = MessageModel.deleteSpecificMessage(req.params.id);
    return res.json({
      status: 201,
      message: 'Successfully deleted a message',
      data: deletedMessage
    }).status(200);
  }
};

export default MessageController;


// import MessageService from '../services/message.services';

// const MessageController = {
//   fetchAllMessages(req, res) {
//     const allMessages = MessageService.fetchAllMessages();
//     return res.json({
//       status: 200,
//       message: 'Fetched Messages successfully',
//       data: allMessages
//     }).status(200);
//   },
//   createNewMessage(req, res) {
//     const newMessage = req.body;
//     const createdMessage = MessageService.createNewMessage(newMessage);
//     return res.json({
//       status: 201,
//       message: 'Message sent successfully',
//       data: {
//         createdMessage
//       }
//     }).status(201);
//   },
//   fetchUnreadMessage(req, res) {
//     const { status } = req.params;
//     const unreadMessage = MessageService.fetchUnreadMessage(status);
//     return res.json({
//       status: 200,
//       message: 'Fetched all unread Messages successfully',
//       data: unreadMessage
//     }).status(200);
//   },
//   fetchSentMessage(req, res) {
//     const { status } = req.params;
//     const sentMessage = MessageService.fetchSentMessage(status);
//     return res.json({
//       status: 200,
//       message: 'Fetched all sent Messages successfully',
//       data: sentMessage
//     }).status(200);
//   },
//   fetchSpecificMessage(req, res) {
//     const { id } = req.params;
//     const specificMessage = MessageService.fetchSpecificMessage(id);
//     return res.json({
//       status: 201,
//       message: 'Fetched Message successfully',
//       data: specificMessage
//     }).status(200);
//   },
//   deleteSpecificMessage(req, res) {
//     const { id } = req.params;
//     const deleteMessage = MessageService.deleteSpecificMessage(statusid);
//     return res.json({
//       status: 201,
//       message: 'Successfully deleted a message',
//       data: deleteMessage
//     }).status(200);
//   }
// };

// export default MessageController;
