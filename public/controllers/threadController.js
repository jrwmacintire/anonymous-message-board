"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Thread = _interopRequireDefault(require("../models/Thread"));

var _bson = require("bson");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ThreadController = function ThreadController() {
  (0, _classCallCheck2["default"])(this, ThreadController);
  (0, _defineProperty2["default"])(this, "createNewThread", function _callee(board, body, boardId) {
    var threadBody, newThread;
    return _regenerator["default"].async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('attempt to create a new thread!');
            _context.prev = 1;
            threadBody = _objectSpread({}, body, {
              boardId: boardId
            });
            _context.next = 5;
            return _regenerator["default"].awrap(_Thread["default"].create(threadBody));

          case 5:
            newThread = _context.sent;
            return _context.abrupt("return", newThread);

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
  (0, _defineProperty2["default"])(this, "getThreadsBySortString", function _callee2(sort, limit) {
    return _regenerator["default"].async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('Getting threads ~ sort:', sort);
            _context2.prev = 1;

            if (!limit) {
              _context2.next = 6;
              break;
            }

            _context2.next = 5;
            return _regenerator["default"].awrap(_Thread["default"].find({}).sort(sort).limit(limit));

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 6:
            _context2.next = 8;
            return _regenerator["default"].awrap(_Thread["default"].find({}).sort(sort));

          case 8:
            return _context2.abrupt("return", _context2.sent);

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            throw _context2.t0;

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 11]]);
  });
  (0, _defineProperty2["default"])(this, "getThreadByID", function _callee3(id) {
    return _regenerator["default"].async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _regenerator["default"].awrap(_Thread["default"].find({
              _id: new _bson.ObjectID(id)
            }));

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            throw _context3.t0;

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 6]]);
  });
  (0, _defineProperty2["default"])(this, "getThreadForDeleteTest", function _callee4() {
    return _regenerator["default"].async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _regenerator["default"].awrap(_Thread["default"].findOne({}));

          case 3:
            return _context4.abrupt("return", _context4.sent);

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            throw _context4.t0;

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 6]]);
  });
  (0, _defineProperty2["default"])(this, "addReply", function (reply) {
    console.log("adding reply!?1");
  });
  (0, _defineProperty2["default"])(this, "deleteReply", function (reply) {});
  (0, _defineProperty2["default"])(this, "deleteThread", function (delete_password) {});
  (0, _defineProperty2["default"])(this, "reportThread", function (report) {});
};

var _default = ThreadController;
exports["default"] = _default;
//# sourceMappingURL=threadController.js.map