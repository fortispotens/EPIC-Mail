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

var Message =
/*#__PURE__*/
function () {
  function Message() {
    _classCallCheck(this, Message);

    this.messages = [];
  }

  _createClass(Message, [{
    key: "createNewMessage",
    value: function createNewMessage(data) {
      var newMessage = {
        id: this.messages.length + 1,
        createdOn: new Date().toString(),
        subject: data.subject,
        message: data.message,
        parentMessageId: data.parentMessageId,
        status: 'unread'
      };
      this.messages.push(newMessage);
      return newMessage;
    }
  }, {
    key: "fetchAllMessages",
    value: function fetchAllMessages() {
      return this.messages;
    }
  }, {
    key: "fetchSpecificMessage",
    value: function fetchSpecificMessage(id) {
      return this.messages.find(function (message) {
        return message.id === id;
      });
    }
  }, {
    key: "fetchUnreadMessage",
    value: function fetchUnreadMessage() {
      return this.messages.filter(function (message) {
        return message.status === 'unread';
      });
    }
  }, {
    key: "fetchSentMessage",
    value: function fetchSentMessage(sent) {
      return this.messages.filter(function (message) {
        return message.status === 'sent';
      });
    }
  }, {
    key: "deleteOneMessage",
    value: function deleteOneMessage(id) {
      var message = this.messages.find(function (message) {
        return message.id === id;
      });
      var index = this.messages.indexOf(message);
      var deletedMessage = this.messages.splice(index, 1);
      return deletedMessage;
    }
  }]);

  return Message;
}();

var _default = new Message();

exports.default = _default;