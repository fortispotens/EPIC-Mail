import { customMiddleware } from 'valid_me_js';

const signupValidate = (req, res, next) => {
  const valid = customMiddleware(req, res, next);

  valid
    .hasElement('email')
    .isEmail('email')
    .hasElement('firstname')
    .hasElement('lastname')
    .hasElement('password')
    .contains('email', '@epic.com')
    .check();
};

const loginValidate = (req, res, next) => {
  const valid = customMiddleware(req, res, next);

  valid
    .hasElement('email')
    .hasElement('password')
    .isEmail()
    .contains('email', '@epic.com')
    .check();
};

const messageValidate = (req, res, next) => {
  const valid = customMiddleware(req, res, next);

  valid
    .hasElement('subject')
    .hasElement('message')
    .check();
};

const groupValidate = (req, res, next) => {
  const valid = customMiddleware(req, res, next);

  valid
    .hasElement('name')
    .check();
};

export {
  signupValidate,
  loginValidate,
  messageValidate,
  groupValidate
};
