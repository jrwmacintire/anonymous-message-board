"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = _interopRequireWildcard(require("mongoose"));

var Schema = mongoose.Schema;

var Message = require('../models/Message');

var threadSchema = new Schema({
  thread_name: {
    type: String,
    unique: true
  },
  board_id: {
    type: mongoose.Schema.Types.ObjectId
  },
  created_on: {
    type: Date,
    "default": new Date()
  },
  bumped_on: {
    type: Date,
    "default": new Date()
  },
  replies: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Message'
  },
  reported: {
    type: Boolean,
    "default": false
  },
  delete_password: {
    type: String
  }
});

var _default = mongoose.model('Thread', threadSchema);

exports["default"] = _default;
//# sourceMappingURL=Thread.js.map