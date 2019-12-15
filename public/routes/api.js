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
    var boardName, validBoardName, board, bumpedThreads, filteredThreads, newBoard;
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
              _context.next = 23;
              break;
            }

            _context.next = 8;
            return _regenerator["default"].awrap(boardController.getBoardByName(boardName));

          case 8:
            board = _context.sent;

            if (!board) {
              _context.next = 17;
              break;
            }

            _context.next = 12;
            return _regenerator["default"].awrap(threadController.getThreadsBySortString('-created_on', 10));

          case 12:
            bumpedThreads = _context.sent;
            filteredThreads = bumpedThreads.map(function (thread) {
              return {
                _id: thread._id,
                text: thread.thread_text,
                created_on: thread.created_on,
                bumped_on: thread.bumped_on,
                replycount: thread.replies.length
              };
            });
            res.send(filteredThreads);
            _context.next = 21;
            break;

          case 17:
            _context.next = 19;
            return _regenerator["default"].awrap(boardController.createNewBoard(boardName));

          case 19:
            newBoard = _context.sent;
            res.send();

          case 21:
            _context.next = 24;
            break;

          case 23:
            // Invalid board name, send error response
            res.status(400).send('A board with that name could not be found. Please enter a different board name.');

          case 24:
            _context.next = 29;
            break;

          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 26]]);
  }).post(function _callee2(req, res) {
    var boardName, body, valid, validatedBoardName, validatedBody, board, thread;
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
              _context2.next = 43;
              break;
            }

            _context2.next = 10;
            return _regenerator["default"].awrap(boardController.getBoardByName(boardName));

          case 10:
            board = _context2.sent;

            if (!(validatedBody.thread_text && validatedBody.delete_password && board !== null)) {
              _context2.next = 24;
              break;
            }

            if (!board) {
              _context2.next = 21;
              break;
            }

            _context2.next = 15;
            return _regenerator["default"].awrap(threadController.createNewThread(boardName, body, board.id));

          case 15:
            thread = _context2.sent;
            _context2.next = 18;
            return _regenerator["default"].awrap(boardController.updateBoard(board, thread._id));

          case 18:
            // update board with thread's id in 'threads' array
            // then redirect to the newly created thread's board.
            res.redirect(303, "/api/threads/".concat(boardName));
            _context2.next = 22;
            break;

          case 21:
            res.send('Redirect failed, check if board exists...');

          case 22:
            _context2.next = 41;
            break;

          case 24:
            if (!(board === null || board === undefined)) {
              _context2.next = 28;
              break;
            }

            res.status(400).send('Board not found. Please create or search for a new board.');
            _context2.next = 41;
            break;

          case 28:
            if (!(!validatedBody.thread_text && !validatedBody.delete_password)) {
              _context2.next = 32;
              break;
            }

            // Error: all inputs invalid
            res.status(400).send('Please ensure all input fields are filled out and try again.');
            _context2.next = 41;
            break;

          case 32:
            if (validatedBody.thread_text) {
              _context2.next = 36;
              break;
            }

            // Error: 'text' field is invalid
            res.status(400).send('Invalid input for text. Please try again.');
            _context2.next = 41;
            break;

          case 36:
            if (validatedBody.delete_password) {
              _context2.next = 40;
              break;
            }

            // Error: 'delete_password' field is invalid
            res.status(400).send('Invalid input for delete_password field. Please try again.');
            _context2.next = 41;
            break;

          case 40:
            throw Error('Catch all error for error-handling on body validation.');

          case 41:
            _context2.next = 44;
            break;

          case 43:
            res.status(400).send('Invalid input for board name. Please try again.');

          case 44:
          case "end":
            return _context2.stop();
        }
      }
    });
  }).put(function _callee3(req, res) {
    return _regenerator["default"].async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res.send(req.body);

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    });
  })["delete"](function _callee4(req, res) {
    var body, threadToDelete;
    return _regenerator["default"].async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            body = req.body;
            console.log("body of delete request: ", body);
            _context4.next = 4;
            return _regenerator["default"].awrap(threadController.getThreadByID(body.thread_id));

          case 4:
            threadToDelete = _context4.sent;
            res.send('Request to delete a thread?');

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    });
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