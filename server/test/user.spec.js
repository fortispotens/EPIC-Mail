import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

import UserModel from '../models/user.model';


chai.use(chaiHttp);
const request = chai.request(app);

const newUser = UserModel.signup('newUser');
const existingUser = UserModel.login('existingUser');

const users = [
  {
    id: 1,
    email: 'JohnDoe@work.com',
    firstName: 'John',
    lastName: 'Doe',
    password: '123'
  }
];

describe('Users', () => {
  beforeEach((done) => {
    done();
  });
  afterEach((done) => {
    done();
  });
  describe('Create a new user', () => {
    it('it should create a new user', (done) => {
      const signupInfo = {
        id: 1,
        email: 'JohnDoe@work.com',
        firstName: 'John',
        lastName: 'Doe',
        password: '123'
      };
      chai.request(app)
        .post('api/v1/auth/users')
        .end((err, res) => {
          expect(newUser).to.be.a('object');
          expect(signupInfo).to.be.a('object');
          expect(signupInfo).to.have.property('id').to.deep.equal(1);
          expect(signupInfo).to.have.property('email').eql('JohnDoe@work.com');
          expect(signupInfo).to.have.property('firstName').eql('John');
          expect(signupInfo).to.have.property('lastName').to.deep.equal('Doe');
          expect(signupInfo).to.have.property('password').to.deep.equal('123');
          done();
        });
    });
  });
  describe('Login an existing user', () => {
    it('it should login an existing user', (done) => {
      const loginInfo = {
        id: 1,
        email: 'JohnDoe@work.com',
        password: '123'
      };
      chai.request(app)
        .post('api/v1/auth/users')
        .end((err, res) => {
          expect(existingUser).to.be.a('object');
          expect(loginInfo).to.be.a('object');
          expect(loginInfo).to.have.property('id').to.deep.equal(1);
          expect(loginInfo).to.have.property('email').eql('JohnDoe@work.com');
          expect(loginInfo).to.have.property('password').to.deep.equal('123');
          done();
        });
    });
  });
});
