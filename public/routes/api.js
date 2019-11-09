/*
*
*
*       Complete the API routing below
*
*
*/
'use strict'; // const expect = require('chai').expect;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _boardController = _interopRequireDefault(require("../controllers/boardController"));

var boardController = new _boardController["default"]();

function _default(app) {
  app.route('/api/threads/:board').get(
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(req, res) {
      var boardName;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              boardName = req.params.board;
              _context.prev = 1;
              // validate boardName
              // throw error if invalid
              // query thread ids from board
              // filter 10 threads with the highest bumps/replies
              // display with json, or send 'No replies were found on this thread.'
              res.sendFile(process.cwd() + "/src/views/board.html");
              _context.next = 8;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](1);
              throw _context.t0;

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 5]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()).post(
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(req, res) {
      var boardName, body, board, newBoard;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              boardName = req.params.board;
              body = req.body;
              _context2.prev = 2;
              _context2.next = 5;
              return boardController.findBoardByName(boardName);

            case 5:
              board = _context2.sent;

              if (!(board === null || board === undefined)) {
                _context2.next = 13;
                break;
              }

              console.log("'".concat(boardName, "' board not found!")); // create new board

              _context2.next = 10;
              return boardController.createNewBoard(boardName);

            case 10:
              newBoard = _context2.sent;
              _context2.next = 14;
              break;

            case 13:
              console.log("'".concat(boardName, "' board was FOUND."));

            case 14:
              res.status(307).redirect("/api/threads/".concat(boardName));
              _context2.next = 20;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](2);
              throw _context2.t0;

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 17]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }()).put(function (req, res) {
    res.send(req.body);
  })["delete"](function (req, res) {
    res.send('Request to delete a thread?');
  });
  app.route('/api/replies/:board').get(function (req, res) {
    var params = req.params;
    res.send("params: ".concat(params));
  }).post(function (req, res) {
    res.send(req.body);
  }).put(function (req, res) {
    res.send(req.body);
  })["delete"](function (req, res) {
    res.send(req.body);
  });
}

;