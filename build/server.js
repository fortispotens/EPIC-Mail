"use strict";

var _http = _interopRequireDefault(require("http"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 5000;

var server = _http.default.createServer(_app.default);

server.listen(port, function () {
  console.log("Server is listening on port ".concat(port));
});