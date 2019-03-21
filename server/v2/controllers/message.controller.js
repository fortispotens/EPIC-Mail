import dotenv from 'dotenv';
import connectDB from '../../connectDB';
import MessageModel from '../models/message.model';


class MessageController {
  static sendNewMessage(req, res) {
    const {
      subject,
      message
    } = req.body;

    const query = `INSERT INTO messages (subject, message)
                    VALUES('${subject}','${message}' ) returning * `;
    return connectDB.query(query)
      .then((result) => {
        if (result.rowCount >= 1) {
          return res.status(200).send({ status: 200, message: 'Message created successfully', data: result.rows[0] });
        }
        return res.status(500).send({ staus: 500, message: 'Message could not be sent' });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ status: 500, message: 'Error sending message' });
      });
  }

  static getAllMessages(req, res) {
    const messages = MessageModel.fetchAllMessages();
    if (messages.length === 0 || !messages) {
      return res.status(400).send({ message: 'There are no messages' });
    }
    return res.status(200).send({
      status: res.statusCode,
      message: 'Fetched All Messages successfully',
      messages
    });
  }

  static getSpecificMessage(req, res) {
    const specificMessage = MessageModel.fetchSpecificMessage(Number(req.params.id));
    if (!specificMessage) {
      return res.status(404).send({ message: 'Sorry, message not found' });
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
      return res.status(404).send({ message: 'Sorry, no unread messages' });
    }
    return res.status(200).send({
      status: res.statusCode,
      message: 'Fetched all unread Messages successfully',
      unreadMessages
    });
  }

  static getSentMessages(req, res) {
    const sentMessages = MessageModel.fetchSentMessages();
    if (sentMessages.length === 0) {
      return res.status(404).send({ message: 'Sorry, there are no sent messages' });
    }
    return res.status(200).send({
      status: res.statusCode,
      message: 'Fetched all sent Messages successfully',
      sentMessages
    });
  }

  static deleteSpecificMessage(req, res) {
    const message = MessageModel.fetchSpecificMessage(Number(req.params.id));
    if (!message) {
      res.status(404).send({ message: 'Message is not found' });
    }
    MessageModel.deleteOneMessage(Number(req.params.id));
    res.status(204).send({
      status: res.statusCode,
      message: 'Message successfully deleted'
    });
  }
}

export default MessageController;
