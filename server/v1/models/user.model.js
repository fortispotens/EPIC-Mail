import moment from 'moment';
import uuid from 'uuid';

class User {
  constructor() {
    this.users = [];
  }

  signup(data) {
    const newUser = {
      id: this.users.length + 1,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password
    };
    this.users.push(newUser);
    return newUser;
  }

  login(data) {
    const existingUser = {
      id: this.users.length + 1,
      email: data.email,
      password: data.password
    };
    this.users.push(existingUser);
    return existingUser;
  }
}

export default new User();
