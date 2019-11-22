"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = _interopRequireWildcard(require("mongoose"));

var Schema = mongoose.Schema;
var messageSchema = new Schema({
  text: {
    type: String,
    unique: true
  },
  thread_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thread'
  },
  created_on: {
    type: Date,
    "default": new Date()
  },
  reported: {
    type: Boolean,
    "default": false
  },
  delete_password: {
    type: String
  }
});

var _default = mongoose.model('Message', messageSchema);

exports["default"] = _default;
//# sourceMappingURL=Message.js.map