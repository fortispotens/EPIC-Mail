"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _message = _interopRequireDefault(require("../models/message.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageController = {
  sendNewMessage: function sendNewMessage(req, res) {
    if (!req.body.subject) {
      return res.status(400).json({
        message: 'Please provide a subject'
      });
    }

    if (!req.body.message) {
      return res.status(400).json({
        message: 'Please provide message body'
      });
    }

    var createdMessage = _message.default.createNewMessage(req.body);

    return res.status(201).json({
      status: res.statusCode,
      message: 'Message sent successfully',
      createdMessage: createdMessage
    });
  },
  getAllMessages: function getAllMessages(req, res) {
    var allMessages = _message.default.fetchAllMessages();

    if (allMessages.length === 0) {
      return res.status(400).json({
        message: 'There are no messages'
      });
    }

    return res.status(200).json({
      status: res.statusCode,
      message: 'Fetched All Messages successfully',
      allMessages: allMessages
    });
  },
  getSpecificMessage: function getSpecificMessage(req, res) {
    var specificMessage = _message.default.fetchSpecificMessage(Number(req.params.id));

    if (!specificMessage) {
      return res.status(404).json({
        message: 'Sorry, message not found'
      });
    }

    return res.status(200).send({
      status: res.statusCode,
      message: 'Fetched Message successfully',
      specificMessage: specificMessage
    });
  },
  getUnreadMessage: function getUnreadMessage(req, res) {
    var unreadMessage = _message.default.fetchUnreadMessage(req.body.status);

    if (unreadMessage.length === 0) {
      return res.status(404).json({
        message: 'Sorry, there are no unread messages'
      });
    }

    return res.json({
      status: res.statusCode,
      message: 'Fetched all unread Messages successfully',
      unreadMessage: unreadMessage
    });
  },
  getSentMessage: function getSentMessage(req, res) {
    var sentMessage = _message.default.fetchAllMessages(req.body.status) || _message.default.fetchAllMessages();

    if (sentMessage.length === 0) {
      return res.status(404).json({
        message: 'Sorry, there are no sent messages'
      });
    }

    return res.json({
      status: res.statusCode,
      message: 'Fetched all sent Messages successfully',
      sentMessage: sentMessage
    });
  },
  deleteSpecificMessage: function deleteSpecificMessage(req, res) {
    var deletem = _message.default.deleteOneMessage(req.params.id);

    console.log(deletem);
    return res.send(deletem);
  } // deleteSpecificMessage(req, res) {
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
var _default = MessageController;
exports.default = _default;