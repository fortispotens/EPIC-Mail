import moment from 'moment';
import uuid from 'uuid';

class Message {
  constructor() {
    this.messages = [];
  }

  createNewMessage(data) {
    const newMessage = {
      id: this.messages.length + 1,
      createdOn: new Date().toLocaleDateString(),
      subject: data.subject,
      message: data.message,
      parentMessageId: this.messages.length + 1,
      status: 'unread'
    };
    this.messages.push(newMessage);
    return newMessage;
  }
}

export default new Message();
