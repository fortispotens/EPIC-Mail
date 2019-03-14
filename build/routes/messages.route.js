"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _message = _interopRequireDefault(require("../controllers/message.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.post('/', _message.default.sendNewMessage);
router.get('/', _message.default.getAllMessages);
router.get('/:id', _message.default.getSpecificMessage);
router.get('/status/unread', _message.default.getUnreadMessage);
router.get('/status/sent', _message.default.getSentMessage);
router.delete('/:id', _message.default.deleteSpecificMessage);
var _default = router;
exports.default = _default;