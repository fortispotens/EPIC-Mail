"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);

    this.users = [];
  }

  _createClass(User, [{
    key: "userSignup",
    value: function userSignup(data) {
      var newUser = {
        id: this.users.length + 1,
        email: data.email,
        firstName: data.firstname,
        lastName: data.lastname,
        password: data.password
      };
      this.users.push(newUser);
      return newUser;
    }
  }, {
    key: "userLogin",
    value: function userLogin(data) {
      var existingUser = {
        id: this.users.length + 1,
        email: data.email,
        password: data.password
      };
      this.users.push(newUser);
      return existingUser;
    }
  }]);

  return User;
}();

var _default = new User();

exports.default = _default;