import moment from 'moment';
import uuid from 'uuid';

class Message {
  constructor() {
    this.messages = [];
  }

  createNewMessage(data) {
    const newMessage = {
      id: uuid.v4(),
      createdOn: new Date().toString(),
      subject: data.subject,
      message: data.message,
      parentMessageId: data.parentMessageId,
      status: 'unread'
    };
    this.messages.push(newMessage);
    return newMessage;
  }

  fetchAllMessages() {
    return this.messages;
  }

  fetchSpecificMessage(id) {
    return this.messages.find(message => message.id === id);
  }

  fetchUnreadMessage() {
    return this.messages.filter(message => message.status === 'unread');
  }

  fetchSentMessage(sent) {
    return this.messages.filter(message => message.status === 'sent');
  }

  deleteOneMessage(id) {
    const message = this.fetchSpecificMessage(id);
    const messageIndex = this.messages.indexOf(message);
    return this.messages.splice(messageIndex, 1);
  }
}

export default new Message();
