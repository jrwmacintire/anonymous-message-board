"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Thread = function Thread() {
  (0, _classCallCheck2["default"])(this, Thread);
  (0, _defineProperty2["default"])(this, "createNewThread", function () {
    console.log('attempt to create a new thread!');
  });
  (0, _defineProperty2["default"])(this, "addReply", function (reply) {
    console.log("adding reply!?");
  });
  (0, _defineProperty2["default"])(this, "deleteReply", function (reply) {});
  (0, _defineProperty2["default"])(this, "deleteThread", function (delete_password) {});
  (0, _defineProperty2["default"])(this, "reportThread", function (report) {});
};

var _default = Thread;
exports["default"] = _default;