import * as mongoose from 'mongoose';
import { ObjectID } from 'bson';
const Schema = mongoose.Schema;
const threadSchema = new Schema({
    thread_name: { type: String, unique: true },
    board_id: { type: mongoose.Types.ObjectId },
    created_on: { type: Date, default: new Date() },
    bumped_on: { type: Date, default: new Date() },
    replies: { type: [ObjectID] },
    reported: { type: Boolean, default: false },
    delete_password: { type: String }
});
export default mongoose.model('Thread', threadSchema);
