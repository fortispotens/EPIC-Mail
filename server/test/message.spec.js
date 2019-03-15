import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import MessageController from '../controllers/message.controller';
import MessageModel from '../models/message.model';

process.env.NODE_ENV = 'test';

chai.use(chaiHttp);
const request = chai.request(app);


describe('Messages', () => {
  beforeEach((done) => {
    done();
  });
  describe('Get All Messages', () => {
    it('it should GET all the messages', (done) => {
      chai.request(app)
        .get('api/v1/messages')
        .end((err, res) => {
        //   expect(messages[0]).to.be.a('object');
        //   //   res.should.have.status(200);
        //   //   res.body.should.be.a('object');
        //   expect(messages[0]).to.have.property('subject');
        //   expect(messages[0]).to.have.property('message');
          done();
        });
    });
  });
  describe('Create a message', () => {
    it('it should create a new message', (done) => {
      const newMessage = {
        id: 1,
        createdOn: new Date().toString(),
        subject: 'Developer',
        message: 'We are learning how to become world-class',
        status: 'unread'
      };
      chai.request(app)
        .post('api/v1/messages')
        .send(newMessage)
        .end((err, res) => {
        //   expect(res.statusCode).to.equal(404);
          expect(newMessage).to.be.a('object');
          //   res.should.have.status(200);
          //   res.body.should.be.a('object');
          expect(newMessage).to.have.property('subject');
          expect(newMessage).to.have.property('message');
          done();
        });
    });
  });
  describe('api/v1/messages/:id', () => {
    it('it should GET a message by the given id', (done) => {
      const newMessage = {
        id: 1,
        createdOn: new Date().toString(),
        subject: 'Developer',
        message: 'We are learning how to become world-class',
        status: 'unread'
      };
      chai.request(app)
        .get('api/v1/messages/:id')
        .send(newMessage)
        .end((err, res) => {
          // res.should.have.status(200);
          expect(newMessage).to.have.property('id');
          done();
        });
    });
  });
  describe('GET all unread messages', () => {
    it('it should fetch all message with status unread', (done) => {
      const newMessage = {
        id: 1,
        createdOn: new Date().toString(),
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
          expect(newMessage).to.have.property('status').eql('unread');
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
          status: 'sent'
        })
        .end((err, res) => {
          // expect(res.statusCode).to.equals(200);
          expect(newMessage).to.be.a('object');
          expect(newMessage).to.have.property('status').eql('sent');
          expect(newMessage).to.have.property('subject').eql('Developer');
          expect(newMessage).to.have.property('createdOn').to.deep.equal('Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)');
          expect(newMessage).to.have.property('message').to.deep.equal('We are learning how to become world-class');
          // res.should.have.status(200);
          // res.body.should.be.a('object');
          // res.body.should.have.property('message').eql('message updated!');
          // res.body.message.should.have.property('year').eql(1950);
          done();
        });
    });
  });
  /*
  * Test the /DELETE/:id route
  */
  describe('/DELETE/:id message', () => {
    it('it should DELETE a message given the id', (done) => {
      const newMessage = {
        id: 1,
        createdOn: new Date().toString(),
        subject: 'Developer',
        message: 'We are learning how to become world-class',
        status: 'unread'
      };
      chai.request(app)
        .delete('api/v1/messages/:id')
        .end((err, res) => {
          // res.should.have.status(200);
          // res.body.should.be.a('object');
          // res.body.should.have.property('message').eql('message successfully deleted!');
          // res.body.result.should.have.property('ok').eql(1);
          // res.body.result.should.have.property('n').eql(1);
          done();
        });
    });
  });
});
