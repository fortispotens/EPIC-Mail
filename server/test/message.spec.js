import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

process.env.NODE_ENV = 'test';

chai.use(chaiHttp);
const request = chai.request(app);


describe('Messages', () => {
  beforeEach((done) => {
    done();
  });
  describe('Get All Messages', () => {
    it('it should GET all the messages', (done) => {
      const messages = [
        {
          id: 1,
          createdOn: 'Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)',
          subject: 'Developer',
          message: 'We are learning how to become world-class',
          status: 'unread'
        },
      ];
      chai.request(app)
        .get('api/v1/messages')
        .end((err, res) => {
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
      const newMessage = {
        id: 1,
        createdOn: 'Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)',
        subject: 'Developer',
        message: 'We are learning how to become world-class',
        status: 'unread'
      };
      chai.request(app)
        .post('api/v1/messages')
        .send({ newMessage })
        .end((err, res) => {
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
  describe('api/v1/messages/:id', () => {
    it('it should GET a message by the given id', (done) => {
      const newMessage = {
        id: 1,
        createdOn: 'Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)',
        subject: 'Developer',
        message: 'We are learning how to become world-class',
        status: 'unread'
      };
      chai.request(app)
        .get('api/v1/messages/:id')
        .send(newMessage)
        .end((err, res) => {
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
  describe('GET all sent messages', () => {
    it('it should fetch all message with status sent', (done) => {
      const newMessage = {
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
          expect(newMessage).to.be.a('object');
          expect(newMessage).to.have.property('id').to.deep.equal(1);
          expect(newMessage).to.have.property('status').eql('sent');
          expect(newMessage).to.have.property('subject').eql('Developer');
          expect(newMessage).to.have.property('createdOn').to.deep.equal('Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)');
          expect(newMessage).to.have.property('message').to.deep.equal('We are learning how to become world-class');
          done();
        });
    });
  });
  describe('/DELETE/:id message', () => {
    it('it should DELETE a message given the id', (done) => {
      const newMessage = {
        id: 1,
        createdOn: 'Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)',
        subject: 'Developer',
        message: 'We are learning how to become world-class',
        status: 'sent'
      };
      chai.request(app)
        .delete('api/v1/messages/:id')
        .end((err, res) => {
          expect(newMessage).to.be.a('object');
          expect(newMessage).to.have.property('id').to.deep.equal(1);
          expect(newMessage).to.have.property('status').eql('sent');
          expect(newMessage).to.have.property('subject').eql('Developer');
          expect(newMessage).to.have.property('createdOn').to.deep.equal('Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)');
          expect(newMessage).to.have.property('message').to.deep.equal('We are learning how to become world-class');
          done();
        });
    });
  });
});
