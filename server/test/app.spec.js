import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);

const request = chai.request(app);

describe('Status', () => {
  describe('Main page', () => {
    it('status', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.a('object');
          done();
        });
    });
  });
});
