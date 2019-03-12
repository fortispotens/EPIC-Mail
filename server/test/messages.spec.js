
import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import Message from '../model/message.model';
import app from '../app';
import server from '../server';

process.env.NODE_ENV = 'test';

const should = chai.should();

chai.use(chaiHttp);
const request = chai.request(server);

describe('Message', () => {
  beforeEach('Empty Message contents', () => {
    Message.deleteSpecificMessage(() => {
    });
  });
  // afterEach((done) => {
  //   Message.deleteSpecificMessage({}, (_err) => {
  //     if (err) return done(err);
  //     done();
  //   });
  // });

  describe('/GET messages', () => {
    it('it should fetch all messages', (done) => {
      chai.request(app)
        .get('/messages')
        .end((err, res) => {
          // expect(res.status).to.equal(404);
          // expect(res.body).to.be.an('array');
          // expect(res.body.length).to.equal(0);
          const Message = [];
          res.should.have.status(404);
          res.body.should.be.a('object');
          // Message.length.to.equal(0);
          done();
        });
    });
  });
});
