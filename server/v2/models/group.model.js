import moment from 'moment';
import uuid from 'uuid';

class Group {
  constructor() {
    this.groups = [];
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
}

export default new Group();
