import { expect } from 'chai';
import request from 'request';

describe('Status', () => {
  describe('Main page', () => {
    it('status', (done) => {
      request('http://localhost:8080', (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
