import moment from 'moment';
import uuid from 'uuid';

class Message {
  constructor() {
    this.messages = [];
  }

  createNewMessage(data) {
    const newMessage = {
      id: this.messages.length + 1,
      createdOn: new Date().toString(),
      subject: data.subject,
      message: data.message,
      parentMessageId: data.parentMessageId,
      status: data.status
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

  fetchUnreadMessages() {
    return this.messages.filter(message => message.status === 'unread');
  }

  fetchSentMessages(sent) {
    return this.messages.filter(message => message.status === 'sent');
  }

  deleteOneMessage(id) {
    const message = this.fetchSpecificMessage(id);
    const messageIndex = this.messages.indexOf(message);
    return this.messages.splice(messageIndex, 1);
  }
}

export default new Message();
