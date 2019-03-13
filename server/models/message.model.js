import moment from 'moment';
import uuid from 'uuid';


class Message {
  constructor() {
    this.messages = [];
  }

  createNewMessage(data) {
    const newMessage = {
      id: uuid.v4(),
      createdOn: moment.now(),
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

  fetchUnreadMessage(unread) {
    return this.messages.find(message => message.status === unread);
  }

  fetchSentMessage(sent) {
    return this.messages.find(message => message.status === sent);
  }

  fetchSpecificMessage(id) {
    return this.messages.find(message => message.id === id);
  }

  deleteSpecificMessage(id) {
    const message = this.fetchSpecificMessage(id);
    const index = this.messages.indexOf(message);
    this.messages.splice(index, 1);
    return {};
  }
}

export default new Message();
