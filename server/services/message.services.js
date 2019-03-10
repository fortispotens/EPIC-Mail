import messagesDummyData from '../utils/messagesDummyData';
import Message from '../model/message.model';

const MessageService = {
  createNewMessage(message) {
    const messagesLength = messagesDummyData.messages.length;
    const lastMessageId = messagesDummyData.messages[messagesLength - 1].id;
    const newMessageId = lastMessageId + 1;
    message.id = newMessageId;
    messagesDummyData.messages.push(message);
    return message;
  },
  fetchAllMessages() {
    const validMessages = messagesDummyData.messages.map((message) => {
      const newMessage = new Message();
      newMessage.id = message.id;
      newMessage.createdOn = message.createdOn;
      newMessage.subject = message.subject;
      newMessage.message = message.message;
      newMessage.parentMessageId = message.parentMessageId;
      newMessage.status = message.status;
      return newMessage;
    });
    return validMessages;
  },
  fetchUnreadMessage(status) {
    const unreadMessage = messagesDummyData.messages.find(message => message.status === status);
    return unreadMessage || {};
  },
  fetchSentMessage(status) {
    const sentMessage = messagesDummyData.messages.find(message => message.status === status);
    return sentMessage || {};
  },
  fetchSpecificMessage(id) {
    const message = messagesDummyData.messages.find(message => message.id === id);
    return message || {};
  },
  deleteSpecificMessage(id) {
    const message = messagesDummyData.messages.find(message => message.id === id);
    const index = messagesDummyData.messages.indexOf(message);
    messagesDummyData.messages.splice(index, 1);
    return messages || {};
  }
};
