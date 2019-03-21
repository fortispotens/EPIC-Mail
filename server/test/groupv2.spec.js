import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

import GroupModel from '../v2/models/group.model';


chai.use(chaiHttp);
const request = chai.request(app);

const createdGroup = GroupModel.newGroup('group');
const allGroups = GroupModel.allGroups();

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
});
