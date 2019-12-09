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

var _threadController = _interopRequireDefault(require("../controllers/threadController"));

var _PostThreadBody = _interopRequireDefault(require("../interfaces/PostThreadBody.interface"));

var boardController = new _boardController["default"]();
var threadController = new _threadController["default"]();

function _default(app) {
  app.route('/api/threads/:board').get(function _callee(req, res) {
    var boardName, validBoardName, board, newBoard;
    return _regenerator["default"].async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            boardName = req.params.board;
            _context.next = 4;
            return _regenerator["default"].awrap(boardController.validateBoardByName(boardName));

          case 4:
            validBoardName = _context.sent;

            if (!validBoardName) {
              _context.next = 21;
              break;
            }

            _context.next = 8;
            return _regenerator["default"].awrap(boardController.getBoardByName(boardName));

          case 8:
            board = _context.sent;

            if (!board) {
              _context.next = 14;
              break;
            }

            console.log("Board FOUND:", board); // start: array of ObjectIDs from board's 'threads' array
            //      : take 10 most recently bumped thread IDs from (index 0-9)
            //      : query all docs with given thread IDs from DB
            //      : parse raw thread docs into objects 
            //      : filter out 'delete_password' or 'reported' values from response array
            //   end: parsed/filtered array of thread doc objects

            res.send([]);
            _context.next = 19;
            break;

          case 14:
            console.log('Board not found - prepare to create board!');
            _context.next = 17;
            return _regenerator["default"].awrap(boardController.createNewBoard(boardName));

          case 17:
            newBoard = _context.sent;
            res.send([]);

          case 19:
            _context.next = 22;
            break;

          case 21:
            // Invalid board name, send error response
            res.status(400).send('Error: invalid board name');

          case 22:
            _context.next = 27;
            break;

          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 24]]);
  }).post(function _callee2(req, res) {
    var boardName, body, valid, validatedBoardName, validatedBody, board, thread, update;
    return _regenerator["default"].async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            boardName = req.params.board;
            body = {
              thread_text: req.body.thread_text,
              delete_password: req.body.delete_password
            };
            _context2.next = 4;
            return _regenerator["default"].awrap(Promise.all([boardController.validateBoardByName(boardName), boardController.validateBody(body)]));

          case 4:
            valid = _context2.sent;
            validatedBoardName = valid[0], validatedBody = valid[1];
            ; // console.log(`valid: `, valid);
            // If board's name is valid

            if (!validatedBoardName) {
              _context2.next = 44;
              break;
            }

            _context2.next = 10;
            return _regenerator["default"].awrap(boardController.getBoardByName(boardName));

          case 10:
            board = _context2.sent;

            if (!(validatedBody.thread_text && validatedBody.delete_password && board !== null)) {
              _context2.next = 25;
              break;
            }

            if (!board) {
              _context2.next = 22;
              break;
            }

            _context2.next = 15;
            return _regenerator["default"].awrap(threadController.createNewThread(boardName, body, board.id));

          case 15:
            thread = _context2.sent;
            update = {
              $push: {
                "threads": thread._id
              }
            };
            _context2.next = 19;
            return _regenerator["default"].awrap(boardController.updateBoard(board, thread._id));

          case 19:
            // update board with thread's id in 'threads' array
            // then redirect to the newly created thread's board.
            res.redirect(303, "/api/threads/".concat(boardName));
            _context2.next = 23;
            break;

          case 22:
            res.send('Redirect failed, check if board exists...');

          case 23:
            _context2.next = 42;
            break;

          case 25:
            if (!(board === null || board === undefined)) {
              _context2.next = 29;
              break;
            }

            res.status(400).send('Board not found. Please create or search for a new board.');
            _context2.next = 42;
            break;

          case 29:
            if (!(!validatedBody.thread_text && !validatedBody.delete_password)) {
              _context2.next = 33;
              break;
            }

            // Error: all inputs invalid
            res.status(400).send('Please ensure all input fields are filled out and try again.');
            _context2.next = 42;
            break;

          case 33:
            if (validatedBody.thread_text) {
              _context2.next = 37;
              break;
            }

            // Error: 'text' field is invalid
            res.status(400).send('Invalid input for text. Please try again.');
            _context2.next = 42;
            break;

          case 37:
            if (validatedBody.delete_password) {
              _context2.next = 41;
              break;
            }

            // Error: 'delete_password' field is invalid
            res.status(400).send('Invalid input for delete_password field. Please try again.');
            _context2.next = 42;
            break;

          case 41:
            throw Error('Catch all error for error-handling on body validation.');

          case 42:
            _context2.next = 45;
            break;

          case 44:
            res.status(400).send('Invalid input for board name. Please try again.');

          case 45:
          case "end":
            return _context2.stop();
        }
      }
    });
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