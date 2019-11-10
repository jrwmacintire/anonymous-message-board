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
              // res.sendFile(process.cwd() + `/src/views/board.html`);
              res.json([]);
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
      var boardName, _req$body, text, delete_password, body, valid, validatedBoardName, validatedBody;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              boardName = req.params.board;
              _req$body = req.body, text = _req$body.text, delete_password = _req$body.delete_password;
              body = {
                text: text,
                delete_password: delete_password
              };
              _context2.next = 5;
              return Promise.all([boardController.validateBoardByName(boardName), boardController.validateBody(body)]);

            case 5:
              valid = _context2.sent;
              ;
              _context2.prev = 7;
              console.log("valid: ", valid);
              validatedBoardName = valid[0], validatedBody = valid[1]; // If board's name is valid

              if (!validatedBoardName) {
                _context2.next = 30;
                break;
              }

              if (!(validatedBody.text && validatedBody.delete_password)) {
                _context2.next = 15;
                break;
              }

              // then redirect to the newly created thread's board.
              res.redirect("/api/threads/".concat(boardName));
              _context2.next = 28;
              break;

            case 15:
              if (!(!validatedBody.text && !validatedBody.delete_password)) {
                _context2.next = 19;
                break;
              }

              // Error: all inputs invalid
              res.status(400).send('Please ensure all input fields are filled out and try again.');
              _context2.next = 28;
              break;

            case 19:
              if (validatedBody.text) {
                _context2.next = 23;
                break;
              }

              // Error: 'text' field is invalid
              res.status(400).send('Invalid input for text. Please try again.');
              _context2.next = 28;
              break;

            case 23:
              if (validatedBody.delete_password) {
                _context2.next = 27;
                break;
              }

              // Error: 'delete_password' field is invalid
              res.status(400).send('Invalid input for delete_password field. Please try again.');
              _context2.next = 28;
              break;

            case 27:
              throw Error('Catch all error for error-handling on body validation.');

            case 28:
              _context2.next = 31;
              break;

            case 30:
              res.status(400).send('Invalid input for board name. Please try again.');

            case 31:
              _context2.next = 36;
              break;

            case 33:
              _context2.prev = 33;
              _context2.t0 = _context2["catch"](7);
              throw _context2.t0;

            case 36:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[7, 33]]);
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