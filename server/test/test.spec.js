import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import server from '../server';

chai.use(chaiHttp);
const request = chai.request(server);

describe('Status', () => {
  describe('Main page', () => {
    it('status', (done) => {
      chai.request(app)
        .get('/api/v1/')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });
});
