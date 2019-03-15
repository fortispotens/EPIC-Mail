"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _messages = _interopRequireDefault(require("./routes/messages.route"));

var _users = _interopRequireDefault(require("./routes/users.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_express.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json());
app.get('/api/v1', function (req, res) {
  return res.status(200).send({
    message: 'Server is working'
  });
});
app.use('/api/v1/messages/', _messages.default);
app.use('/api/v1/auth', _users.default);
var _default = app;
exports.default = _default;