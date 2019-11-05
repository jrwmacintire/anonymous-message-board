"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BoardController = function BoardController() {
  _classCallCheck(this, BoardController);

  _defineProperty(this, "createNewBoard", function (name) {
    console.log('attempt to create a new board!');
  });

  _defineProperty(this, "findBoardByName", function (name) {
    console.log("attempt to find board by name! ~ name: ".concat(name));
  });

  _defineProperty(this, "reportBoard", function (report) {
    console.log("reporting board -> report: ".concat(report));
  });

  _defineProperty(this, "deleteBoard", function (deletePassword) {
    console.log("deleting board with -> ".concat(deletePassword));
  });

  _defineProperty(this, "addThread", function (threadName) {
    console.log("add a '".concat(threadName, "' thread to board"));
  });
};

module.exports = BoardController;