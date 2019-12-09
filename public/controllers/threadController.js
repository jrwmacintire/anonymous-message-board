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