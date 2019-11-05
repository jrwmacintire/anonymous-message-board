"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Thread = function Thread() {
  _classCallCheck(this, Thread);

  _defineProperty(this, "createNewThread", function () {
    console.log('attempt to create a new thread!');
  });

  _defineProperty(this, "addReply", function (reply) {
    console.log("adding reply!?");
  });

  _defineProperty(this, "deleteReply", function (reply) {});

  _defineProperty(this, "deleteThread", function (delete_password) {});

  _defineProperty(this, "reportThread", function (report) {});
};

var _default = Thread;
exports["default"] = _default;