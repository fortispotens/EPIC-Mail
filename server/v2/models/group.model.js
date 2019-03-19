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
}

export default new Group();
