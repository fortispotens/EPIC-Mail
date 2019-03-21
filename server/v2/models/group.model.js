import moment from 'moment';
import uuid from 'uuid';

class Group {
  constructor() {
    this.groups = [];
    this.groupUsers = [];
  }

  newGroup(data) {
    const group = {
      id: this.groups.length + 1,
      name: data.name,
      role: data.role,
    };
    this.groups.push(group);
    return group;
  }

  allGroups() {
    return this.groups;
  }

  oneGroup(id) {
    return this.groups.find(group => group.id === id);
  }

  deleteOneGroup(id) {
    const group = this.oneGroup(id);
    const groupIndex = this.groups.indexOf(group);
    return this.groups.splice(groupIndex, 1);
  }

  newGroupUser(groupUserData) {
    const groupUser = {
      id: this.groups.length + 1,
      userId: this.groupUsers.length + 1,
      role: groupUserData.role,
    };
    this.groupUsers.push(groupUser);
    return groupUser;
  }

  allGroupUsers() {
    return this.groupUsers;
  }

  oneGroupUser(userId) {
    return this.groupUsers.find(groupUser => groupUser.userId === userId);
  }

  deleteOneGroupUser(userId) {
    const groupUser = this.oneGroupUser(userId);
    const groupIndex = this.groupUsers.indexOf(groupUser);
    return this.groupUsers.splice(groupIndex, 1);
  }
}

export default new Group();
