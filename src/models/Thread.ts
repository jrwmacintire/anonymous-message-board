import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

import ThreadInterface from '../interfaces/Thread.interface';

const Message = require('../models/Message');

const threadSchema = new Schema(
  {
    thread_text: { type: String },
    board_id: { type: mongoose.Schema.Types.ObjectId },
    created_on: { type: Date, default: new Date() },
    bumped_on: { type: Date, default: new Date() },
    replies: { type: [ mongoose.Schema.Types.ObjectId ], ref: 'Message'},
    reported: { type: Boolean, default: false },
    delete_password: { type: String }
  }
);

export default mongoose.model<ThreadInterface>('Thread', threadSchema);