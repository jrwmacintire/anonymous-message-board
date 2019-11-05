"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var BoardController = function BoardController() {
  (0, _classCallCheck2["default"])(this, BoardController);
  (0, _defineProperty2["default"])(this, "createNewBoard", function (name) {
    console.log('attempt to create a new board!');
  });
  (0, _defineProperty2["default"])(this, "findBoardByName", function (name) {
    console.log("attempt to find board by name! ~ name: ".concat(name));
  });
  (0, _defineProperty2["default"])(this, "reportBoard", function (report) {
    console.log("reporting board -> report: ".concat(report));
  });
  (0, _defineProperty2["default"])(this, "deleteBoard", function (deletePassword) {
    console.log("deleting board with -> ".concat(deletePassword));
  });
  (0, _defineProperty2["default"])(this, "addThread", function (threadName) {
    console.log("add a '".concat(threadName, "' thread to board"));
  });
};

var _default = BoardController;
exports["default"] = _default;