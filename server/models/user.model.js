import moment from 'moment';
import uuid from 'uuid';

let id = 0;

class User {
  constructor() {
    this.users = [];
  }

  userSignup(data) {
    const newUser = {
      id: ++id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password
    };
    this.users.push(newUser);
    return newUser;
  }

  userLogin(data) {
    const existingUser = {
      id: ++id,
      email: data.email,
      password: data.password
    };
    this.users.push(existingUser);
    return existingUser;
  }
}

export default new User();
