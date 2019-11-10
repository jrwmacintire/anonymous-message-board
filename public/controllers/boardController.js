"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Board = _interopRequireDefault(require("../models/Board"));

var BoardController = function BoardController() {
  (0, _classCallCheck2["default"])(this, BoardController);
  (0, _defineProperty2["default"])(this, "createNewBoard",
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(name) {
      var newBoard;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('attempt to create a new board!');
              _context.prev = 1;
              _context.next = 4;
              return new _Board["default"]({
                board_name: name
              });

            case 4:
              newBoard = _context.sent;
              newBoard.save(function (doc) {
                console.log("New '".concat(name, "' board created!"));
              });
              return _context.abrupt("return", newBoard);

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              throw _context.t0;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "findBoardByName",
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(name) {
      var board;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log("attempt to find board by name! ~ name: ".concat(name));
              _context2.prev = 1;
              _context2.next = 4;
              return _Board["default"].findOne({
                board_name: name
              });

            case 4:
              board = _context2.sent;
              return _context2.abrupt("return", board);

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              throw _context2.t0;

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "validateBoardByName",
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(name) {
      var regex;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log("Validating board by name: ".concat(name));
              regex = /^[a-z]{1}$/;

              if (!name.match(regex)) {
                _context3.next = 6;
                break;
              }

              return _context3.abrupt("return", true);

            case 6:
              return _context3.abrupt("return", false);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "validateBody",
  /*#__PURE__*/
  function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(body) {
      var text, delete_password, textType, passwordType, validated;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log("Validating body: ", body);
              text = body.text, delete_password = body.delete_password, textType = (0, _typeof2["default"])(text), passwordType = (0, _typeof2["default"])(delete_password);
              validated = {
                text: textType === 'string' && text !== '' ? true : false,
                delete_password: passwordType === 'string' && delete_password !== '' ? true : false
              };
              return _context4.abrupt("return", validated);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "reportBoard",
  /*#__PURE__*/
  function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5(report) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              console.log("reporting board -> report: ".concat(report));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "deleteBoard",
  /*#__PURE__*/
  function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee6(deletePassword) {
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              console.log("deleting board with -> ".concat(deletePassword));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "addThread",
  /*#__PURE__*/
  function () {
    var _ref7 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee7(threadName) {
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              console.log("add a '".concat(threadName, "' thread to board"));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x7) {
      return _ref7.apply(this, arguments);
    };
  }());
};

var _default = BoardController;
exports["default"] = _default;