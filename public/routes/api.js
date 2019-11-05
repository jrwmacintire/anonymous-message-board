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
      var params;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = req.params;
              console.log("params: ", params);
              res.send(params);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()).post(function (req, res) {
    res.send(req.body);
  }).put(function (req, res) {
    res.send(req.body);
  })["delete"](function (req, res) {
    res.send('Request to delete a thread?');
  });
  app.route('/api/replies/:board').get(function (req, res) {
    res.send({
      message: 'replies will be here, eventually',
      params: req.params
    });
  }).post(function (req, res) {}).put(function (req, res) {})["delete"](function (req, res) {});
}

;