"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Board = _interopRequireDefault(require("../models/Board"));

var BoardController = function BoardController() {
  (0, _classCallCheck2["default"])(this, BoardController);
  (0, _defineProperty2["default"])(this, "createNewBoard", function _callee(name) {
    var newBoard;
    return _regenerator["default"].async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('attempt to create a new board!');
            _context.prev = 1;
            _context.next = 4;
            return _regenerator["default"].awrap(new _Board["default"]({
              board_name: name
            }));

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
    }, null, null, [[1, 9]]);
  });
  (0, _defineProperty2["default"])(this, "getBoardByName", function _callee2(name) {
    var board;
    return _regenerator["default"].async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log("attempt to find board by name! ~ name: ".concat(name));
            _context2.prev = 1;
            _context2.next = 4;
            return _regenerator["default"].awrap(_Board["default"].findOne({
              board_name: name
            }));

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
    }, null, null, [[1, 8]]);
  });
  (0, _defineProperty2["default"])(this, "updateBoard", function _callee3(board, threadId) {
    var threads;
    return _regenerator["default"].async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            threads = board.threads;
            console.log("Updating board! ~ threads: ", threads);
            board.threads.push(threadId);
            board.save();
            return _context3.abrupt("return", board);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            throw _context3.t0;

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 8]]);
  });
  (0, _defineProperty2["default"])(this, "validateBoardByName", function _callee4(name) {
    var regex;
    return _regenerator["default"].async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // console.log(`Validating board by name: ${name}`);
            regex = /^[a-z]{1}$/;

            if (!name.match(regex)) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", true);

          case 5:
            return _context4.abrupt("return", false);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    });
  });
  (0, _defineProperty2["default"])(this, "validateBody", function _callee5(body) {
    var thread_text, delete_password, textType, passwordType, validated;
    return _regenerator["default"].async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            // console.log(`Validating body: `, body);
            thread_text = body.thread_text, delete_password = body.delete_password, textType = (0, _typeof2["default"])(thread_text), passwordType = (0, _typeof2["default"])(delete_password);
            validated = {
              thread_text: textType === 'string' && thread_text !== '' ? true : false,
              delete_password: passwordType === 'string' && delete_password !== '' ? true : false
            };
            return _context5.abrupt("return", validated);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    });
  });
  (0, _defineProperty2["default"])(this, "reportBoard", function _callee6(report) {
    return _regenerator["default"].async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log("reporting board -> report: ".concat(report));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    });
  });
  (0, _defineProperty2["default"])(this, "deleteBoard", function _callee7(deletePassword) {
    return _regenerator["default"].async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            console.log("deleting board with -> ".concat(deletePassword));

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    });
  });
  (0, _defineProperty2["default"])(this, "addThread", function _callee8(threadName) {
    return _regenerator["default"].async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            console.log("add a '".concat(threadName, "' thread to board"));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    });
  });
};

var _default = BoardController;
exports["default"] = _default;
//# sourceMappingURL=boardController.js.map