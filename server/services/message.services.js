import messagesDummyData from '../utils/messagesDummyData';
import Message from '../model/message.model';

const MessageService = {
  createNewMessage(newMessage) {
    const messagesLength = messagesDummyData.messages.length;
    const lastMessageId = messagesDummyData.messages[messagesLength - 1].id;
    const newMessageId = lastMessageId + 1;
    const message = new Message();
    newMessage.id = newMessageId;
    newMessage.createdOn = new Date().toLocaleDateString();
    newMessage.subject = message.subject;
    newMessage.message = message.message;
    newMessage.parentMessageId = message.parentMessageId;
    newMessage.status = 'unread';
    messagesDummyData.messages.push(newMessage);
    return newMessage;
  },
  fetchAllMessages() {
    const validMessages = messagesDummyData.messages.map((message) => {
      const messages = new Message();
      messages.id = message.id;
      messages.createdOn = message.createdOn;
      messages.subject = message.subject;
      messages.message = message.message;
      messages.parentMessageId = message.parentMessageId;
      messages.status = message.status;
      return message;
    });
    return validMessages;
  },
  fetchUnreadMessage(status) {
    const unreadMessage = messagesDummyData.messages.find(message => message.status === status);
    return unreadMessage;
  },
  fetchSentMessage(status) {
    const sentMessage = messagesDummyData.messages.find(message => message.status === status);
    return sentMessage;
  },
  fetchSpecificMessage(id) {
    const message = messagesDummyData.messages.message.find(message => message.id === id);
    return message;
  },
  deleteSpecificMessage(id) {
    const message = messagesDummyData.messages.find(message => message.id === id);
    const index = messagesDummyData.messages.indexOf(message);
    messagesDummyData.messages.splice(index, 1);
    return messages;
  }
};

export default MessageService;
