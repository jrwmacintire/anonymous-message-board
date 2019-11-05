import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Thread = require('../models/Thread');

const boardSchema = new Schema(
  {
    board_name: { type: String, unique: true },
    threads: { types: [mongoose.Schema.Types.ObjectId], default: [] },
    created_on: { type: Date, default: new Date() },
  }
);


export default mongoose.model('Board', boardSchema);