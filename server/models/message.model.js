import moment from 'moment';
import uuid from 'uuid';

let id = 0;

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
    // console.log(createNewMessage.createdOn);
    this.messages.push(newMessage);
    return newMessage;
  }
}

export default new Message();
