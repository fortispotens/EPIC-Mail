import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

import MessageModel from '../models/message.model';


chai.use(chaiHttp);
const request = chai.request(app);

const allMessages = MessageModel.fetchAllMessages();
const createMessage = MessageModel.createNewMessage('newMessage');
const specificMessage = MessageModel.fetchSpecificMessage();
const unreadMessages = MessageModel.fetchUnreadMessages();
const sentMessages = MessageModel.fetchSentMessages();
const deleteOneMessages = MessageModel.deleteOneMessage();

const messages = [
  {
    statusCode: 200,
    id: 1,
    createdOn: 'Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)',
    subject: 'Developer',
    message: 'We are learning how to become world-class',
    status: 'unread'
  },
];

const newMessage = {
  statusCode: 201,
  id: 1,
  createdOn: 'Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)',
  subject: 'Developer',
  message: 'We are learning how to become world-class',
  status: 'unread'
};

describe('Messages', () => {
  beforeEach((done) => {
    done();
  });
  afterEach((done) => {
    done();
  });
  describe('Get All Messages', () => {
    it('it should GET all the messages', (done) => {
      chai.request(app)
        .get('api/v1/messages')
        .end((err, res) => {
          expect(messages[0].statusCode).to.equal(200);
          expect(messages).to.be.an('array');
          expect(allMessages).to.be.an('array');
          expect(messages[0]).to.be.a('object');
          expect(messages[0]).to.have.property('id').to.deep.equal(1);
          expect(messages[0]).to.have.property('status').eql('unread');
          expect(messages[0]).to.have.property('subject').eql('Developer');
          expect(messages[0]).to.have.property('createdOn').to.deep.equal('Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)');
          expect(messages[0]).to.have.property('message').to.deep.equal('We are learning how to become world-class');
          done();
        });
    });
  });
  describe('Create a message', () => {
    it('it should create a new message', (done) => {
      chai.request(app)
        .post('api/v1/messages')
        .end((err, res) => {
          expect(messages[0].statusCode).to.equal(200);
          expect(newMessage.statusCode).to.equal(201);
          expect(createMessage).to.be.a('object');
          expect(newMessage).to.be.a('object');
          expect(newMessage).to.have.property('id').to.deep.equal(1);
          expect(newMessage).to.have.property('status').eql('unread');
          expect(newMessage).to.have.property('subject').eql('Developer');
          expect(newMessage).to.have.property('createdOn').to.deep.equal('Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)');
          expect(newMessage).to.have.property('message').to.deep.equal('We are learning how to become world-class');
          done();
        });
    });
  });
  describe('Get a specific message', () => {
    it('it should GET a message by the given id', (done) => {
      chai.request(app)
        .get('api/v1/messages/:id')
        .send({ newMessage })
        .end((err, res) => {
          expect(messages[0].statusCode).to.equal(200);
          expect(newMessage.statusCode).to.equal(201);
          expect(newMessage).to.be.a('object');
          expect(newMessage).to.have.property('id').to.deep.equal(1);
          expect(newMessage).to.have.property('status').eql('unread');
          expect(newMessage).to.have.property('subject').eql('Developer');
          expect(newMessage).to.have.property('createdOn').to.deep.equal('Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)');
          expect(newMessage).to.have.property('message').to.deep.equal('We are learning how to become world-class');
          done();
        });
    });
  });
  describe('GET all unread messages', () => {
    it('it should fetch all message with status unread', (done) => {
      const newMessage = {
        statusCode: 200,
        id: 1,
        createdOn: 'Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)',
        subject: 'Developer',
        message: 'We are learning how to become world-class',
        status: 'unread'
      };
      chai.request(app)
        .put('api/v1/messages/unread')
        .send({
          status: 'unread'
        })
        .end((err, res) => {
          expect(messages[0].statusCode).to.equal(200);
          expect(newMessage.statusCode).to.equal(200);
          expect(unreadMessages).to.be.an('array');
          expect(newMessage).to.be.a('object');
          expect(newMessage).to.have.property('id').to.deep.equal(1);
          expect(newMessage).to.have.property('status').deep.equal('unread');
          expect(newMessage).to.have.property('subject').eql('Developer');
          expect(newMessage).to.have.property('createdOn').to.deep.equal('Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)');
          expect(newMessage).to.have.property('message').to.deep.equal('We are learning how to become world-class');
          done();
        });
    });
  });
  describe('GET all sent messages', () => {
    it('it should fetch all message with status sent', (done) => {
      const newMessage = {
        statusCode: 200,
        id: 1,
        createdOn: 'Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)',
        subject: 'Developer',
        message: 'We are learning how to become world-class',
        status: 'sent'
      };
      chai.request(app)
        .put('api/v1/messages/sent')
        .send({
          status: 'sent',
        })
        .end((err, res) => {
          expect(messages[0].statusCode).to.equal(200);
          expect(newMessage.statusCode).to.equal(200);
          expect(sentMessages).to.be.an('array');
          expect(newMessage).to.be.a('object');
          expect(newMessage).to.have.property('id').to.deep.equal(1);
          expect(newMessage).to.have.property('status').deep.equal('sent');
          expect(newMessage).to.have.property('subject').eql('Developer');
          expect(newMessage).to.have.property('createdOn').to.deep.equal('Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)');
          expect(newMessage).to.have.property('message').to.deep.equal('We are learning how to become world-class');
          done();
        });
    });
  });
  describe('Delete a specific message', () => {
    it('it should DELETE a message given the id', (done) => {
      const newMessage = {
        statusCode: 200,
        id: 1,
        createdOn: 'Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)',
        subject: 'Developer',
        message: 'We are learning how to become world-class',
        status: 'sent'
      };
      chai.request(app)
        .delete('api/v1/messages/:id')
        .end((err, res) => {
          expect(messages[0].statusCode).to.equal(200);
          expect(newMessage.statusCode).to.equal(200);
          expect(deleteOneMessages).to.be.an('array');
          expect(newMessage).to.be.a('object');
          expect(newMessage).to.have.property('id').to.deep.equal(1);
          expect(newMessage).to.have.property('status').deep.equal('sent');
          expect(newMessage).to.have.property('subject').eql('Developer');
          expect(newMessage).to.have.property('createdOn').to.deep.equal('Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)');
          expect(newMessage).to.have.property('message').to.deep.equal('We are learning how to become world-class');
          done();
        });
    });
  });
});
