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

var _boardController = _interopRequireDefault(require("../controllers/boardController"));

var boardController = new _boardController["default"]();

function _default(app) {
  app.route('/api/threads/:board').get(function _callee(req, res) {
    var boardName, validBoardName, board, response, newBoard;
    return _regenerator["default"].async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            boardName = req.params.board;
            _context.prev = 1;
            _context.next = 4;
            return _regenerator["default"].awrap(boardController.validateBoardByName(boardName));

          case 4:
            validBoardName = _context.sent;

            if (!validBoardName) {
              _context.next = 22;
              break;
            }

            _context.next = 8;
            return _regenerator["default"].awrap(boardController.findBoardByName(boardName));

          case 8:
            board = _context.sent;

            if (!board) {
              _context.next = 15;
              break;
            }

            console.log("Board FOUND:", board);
            response = {
              board: board,
              message: 'working on GET'
            };
            res.json(response);
            _context.next = 20;
            break;

          case 15:
            console.log('Board not found - prepare to create board!');
            _context.next = 18;
            return _regenerator["default"].awrap(boardController.createNewBoard(boardName));

          case 18:
            newBoard = _context.sent;
            res.json(newBoard);

          case 20:
            _context.next = 23;
            break;

          case 22:
            // Invalid board name, send error response
            res.status(400).send('Error: invalid board name');

          case 23:
            _context.next = 28;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](1);
            throw _context.t0;

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 25]]);
  }).post(function _callee2(req, res) {
    var boardName, _req$body, text, delete_password, body, valid, validatedBoardName, validatedBody;

    return _regenerator["default"].async(function _callee2$(_context2) {
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
            return _regenerator["default"].awrap(Promise.all([boardController.validateBoardByName(boardName), boardController.validateBody(body)]));

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
    }, null, null, [[7, 33]]);
  }).put(function (req, res) {
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
//# sourceMappingURL=api.js.map