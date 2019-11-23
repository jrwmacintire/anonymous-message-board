"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectDB = exports.models = void 0;

var mongoose = _interopRequireWildcard(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _Board = _interopRequireDefault(require("./Board"));

var _Thread = _interopRequireDefault(require("./Thread"));

var _Message = _interopRequireDefault(require("./Message"));

_dotenv["default"].config();

var DB_URL = process.env.DB_URL;

var connectDB = function connectDB() {
  return mongoose.connect(DB_URL, {
    useNewUrlParser: true
  });
};

exports.connectDB = connectDB;
var models = {
  Board: _Board["default"],
  Thread: _Thread["default"],
  Message: _Message["default"]
};
exports.models = models;
//# sourceMappingURL=index.js.map