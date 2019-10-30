import * as mongoose from 'mongoose';
import { ObjectID } from 'bson';
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    text: { type: String, unique: true },
    
    status_text: { type: String, default: '' },
    thread_id: { type: [ ObjectID ] },
    created_on: { type: Date, default: new Date() },
    reported: { type: Boolean, default: false },
    delete_password: { type: String }
  }
);

export default mongoose.model('Message', messageSchema);