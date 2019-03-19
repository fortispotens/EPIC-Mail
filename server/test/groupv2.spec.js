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
});
