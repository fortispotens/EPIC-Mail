"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("../models/user.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserController = {
  userSignup: function userSignup(req, res) {
    if (!req.body.email || !req.body.firstname || !req.body.lastname || !req.body.password) {
      return res.status(400).json({
        message: 'All fields are required'
      });
    }

    var signUpData = _user.default.userSignup(req.body);

    return res.status(201).json({
      status: res.statusCode,
      message: 'Account created successfully',
      signUpData: signUpData
    });
  },
  userLogin: function userLogin(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        message: 'Enter your Email or Password'
      });
    }

    var loginData = _user.default.userSignup(req.body);

    return res.status(201).json({
      status: res.statusCode,
      message: 'Login was successful',
      loginData: loginData
    });
  }
};
var _default = UserController;
exports.default = _default;