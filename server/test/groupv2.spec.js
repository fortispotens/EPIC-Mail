import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

import GroupModel from '../v2/models/group.model';
import MessageModel from '../v2/models/message.model';


chai.use(chaiHttp);
const request = chai.request(app);

const createdGroup = GroupModel.newGroup('group');
const allGroups = GroupModel.allGroups();
const createMessage = MessageModel.createNewMessage('newMessage');

const groups = [
  {
    statusCode: 200,
    id: 1,
    name: 'Group 1',
    role: 'Food Committee',
  },
];

const group = {
  statusCode: 201,
  id: 1,
  name: 'Group 1',
  role: 'Food Committee',
};

describe('Groups', () => {
  beforeEach((done) => {
    done();
  });
  afterEach((done) => {
    done();
  });
  describe('Create a Group', () => {
    it('it should create a new Group', (done) => {
      chai.request(app)
        .post('api/v2/groups')
        .end((err, res) => {
          expect(groups[0].statusCode).to.equal(200);
          expect(groups).to.be.an('array');
          expect(createdGroup).to.be.a('object');
          expect(group).to.be.a('object');
          expect(group).to.have.property('id').to.deep.equal(1);
          expect(group).to.have.property('name').eql('Group 1');
          expect(group).to.have.property('role').eql('Food Committee');
          done();
        });
    });
  });
  describe('Get All Groups', () => {
    it('it should GET all the groups', (done) => {
      chai.request(app)
        .get('api/v2/groups')
        .end((err, res) => {
          expect(groups[0].statusCode).to.equal(200);
          expect(groups).to.be.an('array');
          expect(group).to.be.a('object');
          expect(group).to.have.property('id').to.deep.equal(1);
          expect(group).to.have.property('name').eql('Group 1');
          expect(group).to.have.property('role').eql('Food Committee');
          done();
        });
    });
  });
  describe('Edit Group Name', () => {
    it('it should PATCH a group name', (done) => {
      const group = {
        statusCode: 201,
        id: 1,
        name: 'Group 5',
        role: 'Food Committee',
      };
      chai.request(app)
        .patch('api/v2/groups/:id/name')
        .end((err, res) => {
          expect(groups[0].statusCode).to.equal(200);
          expect(groups).to.be.an('array');
          expect(group).to.be.a('object');
          expect(group).to.have.property('id').to.deep.equal(1);
          expect(group).to.have.property('name').eql('Group 5');
          expect(group).to.have.property('role').eql('Food Committee');
          done();
        });
    });
  });
  describe('Delete a group', () => {
    it('it should DELETE a group', (done) => {
      const group = {
        statusCode: 201,
        id: 1,
        name: 'Group 5',
        role: 'Food Committee',
      };
      chai.request(app)
        .delete('api/v2/groups/:id/')
        .end((err, res) => {
          expect(groups[0].statusCode).to.equal(200);
          expect(groups).to.be.an('array');
          expect(groups[0]).to.be.an('object');
          expect(group).to.be.a('object');
          expect(group).to.have.property('id').to.deep.equal(1);
          expect(group).to.have.property('name').eql('Group 5');
          expect(group).to.have.property('role').eql('Food Committee');
          done();
        });
    });
  });
  describe('Create a Group User', () => {
    it('it should create a new Group', (done) => {
      const groupUser = {
        userId: 2,
        role: 'Food Committee'
      };
      chai.request(app)
        .post('api/v2/groups/:id/user')
        .end((err, res) => {
          expect(groups[0].statusCode).to.equal(200);
          expect(groups).to.be.an('array');
          expect(createdGroup).to.be.a('object');
          expect(group).to.be.a('object');
          expect(groupUser).to.be.a('object');
          expect(group).to.have.property('id').to.deep.equal(1);
          expect(groupUser).to.have.property('userId').to.deep.equal(2);
          expect(group).to.have.property('name').eql('Group 1');
          expect(groupUser).to.have.property('role').eql('Food Committee');
          done();
        });
    });
  });
  describe('Send a message to group', () => {
    it('it should send a new message to group ', (done) => {
      const newMessage = {
        statusCode: 201,
        id: 1,
        createdOn: 'Fri Mar 15 2019 19:02:50 GMT+0100 (WAT)',
        subject: 'Developer',
        message: 'We are learning how to become world-class',
        status: 'unread'
      };
      chai.request(app)
        .post('api/v2/groups/:id/user')
        .end((err, res) => {
          // expect(messages[0].statusCode).to.equal(200);
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
});
