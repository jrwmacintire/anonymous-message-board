import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    text: { type: String, unique: true },
    thread_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Thread' },
    created_on: { type: Date, default: new Date() },
    reported: { type: Boolean, default: false },
    delete_password: { type: String }
  }
);

export default mongoose.model('Message', messageSchema);