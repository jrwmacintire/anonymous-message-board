import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

import BoardInterface from '../interfaces/Board.interface';

const Thread = require('../models/Thread');

const boardSchema = new Schema(
  {
    board_name: { type: String, unique: true },
    threads: [{ type: mongoose.Schema.Types.ObjectId, default: [], ref: 'Thread' }],
    created_on: { type: Date, default: new Date() },
  }
);

export default mongoose.model<BoardInterface>('Board', boardSchema);