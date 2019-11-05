"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectDB = exports.models = void 0;

var mongoose = _interopRequireWildcard(require("mongoose"));

var _Board = _interopRequireDefault(require("../models/Board"));

var _Thread = _interopRequireDefault(require("../models/Thread"));

var _Message = _interopRequireDefault(require("../models/Message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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