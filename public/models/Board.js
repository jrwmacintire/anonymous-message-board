"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = _interopRequireWildcard(require("mongoose"));

var Schema = mongoose.Schema;

var Thread = require('../models/Thread');

var boardSchema = new Schema({
  board_name: {
    type: String,
    unique: true
  },
  threads: {
    types: [mongoose.Schema.Types.ObjectId],
    "default": []
  },
  created_on: {
    type: Date,
    "default": new Date()
  }
});

var _default = mongoose.model('Board', boardSchema);

exports["default"] = _default;
//# sourceMappingURL=Board.js.map